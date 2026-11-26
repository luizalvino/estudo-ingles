# Design

## Context

O padrão de aulas está estabelecido: `LessonContent` com seções, exemplos EN+PT e exercícios; `acceptedAnswers` para digitado, `options`+`correctIndex` para quiz, revela-resposta para textos longos; `getTimeableExercises` alimenta o `DrillSession`; registro em `lessons.ts` + import em `main.tsx`. Fonte: Unit 3 (Past time) do PDF com OCR e a answer key. Ver specs em `specs/past-time/spec.md` e `specs/past-time-practice/spec.md`.

## Goals / Non-Goals

**Goals:**
- Replicar o molde das aulas de present perfect continuous para o passado, sem tocar em código de componente.
- Cobrir o arco completo da Unit 3: past simple → contraste com present perfect → past continuous → contraste → past perfect → past perfect continuous → hábitos.

**Non-Goals:**
- Novos componentes, persistência, áudio ou embaralhamento.
- Vocabulary units ou revisões do livro.

## Decisions

- **Duas aulas separadas (teoria + prática), como PPC.** Motivo: mantém a navegação e o drill previsíveis; a teoria fica com 8 questões de treino rápido e a prática concentra o volume. Alternativa: aula única — misturaria leitura e treino.
- **Sete seções na teoria, com o contraste past simple vs present perfect logo no início.** Motivo: é a confusão mais comum e dialoga com a aula de PPC já existente. Alternativa: deixar o contraste para o fim — perde o gancho com o que o aluno acabou de estudar.
- **Prática em 3 blocos: aquecimento digitado (6), quiz (10), completions longas (7).** Motivo: 16 questões cronometráveis dão um drill completo; as longas ficam em revela-resposta para não punir variantes. Alternativa: checar tudo digitado — inviável em reescritas de 3–8 palavras.
- **Hábitos com used to/would + be/get used to na teoria.** Motivo: o livro trata os dois e a confusão `used to` vs `be used to` é clássica. Alternativa: só used to — deixaria o erro mais comum sem explicação.
- **Conteúdo dos exercícios A–H da Unit 3, com gabarito conferido.** Motivo: fidelidade ao livro e consistência com as aulas anteriores.

## Risks / Trade-offs

- [Risco] OCR da Unit 3 com ruído nas respostas → Mitigação: conferir cada item contra a answer key (D e F têm respostas espalhadas).
- [Risco] Ambiguidade was/were ou would/used to em itens digitados → Mitigação: listas de aceitas com variantes e explicação do porquê.
- [Trade-off] 7 seções na teoria deixam a aula longa → aceito: cada seção é curta e o drill oferece o treino concentrado.

## Migration Plan

Aditivo. Rollback: remover os dois módulos de conteúdo + 2 entradas no registro.

## Open Questions

- (nenhuma)
