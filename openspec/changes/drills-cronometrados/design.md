# Design

## Context

`LessonContent.tsx` renderiza três formatos via `ExerciseItem`: `RevealItem`, `TypedExerciseItem` (Input + Verificar + `isAcceptedAnswer` de `lib/answers.ts`) e `QuizItem` (RadioGroup + feedback imediato). Não há persistência em lugar nenhum e o modo sem tempo não pode mudar. Ver specs em `specs/timed-drills/spec.md`.

## Goals / Non-Goals

**Goals:**
- Reaproveitar os fluxos de acerto/erro existentes para o timeout (mesma UI, mesmo aprendizado).
- Conteúdo atual funciona sem edição (limites padrão por tipo; override opcional).

**Non-Goals:**
- Placar persistente, streaks entre sessões, ranking.
- Áudio, microfone, reconhecimento de fala.

## Decisions

- **Hook `useCountdown` com `setInterval` + cálculo por timestamp (`Date.now`).** Motivo: precisa do efeito colateral de timeout (CSS sozinho não dispara nada); timestamp evita drift quando a aba sofre throttle. Alternativa: decrementar contador puro — deriva sob throttle e timeout chega atrasado.
- **Timeout reutiliza o caminho de erro atual (locked + resposta/explicação).** Motivo: zero UI nova para os estados de erro; pedagogia consistente (tempo estourado = ainda não automático). Alternativa: tela própria de timeout — mais código para o mesmo aprendizado.
- **`timeLimitSec?` opcional em `LessonExercise`, com padrões por tipo (digitado 20s, quiz 15s).** Motivo: conteúdo existente roda sem edição; autoria futura ajusta frases longas. Alternativa: constante global única — frases longas viram timeout injusto.
- **Toggle de modo em estado local da página da aula, padrão desligado.** Motivo: sem persistência por escopo (proposal); recarregar volta ao modo calmo, que é o seguro. Alternativa: localStorage — escopo extra sem ganho pedagógico nesta etapa.
- **Revela-resposta fora do modo (sem timer).** Motivo: não há resposta a produzir sob pressão; cronometrar leitura seria ruído. Alternativa: esconder esses exercícios no modo rápido — esconderia conteúdo útil de revisão.

## Risks / Trade-offs

- [Risco] Throttle de `setInterval` em aba inativa → Mitigação: restante calculado por timestamp, e o timer pausa/limpa no unmount.
- [Risco] Ansiedade do timer atrapalhar iniciantes → Mitigação: modo opt-in, desligado por padrão; timeout mostra explicação como qualquer erro.
- [Trade-off] Sem placar persistente o progresso entre sessões não aparece → aceito: o objetivo aqui é o treino em si, não gamificação.

## Migration Plan

Aditivo. Rollback: remover o toggle (todo o resto continua funcionando sem tempo).

## Open Questions

- (nenhuma — durações padrão são premissas ajustáveis no apply)
