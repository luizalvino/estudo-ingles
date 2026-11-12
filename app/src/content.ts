export interface LessonExample {
  en: string
  pt: string
  note?: string
}

export interface LessonExercise {
  prompt: string
  answer: string
  explanation: string
}

export interface LessonSection {
  id: string
  title: string
  body: string[]
  examples?: LessonExample[]
  exercises?: LessonExercise[]
}

export interface LessonContent {
  id: string
  intro: string
  sections: LessonSection[]
}

export const lessonContents: Record<string, LessonContent> = {}
