import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { lessons } from "@/lessons"
import { routeHref } from "@/lib/router"

export function Catalog() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-2xl font-bold">Aulas</h1>
        <p className="text-sm text-muted-foreground">
          Escolha uma aula para começar a estudar
        </p>
      </div>
      {lessons.map((lesson) => (
        <Card key={lesson.id}>
          <CardHeader>
            <CardTitle>{lesson.title}</CardTitle>
            <CardDescription>{lesson.description}</CardDescription>
          </CardHeader>
          <div className="px-6 pb-6">
            <Button asChild>
              <a href={routeHref({ name: "lesson", id: lesson.id })}>
                Estudar agora
              </a>
            </Button>
          </div>
        </Card>
      ))}
    </div>
  )
}
