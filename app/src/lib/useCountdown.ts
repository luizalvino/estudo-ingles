import { useEffect, useRef, useState } from "react"

/**
 * Contagem regressiva baseada em timestamp: o restante é calculado por
 * `Date.now()` a cada tick, então throttle de `setInterval` em aba
 * inativa não acumula drift.
 *
 * O prazo (`deadline`) é fixado no primeiro `running` após cada
 * `resetKey` — ou seja, o relógio de cada questão só começa quando ela
 * passa a contar (ex.: ao entrar na tela), não quando o modo é ligado.
 * Alternar `running` (ex.: nova tentativa após erro) pausa/retoma o
 * relógio sem reiniciá-lo; mudar `resetKey` (ex.: religar o modo)
 * reinicia o prazo.
 *
 * Dispara `onExpire` uma única vez e limpa o intervalo ao desmontar ou
 * quando `running` desliga. Retorna os segundos restantes (para cima).
 */
export function useCountdown(args: {
  running: boolean
  limitSec: number
  onExpire: () => void
  resetKey: string
}): number {
  const { running, limitSec, onExpire, resetKey } = args
  const [remainingMs, setRemainingMs] = useState(limitSec * 1000)
  const onExpireRef = useRef(onExpire)
  onExpireRef.current = onExpire
  const deadlineRef = useRef<number | null>(null)
  const firedRef = useRef(false)

  useEffect(() => {
    deadlineRef.current = null
    firedRef.current = false
    setRemainingMs(limitSec * 1000)
  }, [resetKey, limitSec])

  useEffect(() => {
    if (!running) return
    if (deadlineRef.current === null) {
      deadlineRef.current = Date.now() + limitSec * 1000
      setRemainingMs(limitSec * 1000)
    }
    const id = window.setInterval(() => {
      const left = (deadlineRef.current ?? Date.now()) - Date.now()
      if (left <= 0) {
        window.clearInterval(id)
        if (!firedRef.current) {
          firedRef.current = true
          setRemainingMs(0)
          onExpireRef.current()
        }
      } else {
        setRemainingMs(left)
      }
    }, 250)
    return () => window.clearInterval(id)
  }, [running, resetKey, limitSec])

  return Math.max(0, Math.ceil(remainingMs / 1000))
}
