# Tasks

## 1. Base reaproveitada

- [x] 1.1 Hook `useCountdown` com deadline fixado no primeiro `running`, disparo único e limpeza no unmount (já implementado e verificado)
- [x] 1.2 `timeLimitSec?` opcional em `LessonExercise` com padrões por tipo (digitado 20s, quiz 15s) (já implementado e verificado)

## 2. Sessão de drill

- [x] 2.1 Fazer `TypedExerciseItem` e `QuizItem` reportarem o resultado ao drill via callback (`onResult`) mantendo o visual atual, e verificar que acerto, erro e timeout continuam funcionando isoladamente
- [x] 2.2 Criar `DrillSession`: fila só de exercícios cronometráveis na ordem do conteúdo, uma questão por vez, progresso "Questão X de N", botão "Próxima" após o feedback, resumo (acertos/erros/timeouts) e "Refazer"; verificar fluxo completo com uma aula de 13 questões
- [x] 2.3 Trocar o controle do topo por "Iniciar treino rápido" (visível só quando houver cronometrável) e renderizar o drill no lugar da aula, e verificar que aulas teóricas não mostram o controle e que o modo normal segue idêntico
- [x] 2.4 Remover `useInView`/`IntersectionObserver` e o modo cronometrado dentro da página, e verificar que nenhum arquivo morto sobrou e que não há timer na visão normal

## 3. Integração e entrega

- [x] 3.1 Rodar `make build` + revisão no navegador (claro/escuro, 375px/1280px) e verificar drill completo, timeout, resumo, refazer, sair do drill e zero erros de console
