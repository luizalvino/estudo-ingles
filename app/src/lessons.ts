export interface LessonMeta {
  id: string
  title: string
  description: string
}

export const lessons: LessonMeta[] = [
  {
    id: "second-conditional",
    title: "Second Conditional",
    description: "Situações hipotéticas no presente e no futuro",
  },
  {
    id: "second-conditional-pratica",
    title: "Second Conditional na prática",
    description: "Treino pesado com correção imediata: aquecimento, quiz e reescritas",
  },
]

export function getLesson(id: string): LessonMeta | undefined {
  return lessons.find((lesson) => lesson.id === id)
}

export function getNeighborLessons(id: string): {
  prev: LessonMeta | undefined
  next: LessonMeta | undefined
} {
  const index = lessons.findIndex((lesson) => lesson.id === id)
  if (index === -1) return { prev: undefined, next: undefined }
  return {
    prev: index > 0 ? lessons[index - 1] : undefined,
    next: index < lessons.length - 1 ? lessons[index + 1] : undefined,
  }
}
