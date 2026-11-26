# Tasks

## 1. Aula teórica

- [x] 1.1 Montar as seções 1–4 da teoria (past simple, contraste com present perfect, past continuous, contraste com past simple) com exemplos EN+PT e exercícios revela-resposta, conferindo contra a Unit 3
- [x] 1.2 Montar as seções 5–7 (past perfect simple, past perfect continuous, hábitos com used to/would) e verificar cada exemplo/resposta contra o livro
- [x] 1.3 Adicionar a seção "Treino rápido" com 8 questões cronometráveis (4 digitadas + 4 quiz) e verificar gabaritos e variantes aceitas
- [x] 1.4 Criar `content-past-time.ts` no padrão `LessonContent` e verificar que as aulas existentes renderizam igual

## 2. Aula prática

- [x] 2.1 Montar o aquecimento digitado (6 questões de A–D) com `acceptedAnswers` e conferir cada resposta contra a answer key
- [x] 2.2 Montar o quiz (10 itens de A–D) com `options` + `correctIndex` + explicações e conferir cada gabarito
- [x] 2.3 Montar as completions longas (7 itens de F/H) em revela-resposta e conferir cada resposta contra a answer key
- [x] 2.4 Criar `content-past-time-pratica.ts` e verificar que o drill encontra 16 questões cronometráveis

## 3. Integração e entrega

- [x] 3.1 Registrar as 2 aulas em `lessons.ts` e importar os módulos em `main.tsx`, verificando catálogo e navegação
- [x] 3.2 Rodar `make build` + revisar no navegador (drill 16, teoria com 8, modo normal, 375px/dark, zero erros de console)
