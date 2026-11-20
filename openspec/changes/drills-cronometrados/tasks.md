# Tasks

## 1. Base do modo (hook + toggle)

- [x] 1.1 Criar o hook `useCountdown` (restante por timestamp, limpeza no unmount/timeout) e verificar que ele expira uma vez e não vaza após desmontar
- [x] 1.2 Adicionar o toggle do modo rápido na página da aula (padrão desligado) e verificar que com ele desligado todas as aulas renderizam e se comportam exatamente como hoje

## 2. Integração nos formatos

- [x] 2.1 Ligar o countdown ao exercício digitado (timeout = erro com resposta/explicação, trava a questão) e verificar acerto a tempo, erro a tempo e timeout nos três caminhos
- [x] 2.2 Ligar o countdown ao quiz (timeout = erro com explicação, trava as opções) e verificar acerto a tempo e timeout travando sem seleção
- [x] 2.3 Adicionar `timeLimitSec?` opcional com padrões por tipo (digitado 20s, quiz 15s) e verificar que o conteúdo atual usa os padrões sem edição e que o revela-resposta segue sem timer

## 3. Integração e entrega

- [x] 3.1 Rodar `make build` + revisão no navegador (claro/escuro, 375px/1280px) e verificar toggle, acerto no tempo, timeout e zero erros de console
