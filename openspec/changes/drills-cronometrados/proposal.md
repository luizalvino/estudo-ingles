# Proposal

## Why

O usuário entende as regras estudando, mas erra ao falar. Entender é conhecimento declarativo; falar exige recuperação rápida e automática (procedural). Os exercícios atuais treinam sem pressão de tempo (digitado livre, quiz sem limite, revela-resposta), então nada exercita a velocidade de recuperação — justamente o músculo que transfere para a fala. Um modo cronometrado fecha esse gap sem microfone, sem backend e sem hardware.

## What Changes

- Novo modo "Treino rápido" por aula: os exercícios digitados e de quiz passam a ter contagem regressiva por questão; estourar o tempo conta como erro e mostra a resposta/explicação (mesmo fluxo do erro atual).
- Sem cronometrado por padrão: o modo atual sem tempo continua intacto; o usuário ativa o modo rápido por aula (toggle).
- Limite padrão por tipo (digitado ~20s, quiz ~15s), com possibilidade de limite por exercício (`timeLimitSec?` opcional no modelo, sem quebrar o formato atual).
- Premissas: sem persistência (placar só na sessão — Non-Goal); sem áudio/microfone (fora deste change); revela-resposta não entra no modo rápido (não há o que cronometrar).

## Capabilities

### New Capabilities
- `timed-drills`: modo de treino cronometrado — contagem por questão nos exercícios digitados e quiz, timeout tratado como erro, toggle por aula, padrão desligado.

### Modified Capabilities
- (nenhuma — auto-check, quiz e revela-resposta seguem iguais no modo sem tempo; o renderer ganha o modo sem mudar o comportamento atual)

## Impact

- `LessonContent.tsx` (`TypedExerciseItem`, `QuizItem` + toggle do modo); campo opcional `timeLimitSec?` em `LessonExercise`; nenhum componente novo esperado (reuso de `input`/`radio-group` + texto do timer).
- Sem backend, sem permissões, sem persistência; funciona offline como hoje.
