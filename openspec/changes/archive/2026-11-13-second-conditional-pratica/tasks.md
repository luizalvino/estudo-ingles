# Tasks

## 1. Modelo + componentes

- [x] 1.1 Estender `LessonExercise` com `acceptedAnswers?`, `options?` e `correctIndex?` e verificar que a aula 1 renderiza igual (compatibilidade)
- [x] 1.2 Adicionar `normalizeAnswer` pura e verificar com casos (caixa, espaços, ponto final, apóstrofos, `I'd`/`I would`)
- [x] 1.3 Instalar via `shadcn add` os componentes `input`, `radio-group` (e `progress` se usado) e verificar build + render de exemplo

## 2. Renderer dos novos formatos

- [x] 2.1 Criar o exercício digitado (Input + verificar + feedback + explicação) e verificar acerto/erro com a lista de aceitas
- [x] 2.2 Criar o quiz (opções clicáveis + feedback imediato + explicação) e verificar certo/errado por questão
- [x] 2.3 Manter o revela-resposta para exercícios sem `acceptedAnswers`/`options` e verificar a aula 1 intacta no navegador

## 3. Conteúdo da aula 2

- [x] 3.1 Extrair G/H/J da Unit 11 do PDF com OCR e montar o aquecimento (curtos com listas de aceitas) e verificar cada resposta contra a answer key
- [x] 3.2 Montar o quiz com os 10 itens de H (opções + índice correto + explicações) e verificar cada gabarito contra a answer key
- [x] 3.3 Montar as 16 reescritas G+J em formato revela-resposta e verificar cada resposta contra a answer key

## 4. Integração e entrega

- [x] 4.1 Registrar a aula 2 no catálogo e verificar que ela aparece, abre e navega entre blocos
- [x] 4.2 Rodar `make build` + revisão visual (claro/escuro, 375px/1280px) e verificar sem erros de console, overflow ou quebra de layout
