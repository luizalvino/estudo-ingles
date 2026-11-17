# Proposal

## Why

Estudar "Present Perfect Continuous" hoje exige folhear o PDF de 43 MB (Destination C1–C2) na Unit 1 (Present time). O mesmo formato que funcionou para o second conditional — aula teórica progressiva em português + aula prática com correção imediata — resolve aqui também: um tempo verbal de altíssima frequência (duração até o presente, since/for, contraste com o present perfect simple, stative verbs) com exercícios do livro ainda inexplorados na plataforma.

## What Changes

- Nova aula teórica "Present Perfect Continuous": explicação progressiva em português (forma have/has been + -ing → duração até o presente → since/for/just/all day → contraste com o present perfect simple → stative verbs), com exemplos EN+PT e exercícios revela-resposta, extraída da Unit 1 (Present time) do PDF com OCR.
- Nova aula prática "Present Perfect Continuous na prática": 3 blocos progressivos (aquecimento com auto-check → quiz de múltipla escolha → completions/reescritas longas com gabarito), com conteúdo dos exercícios da Unit 1 (incluindo o exercício E: past continuous vs present perfect continuous) + gabarito da answer key.
- Reuso total da base pronta: modelo `LessonExercise` (revela-resposta, `acceptedAnswers`, `options`/`correctIndex`), `normalizeAnswer`, componentes shadcn `input`/`radio-group`, shell/catálogo/navegação sem mudanças.
- Premissas: texto via `pdftotext` da camada OCR + conferência de cada resposta contra a answer key; interface e explicações em PT-BR.

## Capabilities

### New Capabilities
- `present-perfect-continuous`: aula teórica de present perfect continuous — forma, duração, since/for, contraste simple vs continuous, stative verbs, exemplos traduzidos e exercícios com gabarito, registrada no catálogo.
- `present-perfect-continuous-practice`: aula prática de present perfect continuous — blocos de aquecimento, quiz e completions longas com correção automática ou gabarito, registrada no catálogo.

### Modified Capabilities
- (nenhuma — lesson-platform, auto-check-exercises e revela-resposta seguem iguais; o renderer atual já suporta os dois formatos)

## Impact

- Novos módulos de conteúdo (`content-present-perfect-continuous.ts`, `content-present-perfect-continuous-pratica.ts`) + 2 entradas no registro `lessons.ts`; nenhum componente novo esperado (reuso de `input`/`radio-group`).
- Fonte de conteúdo: Unit 1 (Present time) do PDF `-ocr.pdf` via `pdftotext` + answer key do livro; sem transcrição manual sem conferência.
