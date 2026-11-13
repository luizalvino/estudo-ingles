/**
 * Normaliza uma resposta para comparação: minúsculas, espaços colapsados,
 * sem ponto final de frase e com apóstrofos unificados. Tolerante com
 * formato, rigorosa com conteúdo (a lista de aceitas decide o resto).
 */
export function normalizeAnswer(value: string): string {
  return value
    .toLowerCase()
    .replace(/[’‘‛`]/g, "'")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/[.?!]+$/, "")
    .trim()
}

export function isAcceptedAnswer(
  input: string,
  acceptedAnswers: string[]
): boolean {
  const normalized = normalizeAnswer(input)
  if (normalized.length === 0) return false
  return acceptedAnswers.some(
    (accepted) => normalizeAnswer(accepted) === normalized
  )
}
