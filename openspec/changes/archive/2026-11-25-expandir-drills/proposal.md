# Proposal

## Why

O treino cronometrado já existe, mas só duas aulas têm drill: `second-conditional-pratica` (15 questões) e `present-perfect-continuous-pratica` (13). As duas aulas teóricas têm 12 exercícios cada e **nenhum** cronometrável, então o botão de treino nem aparece nelas. Mais repetições curtas sob pressão é exatamente o que falta para consolidar a recuperação rápida.

## What Changes

- `second-conditional-pratica`: +10 questões cronometráveis (digitado e quiz) das Units 11, conferidas contra a answer key.
- `present-perfect-continuous-pratica`: +8 questões cronometráveis da Unit 1, conferidas contra a answer key.
- `second-conditional` (teoria): 6–8 questões curtas cronometráveis (forma, completar, escolher), mantendo as reescritas longas em revela-resposta; o drill passa a aparecer na aula.
- `present-perfect-continuous` (teoria): 6–8 questões curtas cronometráveis, mesmo critério.
- Sem mudança de modelo, componentes ou comportamento: a capability `timed-drills` já cobre o drill; a expansão é de conteúdo.
- Premissas: questões novas vêm dos exercícios ainda não usados do livro; cada resposta é conferida contra a answer key; sem duplicar prompts existentes.

## Capabilities

### New Capabilities
- (nenhuma — expansão de conteúdo dentro do comportamento já especificado em `timed-drills`; o change declara `skip_specs: true`)

### Modified Capabilities
- (nenhuma — nenhum requirement muda; só aumenta o conteúdo das aulas)

## Impact

- 4 módulos de conteúdo em `app/src/` (`content-second-conditional*.ts`, `content-present-perfect-continuous*.ts`).
- Nenhum código de componente, hook ou modelo alterado.
- Fonte: PDF `-ocr.pdf` via `pdftotext` + answer key do livro.
