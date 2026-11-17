# Tasks

## 1. Aula teórica

- [x] 1.1 Extrair a teoria do PPC da Unit 1 via `pdftotext` e montar as seções 1–3 (forma, duração até o presente, since/for) e verificar cada exemplo contra o texto do livro
- [x] 1.2 Montar as seções 4–6 (simple vs continuous, stative verbs, past continuous vs PPC) com 1+ exercício revela-resposta por nível e verificar cada resposta contra a answer key
- [x] 1.3 Criar o módulo `content-present-perfect-continuous.ts` no padrão `LessonContent` e verificar que as aulas existentes renderizam igual (reuso, sem mudança de modelo)

## 2. Aula prática

- [x] 2.1 Montar o aquecimento digitado (forma have/has been + -ing, since/for) com `acceptedAnswers` por exercício e verificar cada resposta contra a answer key e a normalização (caixa, espaços, ponto final, apóstrofos)
- [x] 2.2 Montar o quiz de múltipla escolha (simple vs continuous, stative, past vs PPC) com `options` + `correctIndex` + explicações e verificar cada gabarito contra a answer key
- [x] 2.3 Montar o bloco longo estilo exercício E (past continuous vs PPC em mini-diálogos) em revela-resposta e verificar cada resposta contra a answer key

## 3. Integração e entrega

- [x] 3.1 Registrar as 2 aulas no catálogo (`lessons.ts`) e verificar que elas aparecem, abrem e navegam entre blocos e entre aulas
- [x] 3.2 Rodar `make build` + revisão visual (claro/escuro, 375px/1280px) e verificar sem erros de console, overflow ou quebra de layout
