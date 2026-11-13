export interface LessonExample {
  en: string
  pt: string
  note?: string
}

export interface LessonExercise {
  prompt: string
  answer: string
  explanation: string
  /**
   * Respostas aceitas para correção automática (comparadas após
   * normalização). Ausente ou vazio = exercício de revela-resposta.
   */
  acceptedAnswers?: string[]
  /** Opções do quiz de múltipla escolha. Ausente = não é quiz. */
  options?: string[]
  /** Índice da opção correta em `options`. */
  correctIndex?: number
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
