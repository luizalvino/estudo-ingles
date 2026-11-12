import { Button } from "@/components/ui/button"
import { LessonContentView } from "@/components/LessonContent"
import { lessonContents } from "@/content"
import { getLesson, getNeighborLessons } from "@/lessons"
import { routeHref } from "@/lib/router"

export function Lesson({ id }: { id: string }) {
  const lesson = getLesson(id)

  if (!lesson) {
    return (
      <div className="flex flex-col items-start gap-4">
        <h1 className="text-2xl font-bold">Aula não encontrada</h1>
        <Button asChild variant="outline">
          <a href={routeHref({ name: "catalog" })}>Voltar ao catálogo</a>
        </Button>
      </div>
    )
  }

  const { prev, next } = getNeighborLessons(id)
  const content = lessonContents[id]

  return (
    <article className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold">{lesson.title}</h1>
        <p className="text-sm text-muted-foreground">{lesson.description}</p>
      </div>
      {content ? (
        <LessonContentView content={content} />
      ) : (
        <p className="text-sm text-muted-foreground">Conteúdo em breve.</p>
      )}
      <nav className="flex items-center justify-between border-t pt-4">
        <div>
          {prev ? (
            <Button asChild variant="outline">
              <a href={routeHref({ name: "lesson", id: prev.id })}>
                ← {prev.title}
              </a>
            </Button>
          ) : (
            <Button asChild variant="outline">
              <a href={routeHref({ name: "catalog" })}>← Catálogo</a>
            </Button>
          )}
        </div>
        {next && (
          <Button asChild>
            <a href={routeHref({ name: "lesson", id: next.id })}>
              {next.title} →
            </a>
          </Button>
        )}
      </nav>
    </article>
  )
}
