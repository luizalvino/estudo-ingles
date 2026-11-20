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
  /**
   * Limite em segundos para o modo rápido (cronometrado). Ausente =
   * usa o padrão do tipo (digitado 20s, quiz 15s).
   */
  timeLimitSec?: number
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

/**
 * Exercício que pode entrar no treino cronometrado: digitado (com lista
 * de aceitas) ou quiz (com opções e índice correto).
 */
export function isTimeableExercise(exercise: LessonExercise): boolean {
  const isQuiz =
    (exercise.options?.length ?? 0) > 0 && exercise.correctIndex != null
  const isTyped = (exercise.acceptedAnswers?.length ?? 0) > 0
  return isQuiz || isTyped
}

/** Todos os exercícios cronometráveis da aula, na ordem do conteúdo. */
export function getTimeableExercises(content: LessonContent): LessonExercise[] {
  return content.sections
    .flatMap((section) => section.exercises ?? [])
    .filter(isTimeableExercise)
}
