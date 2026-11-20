import { useId, useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import type { LessonContent, LessonExercise } from "@/content"
import { isAcceptedAnswer } from "@/lib/answers"
import { useCountdown } from "@/lib/useCountdown"

const DEFAULT_TYPED_LIMIT_SEC = 20
const DEFAULT_QUIZ_LIMIT_SEC = 15

export type ExerciseResult = "correct" | "incorrect" | "timeout"

function TimerLabel({ seconds }: { seconds: number }) {
  return (
    <span
      role="timer"
      className={`text-sm font-medium ${seconds <= 5 ? "text-red-600" : "text-muted-foreground"}`}
    >
      Tempo: {seconds}s
    </span>
  )
}

function RevealItem({ exercise }: { exercise: LessonExercise }) {
  const [open, setOpen] = useState(false)

  return (
    <Card>
      <CardContent className="flex flex-col gap-2 pt-6">
        <p className="text-sm font-medium">{exercise.prompt}</p>
        {open ? (
          <>
            <p className="text-sm text-green-700">{exercise.answer}</p>
            <p className="text-sm text-muted-foreground">
              {exercise.explanation}
            </p>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => setOpen(false)}
            >
              Ocultar resposta
            </Button>
          </>
        ) : (
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => setOpen(true)}
          >
            Ver resposta
          </Button>
        )}
      </CardContent>
    </Card>
  )
}

function TypedExerciseItem({
  exercise,
  timed = false,
  oneShot = false,
  onResult,
}: {
  exercise: LessonExercise
  timed?: boolean
  oneShot?: boolean
  onResult?: (result: ExerciseResult) => void
}) {
  const [value, setValue] = useState("")
  const [result, setResult] = useState<"correct" | "incorrect" | null>(null)
  const [timedOut, setTimedOut] = useState(false)
  const accepted = exercise.acceptedAnswers ?? []
  const limitSec = exercise.timeLimitSec ?? DEFAULT_TYPED_LIMIT_SEC

  const secondsLeft = useCountdown({
    running: timed && result === null && !timedOut,
    limitSec,
    onExpire: () => {
      setTimedOut(true)
      onResult?.("timeout")
    },
    resetKey: timed ? "on" : "off",
  })
  const locked =
    timedOut || result === "correct" || (oneShot && result !== null)

  const check = () => {
    const outcome = isAcceptedAnswer(value, accepted) ? "correct" : "incorrect"
    setResult(outcome)
    onResult?.(outcome)
  }

  return (
    <Card>
      <CardContent className="flex flex-col gap-2 pt-6">
        <div className="flex items-center justify-between gap-2">
          <p className="text-sm font-medium">{exercise.prompt}</p>
          {timed && !locked && <TimerLabel seconds={secondsLeft} />}
        </div>
        <div className="flex flex-col gap-2 sm:flex-row">
          <Input
            value={value}
            onChange={(event) => {
              setValue(event.target.value)
              setResult(null)
            }}
            onKeyDown={(event) => {
              if (event.key === "Enter") check()
            }}
            placeholder="Digite sua resposta"
            aria-label="Sua resposta"
            disabled={locked}
          />
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={check}
            disabled={value.trim().length === 0 || locked}
          >
            Verificar
          </Button>
        </div>
        {result === "correct" && (
          <>
            <p className="text-sm font-medium text-green-700">
              Correto! {exercise.answer}
            </p>
            <p className="text-sm text-muted-foreground">
              {exercise.explanation}
            </p>
          </>
        )}
        {result === "incorrect" && !timedOut && (
          <>
            <p className="text-sm font-medium text-red-600">
              {oneShot
                ? `Não foi dessa vez. Resposta: ${exercise.answer}`
                : "Não foi dessa vez — tente de novo."}
            </p>
            <p className="text-sm text-muted-foreground">
              {exercise.explanation}
            </p>
          </>
        )}
        {timedOut && (
          <>
            <p className="text-sm font-medium text-red-600">
              Tempo esgotado! {exercise.answer}
            </p>
            <p className="text-sm text-muted-foreground">
              {exercise.explanation}
            </p>
          </>
        )}
      </CardContent>
    </Card>
  )
}

function QuizItem({
  exercise,
  timed = false,
  oneShot = false,
  onResult,
}: {
  exercise: LessonExercise
  timed?: boolean
  oneShot?: boolean
  onResult?: (result: ExerciseResult) => void
}) {
  const options = exercise.options ?? []
  const [selected, setSelected] = useState<number | null>(null)
  const [timedOut, setTimedOut] = useState(false)
  const baseId = useId()
  const correct = selected !== null && selected === exercise.correctIndex
  const limitSec = exercise.timeLimitSec ?? DEFAULT_QUIZ_LIMIT_SEC

  const secondsLeft = useCountdown({
    running: timed && selected === null && !timedOut,
    limitSec,
    onExpire: () => {
      setTimedOut(true)
      onResult?.("timeout")
    },
    resetKey: timed ? "on" : "off",
  })
  const locked = selected !== null || timedOut

  const select = (value: string) => {
    const index = Number(value)
    setSelected(index)
    onResult?.(index === exercise.correctIndex ? "correct" : "incorrect")
  }

  return (
    <Card>
      <CardContent className="flex flex-col gap-2 pt-6">
        <div className="flex items-center justify-between gap-2">
          <p className="text-sm font-medium">{exercise.prompt}</p>
          {timed && !locked && <TimerLabel seconds={secondsLeft} />}
        </div>
        <RadioGroup
          value={selected === null ? "" : String(selected)}
          onValueChange={select}
          className="flex flex-col gap-2"
          disabled={locked}
        >
          {options.map((option, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 rounded-md border p-3"
            >
              <RadioGroupItem value={String(index)} id={`${baseId}-${index}`} />
              <label htmlFor={`${baseId}-${index}`} className="flex-1 text-sm">
                {option}
              </label>
            </div>
          ))}
        </RadioGroup>
        {selected !== null && (
          <>
            <p
              className={`text-sm font-medium ${correct ? "text-green-700" : "text-red-600"}`}
            >
              {correct
                ? "Correto!"
                : oneShot
                  ? "Não foi dessa vez."
                  : "Não foi dessa vez — tente outra opção."}
            </p>
            <p className="text-sm text-muted-foreground">
              {exercise.explanation}
            </p>
          </>
        )}
        {timedOut && (
          <>
            <p className="text-sm font-medium text-red-600">
              Tempo esgotado!
            </p>
            <p className="text-sm text-muted-foreground">
              {exercise.explanation}
            </p>
          </>
        )}
      </CardContent>
    </Card>
  )
}

export function ExerciseRunner({
  exercise,
  timed,
  oneShot,
  onResult,
}: {
  exercise: LessonExercise
  timed?: boolean
  oneShot?: boolean
  onResult?: (result: ExerciseResult) => void
}) {
  if (
    exercise.options &&
    exercise.options.length > 0 &&
    exercise.correctIndex != null
  ) {
    return (
      <QuizItem
        exercise={exercise}
        timed={timed}
        oneShot={oneShot}
        onResult={onResult}
      />
    )
  }
  if (exercise.acceptedAnswers && exercise.acceptedAnswers.length > 0) {
    return (
      <TypedExerciseItem
        exercise={exercise}
        timed={timed}
        oneShot={oneShot}
        onResult={onResult}
      />
    )
  }
  return <RevealItem exercise={exercise} />
}

export function LessonContentView({ content }: { content: LessonContent }) {
  return (
    <div className="flex flex-col gap-8">
      <p className="text-muted-foreground">{content.intro}</p>
      {content.sections.map((section) => (
        <section key={section.id} className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold">{section.title}</h2>
          {section.body.map((paragraph, index) => (
            <p key={index} className="text-sm leading-relaxed">
              {paragraph}
            </p>
          ))}
          {section.examples && (
            <ul className="flex flex-col gap-2">
              {section.examples.map((example, index) => (
                <li
                  key={index}
                  className="rounded-md border p-3 text-sm"
                >
                  <p className="font-medium">{example.en}</p>
                  <p className="text-muted-foreground">{example.pt}</p>
                  {example.note && (
                    <p className="mt-1 text-xs text-muted-foreground">
                      {example.note}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          )}
          {section.exercises && (
            <div className="flex flex-col gap-2">
              {section.exercises.map((exercise, index) => (
                <ExerciseRunner key={index} exercise={exercise} />
              ))}
            </div>
          )}
        </section>
      ))}
    </div>
  )
}
