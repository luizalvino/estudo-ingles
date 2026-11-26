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
  {
    id: "present-perfect-continuous",
    title: "Present Perfect Continuous",
    description: "Ações em duração até o presente: forma, since/for e simple vs continuous",
  },
  {
    id: "present-perfect-continuous-pratica",
    title: "Present Perfect Continuous na prática",
    description: "Treino pesado com correção imediata: aquecimento, quiz e diálogos",
  },
  {
    id: "past-time",
    title: "Past Time",
    description: "Past simple, continuous e perfect: narrar o que aconteceu antes de agora",
  },
  {
    id: "past-time-pratica",
    title: "Past Time na prática",
    description: "Treino pesado com correção imediata: aquecimento, quiz e completions",
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
