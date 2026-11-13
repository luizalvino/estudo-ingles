# Design

## Context

Aula 1 usa `LessonExercise { prompt, answer, explanation }` com revela-resposta (`LessonContent.tsx`). Só existem `button` e `card` em `components/ui`. O shadcn está configurado (`components.json`), então `shadcn add` funciona. Ver specs em `specs/second-conditional-practice/spec.md` e `specs/auto-check-exercises/spec.md`.

## Goals / Non-Goals

**Goals:**
- Estender o modelo sem quebrar a aula 1 (compatibilidade total com o formato atual).
- Componentes novos só via `shadcn add` (padrão do projeto).

**Non-Goals:**
- Placar global, contas, persistência de progresso entre sessões.
- Cronômetro ou limite de tentativas (feedback imediato basta).

## Decisions

- **Estender `LessonExercise` com campos opcionais, não criar tipo novo.** Motivo: `acceptedAnswers?: string[]` vazio/ausente = comportamento atual de revela-resposta; quiz = `options?: string[] + correctIndex?: number`. Alternativa: tipos separados por bloco — mais arquivos e ramificações no renderer para o mesmo resultado.
- **Normalização em função pura (`normalizeAnswer`).** Motivo: minúsculas, trim/colapso de espaços, sem ponto final, apóstrofo unificado; testável isoladamente e reutilizável. Alternativa: regex por exercício — frágil e espalhado.
- **Componentes: `input`, `radio-group` (+ `progress` para o bloco).** Motivo: são os primitivos shadcn para digitado/múltipla escolha/progresso; seguem o tema OpenClaw automaticamente. Alternativa: HTML puro — perderia acessibilidade e estilo do tema.
- **Quiz com feedback imediato por questão, sem trava de tentativa.** Motivo: objetivo é estudo, não prova; a explicação aparece de qualquer forma. Alternativa: uma tentativa + nota — adiciona estado e frustração sem ganho de aprendizado aqui.

## Risks / Trade-offs

- [Risco] OCR do gabarito (G/H/J) com ruído → Mitigação: conferir cada resposta contra a answer key no apply (task dedicada, como na aula 1).
- [Trade-off] `acceptedAnswers` manual por exercício dá trabalho de autoria → aceito porque garante correção pedagógica (ex.: aceitar `I'd` e `I would`).

## Migration Plan

Não se aplica (aditivo). Rollback: remover o módulo de conteúdo da aula 2 + entrada no registro.

## Open Questions

- (nenhuma)
