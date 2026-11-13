# Proposal

## Why

A aula 1 ensina a teoria do second conditional com 12 exercícios simples de revelar-resposta. Falta treino intenso e variado — e o livro (Unit 11) tem 36 itens prontos (reescritas, múltipla escolha, lacunas) ainda inexplorados. Uma aula 2 prática fixa o conteúdo com correção imediata, sem exigir zoom ou esforço além de responder.

## What Changes

- Nova aula "Second Conditional na prática": 3 blocos progressivos (aquecimento com auto-check → quiz de múltipla escolha → reescritas longas com gabarito), com conteúdo extraído da Unit 11 (exercícios G, H, J + gabarito do livro).
- Correção automática nos formatos curtos: `Input` com verificação tolerante a formato (caixa, espaços, ponto final, apóstrofos) e rigorosa com conteúdo, via lista de respostas aceitas por exercício; quiz com resposta imediata ao clicar.
- Reescritas longas mantêm o revela-resposta atual (checagem exata em frases de 8 palavras puniria acertos parciais).
- Premissas: texto dos CFCs (exercício I) fica para uma futura aula 3 de leitura; gabarito da aula usa a answer key do livro.

## Capabilities

### New Capabilities
- `second-conditional-practice`: aula prática de second conditional — blocos de aquecimento, quiz e reescritas com correção automática ou gabarito, registrada no catálogo.
- `auto-check-exercises`: exercícios com correção automática — verificação de resposta digitada contra lista de aceitas (normalizada) e quiz de múltipla escolha com feedback imediato, reutilizável por futuras aulas.

### Modified Capabilities
- (nenhuma — aula 1 e plataforma seguem iguais; o renderer atual continua suportando o formato antigo)

## Impact

- Novos componentes shadcn via `shadcn add` (`input`, `radio-group`, `progress`); modelo `LessonExercise` estendido (compatível com o formato atual); novo módulo de conteúdo + entrada no registro de aulas.
- Conteúdo: extração dos exercícios G/H/J da Unit 11 do PDF com OCR + conferência contra a answer key.
