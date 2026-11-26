# Proposal

## Why

O projeto já cobre present perfect continuous e conditionals, mas não tem aula de **passado** — justamente o tempo mais usado para narrar experiências. A Unit 3 (Past time) do livro traz past simple, past continuous, past perfect (simple e continuous) e hábitos no passado (`used to`/`would`), com exercícios prontos. Falta transformar isso em teoria + prática com drill, no mesmo molde das aulas aprovadas.

## What Changes

- Nova aula teórica "Past Time": 7 seções progressivas (past simple → contraste com present perfect → past continuous → contraste com past simple → past perfect simple → past perfect continuous → hábitos com used to/would) + seção "Treino rápido" com 8 questões cronometráveis.
- Nova aula prática "Past Time na prática": aquecimento digitado, quiz de múltipla escolha e completions/reescritas longas com gabarito, usando os exercícios A–H da Unit 3 e a answer key.
- Registro das duas aulas no catálogo e imports no `main.tsx`; o drill aparece automaticamente porque as questões cronometráveis existem.
- Sem mudança de modelo, componentes ou comportamento do drill (já coberto por `timed-drills`).

## Capabilities

### New Capabilities
- `past-time`: aula teórica de past time — past simple, contraste com present perfect, past continuous, past perfect (simple/continuous), hábitos no passado, exemplos traduzidos e exercícios com gabarito.
- `past-time-practice`: aula prática de past time — blocos de aquecimento, quiz e completions longas, com correção automática ou gabarito, registrada no catálogo.

### Modified Capabilities
- (nenhuma — `timed-drills` já define o drill; as aulas novas apenas fornecem questões cronometráveis)

## Impact

- Novos módulos `content-past-time.ts` e `content-past-time-pratica.ts`; 2 entradas em `lessons.ts` e 2 imports em `main.tsx`.
- Conteúdo extraído da Unit 3 do PDF via `pdftotext` + answer key; cada resposta conferida antes de entrar.
