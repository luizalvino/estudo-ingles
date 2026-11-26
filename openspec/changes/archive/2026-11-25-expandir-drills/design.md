# Design

## Context

O drill já está implementado: `getTimeableExercises` filtra exercícios com `acceptedAnswers` ou `options`+`correctIndex`, `DrillSession` mostra um por vez, e o botão "Iniciar treino rápido" aparece só quando a fila não está vazia. Hoje: `second-conditional-pratica` 15 cronometráveis, `present-perfect-continuous-pratica` 13, e as duas teóricas 0. Ver specs em `specs/timed-drills/spec.md` (capability já existente).

## Goals / Non-Goals

**Goals:**
- Aumentar a densidade de recuperação: +10 e +8 questões nos drills práticos, 6–8 em cada teórica.
- Fazer as 4 aulas exibirem o drill, sem tocar em código.

**Non-Goals:**
- Novo comportamento, persistência, embaralhamento, áudio.
- Novos tópicos (Past time fica para o próximo change).

## Decisions

- **Adicionar questões curtas novas em vez de converter as reescritas longas.** Motivo: reescritas abertas exigiriam listas enormes de variantes aceitas e puniriam acertos parciais; questões curtas de forma/completar/quiz são confiáveis no auto-check. Alternativa: converter tudo — alto risco de correção injusta.
- **Nas teóricas, só 6–8 questões (subconjunto curto).** Motivo: a teoria precisa de drill suficiente para existir, sem transformar a aula em prática; o volume pesado fica nas aulas práticas. Alternativa: 12+ em cada — duplicaria a prática e alongaria a teoria.
- **Mix digitado + quiz nos drills.** Motivo: variar o tipo de recuperação (produzir vs reconhecer) mantém o treino menos mecânico. Alternativa: só digitado — mais difícil, porém mais lento de responder e mais punitivo com variantes.
- **Acrescentar ao fim das seções existentes, sem mexer no conteúdo atual.** Motivo: diff mínimo e zero risco de regressão nas respostas já conferidas. Alternativa: reorganizar por dificuldade — retrabalho sem ganho nesta etapa.
- **Fontes: exercícios ainda não usados das Units 11 e 1; conferência item a item na answer key.** Motivo: consistência com o padrão das aulas e fidelidade ao livro.

## Risks / Trade-offs

- [Risco] OCR do livro com ruído nas respostas → Mitigação: conferir cada item contra a answer key e normalizar contrações (`I'd`/`I would`).
- [Risco] Duplicar prompts já existentes → Mitigação: comparar prompts antes de adicionar e remover repetidos.
- [Trade-off] Aulas teóricas ficam um pouco mais longas → aceito: 6–8 cartões extras é custo pequeno para habilitar o drill.

## Migration Plan

Aditivo, sem migração. Rollback: remover os blocos acrescentados nos 4 arquivos de conteúdo.

## Open Questions

- (nenhuma)
