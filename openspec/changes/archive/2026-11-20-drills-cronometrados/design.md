# Design

## Context

Já implementado no change: hook `useCountdown` (restante por timestamp, deadline fixado no primeiro `running`, dispara uma vez), `timeLimitSec?` opcional em `LessonExercise` com padrões por tipo (digitado 20s, quiz 15s), e `TypedExerciseItem`/`QuizItem` com countdown, timeout = erro com explicação e trava. A primeira versão ligava os timers na página inteira (mesmo problema do `IntersectionObserver`): todas as questões contavam juntas e o scroll iniciava relógios sem intenção. Ver specs em `specs/timed-drills/spec.md`.

## Goals / Non-Goals

**Goals:**
- Trocar o modo "cartões cronometrados numa página" por uma sessão de drill dedicada, uma questão por vez.
- Reaproveitar os itens existentes (digitado/quiz) e o `useCountdown` sem reescrever o tratamento de acerto/timeout.

**Non-Goals:**
- Placar persistente, histórico entre sessões, ranking, microfone, áudio.
- Embaralhar questões (o drill segue a ordem do conteúdo nesta etapa).
- Cronometrar revela-resposta (fica fora do drill).

## Decisions

- **Drill em componente próprio (`DrillSession`) que substitui a visão da aula ao ser iniciado.** Motivo: uma questão por vez elimina o scroll, que era a raiz do relógio "começando sem intenção"; o timer pode começar na montagem sem queimar tempo de ninguém. Alternativa: manter cartões na página e ajustar gatilho — paliativo, não resolve leitura prévia nem scroll acidental.
- **Itens existentes reportam o resultado via callback (`onResult`) e o drill controla fila, progresso e placar.** Motivo: zero duplicação do fluxo de verificação/timeout; o item continua dono do seu estado visual. Alternativa: reescrever os itens dentro do drill — dois códigos divergindo.
- **Remover `useInView`/`IntersectionObserver` e o modo cronometrado dentro da página.** Motivo: com uma questão montada por vez, visibilidade é garantida por construção; manter o observer seria código morto e reintroduziria o comportamento errado. Alternativa: manter como fallback — confusão de dois gatilhos.
- **Controle "Iniciar treino rápido" só aparece quando a aula tem pelo menos um exercício cronometrável.** Motivo: aulas teóricas (só reveal) não têm o que treinar; um botão que não faz nada é ruído. Alternativa: sempre visível com aviso — pior UX.
- **Avanço manual ("Próxima") após o feedback; resumo só da sessão (acertos, erros, timeouts) com "Refazer".** Motivo: ler a explicação faz parte do aprendizado; resumo fecha o loop sem persistência. Alternativa: avanço automático — atropela a explicação; persistir placar — escopo extra fora do proposal.

## Risks / Trade-offs

- [Risco] Usuário sair no meio do drill perder tudo → Mitigação: aceito no escopo (sem persistência); sair é explícito e o resumo aparece ao concluir.
- [Risco] Refazer o drill sempre na mesma ordem facilitar por memorização posicional → Mitigação: aceito nesta etapa; embaralhar fica como evolução futura.
- [Trade-off] Uma questão por vez reduz a visão geral da aula → aceito: o drill é treino focado, não leitura; o modo normal continua completo.

## Migration Plan

Substitui a implementação anterior do modo rápido (sem migração de dados). Rollback: remover `DrillSession` e restaurar a renderização com `timed` na página.

## Open Questions

- (nenhuma — embaralhar questões fica explicitamente fora desta etapa)
