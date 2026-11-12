# Proposal

## Why

Estudar "second conditional" hoje exige folhear um PDF de 20 MB (Destination C1–C2). O PDF agora tem camada OCR (`-ocr.pdf`, texto extraível) e a matéria foi localizada na Unit 11 Conditionals (pp. 86–88). Uma aula web interativa — do básico ao aprofundado, em português — torna o estudo mais rápido e reutilizável, e a base pronta permite acrescentar futuras aulas sem retrabalho.

## What Changes

- Base do sistema de aulas: shell de página de aula, catálogo/registro de aulas e navegação entre aulas (preparado para N aulas futuras).
- Primeira aula: "Second Conditional" — explicação progressiva (forma → usos → casos avançados), exemplos e exercícios com correção, com Tailwind e shadcn/ui.
- Conteúdo extraído diretamente do texto OCR da Unit 11 (pp. 86–88) do PDF da pasta (Destination C1–C2): forma, `might/could`, `was/were`, mixed conditionals, inversão formal, estruturas alternativas e exercícios A/B/C.

## Capabilities

### New Capabilities
- `lesson-platform`: base do sistema de aulas — listagem/catálogo, shell de página de aula, navegação entre aulas e estrutura de conteúdo extensível para futuras aulas.
- `second-conditional`: conteúdo da aula de second conditional — explicação do básico ao avançado (forma, usos, variações como `were`, `could/might`), exemplos e exercícios com respostas.

### Modified Capabilities
- (nenhuma — projeto ainda sem specs)

## Impact

- Greenfield neste repositório: novos arquivos da aplicação web (sem código existente afetado).
- Dependências novas: Tailwind CSS e shadcn/ui (a decidir stack exata no design).
- Fonte de conteúdo: PDF com OCR na pasta (`-ocr.pdf`, texto extraível via `pdftotext`); fonte localizada na Unit 11 Conditionals (pp. 86–88); sem transcrição manual.
