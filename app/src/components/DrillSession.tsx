import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ExerciseRunner,
  type ExerciseResult,
} from "@/components/LessonContent"
import { getTimeableExercises, type LessonContent } from "@/content"

type Counts = Record<ExerciseResult, number>

function emptyCounts(): Counts {
  return { correct: 0, incorrect: 0, timeout: 0 }
}

function Summary({
  counts,
  total,
  onRestart,
  onExit,
}: {
  counts: Counts
  total: number
  onRestart: () => void
  onExit: () => void
}) {
  return (
    <Card>
      <CardContent className="flex flex-col gap-3 pt-6">
        <h2 className="text-lg font-semibold">Sessão concluída</h2>
        <p className="text-sm">
          Acertos: {counts.correct} · Erros: {counts.incorrect} · Tempo
          esgotado: {counts.timeout}
        </p>
        <p className="text-sm text-muted-foreground">
          de {total} questões no treino
        </p>
        <div className="flex flex-wrap gap-2">
          <Button type="button" onClick={onRestart}>
            Refazer
          </Button>
          <Button type="button" variant="outline" onClick={onExit}>
            Voltar à aula
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export function DrillSession({
  content,
  onExit,
}: {
  content: LessonContent
  onExit: () => void
}) {
  const questions = getTimeableExercises(content)
  const [index, setIndex] = useState(0)
  const [answer, setAnswer] = useState<ExerciseResult | null>(null)
  const [counts, setCounts] = useState<Counts>(emptyCounts)
  const [finished, setFinished] = useState(false)
  const [session, setSession] = useState(0)

  if (questions.length === 0) return null

  const isLast = index === questions.length - 1

  const handleResult = (result: ExerciseResult) => {
    setAnswer(result)
    setCounts((previous) => ({
      ...previous,
      [result]: previous[result] + 1,
    }))
  }

  const next = () => {
    if (isLast) {
      setFinished(true)
      return
    }
    setIndex(index + 1)
    setAnswer(null)
  }

  const restart = () => {
    setIndex(0)
    setAnswer(null)
    setCounts(emptyCounts())
    setFinished(false)
    setSession(session + 1)
  }

  if (finished) {
    return (
      <Summary
        counts={counts}
        total={questions.length}
        onRestart={restart}
        onExit={onExit}
      />
    )
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-2">
        <p className="text-sm font-medium" role="status">
          Questão {index + 1} de {questions.length}
        </p>
        <Button type="button" variant="outline" size="sm" onClick={onExit}>
          Sair do treino
        </Button>
      </div>
      <ExerciseRunner
        key={`${session}-${index}`}
        exercise={questions[index]}
        timed
        oneShot
        onResult={handleResult}
      />
      {answer && (
        <Button type="button" onClick={next}>
          {isLast ? "Ver resumo" : "Próxima"}
        </Button>
      )}
    </div>
  )
}
