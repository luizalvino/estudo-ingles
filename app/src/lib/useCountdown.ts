import { useEffect, useRef, useState } from "react"

/**
 * Contagem regressiva baseada em timestamp: o restante é calculado por
 * `Date.now()` a cada tick, então throttle de `setInterval` em aba
 * inativa não acumula drift.
 *
 * O prazo (`deadline`) é fixado por `resetKey` — só muda quando a chave
 * muda (ex.: modo rápido ligado/desligado). Alternar `running` (ex.: nova
 * tentativa após erro) pausa/retoma o relógio sem reiniciá-lo.
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
  const deadlineRef = useRef(0)
  const firedRef = useRef(false)

  useEffect(() => {
    deadlineRef.current = Date.now() + limitSec * 1000
    firedRef.current = false
    setRemainingMs(limitSec * 1000)
  }, [resetKey, limitSec])

  useEffect(() => {
    if (!running) return
    const id = window.setInterval(() => {
      const left = deadlineRef.current - Date.now()
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
