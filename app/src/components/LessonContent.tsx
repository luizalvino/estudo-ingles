import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import type { LessonContent, LessonExercise } from "@/content"

function ExerciseItem({ exercise }: { exercise: LessonExercise }) {
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
