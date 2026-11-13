import { useId, useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import type { LessonContent, LessonExercise } from "@/content"
import { isAcceptedAnswer } from "@/lib/answers"

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

function TypedExerciseItem({ exercise }: { exercise: LessonExercise }) {
  const [value, setValue] = useState("")
  const [result, setResult] = useState<"correct" | "incorrect" | null>(null)
  const accepted = exercise.acceptedAnswers ?? []

  const check = () =>
    setResult(isAcceptedAnswer(value, accepted) ? "correct" : "incorrect")

  return (
    <Card>
      <CardContent className="flex flex-col gap-2 pt-6">
        <p className="text-sm font-medium">{exercise.prompt}</p>
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
            disabled={result === "correct"}
          />
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={check}
            disabled={value.trim().length === 0 || result === "correct"}
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
        {result === "incorrect" && (
          <>
            <p className="text-sm font-medium text-red-600">
              Não foi dessa vez — tente de novo.
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

function QuizItem({ exercise }: { exercise: LessonExercise }) {
  const options = exercise.options ?? []
  const [selected, setSelected] = useState<number | null>(null)
  const baseId = useId()
  const correct = selected !== null && selected === exercise.correctIndex

  return (
    <Card>
      <CardContent className="flex flex-col gap-2 pt-6">
        <p className="text-sm font-medium">{exercise.prompt}</p>
        <RadioGroup
          value={selected === null ? "" : String(selected)}
          onValueChange={(value) => setSelected(Number(value))}
          className="flex flex-col gap-2"
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
              {correct ? "Correto!" : "Não foi dessa vez — tente outra opção."}
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

function ExerciseItem({ exercise }: { exercise: LessonExercise }) {
  if (
    exercise.options &&
    exercise.options.length > 0 &&
    exercise.correctIndex != null
  ) {
    return <QuizItem exercise={exercise} />
  }
  if (exercise.acceptedAnswers && exercise.acceptedAnswers.length > 0) {
    return <TypedExerciseItem exercise={exercise} />
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
                <ExerciseItem key={index} exercise={exercise} />
              ))}
            </div>
          )}
        </section>
      ))}
    </div>
  )
}
