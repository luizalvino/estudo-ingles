# Design

## Context

Aula 1+2 de second conditional definiram o padrão: `LessonExercise { prompt, answer, explanation, acceptedAnswers?, options?, correctIndex? }` com revela-resposta, digitado com `normalizeAnswer` e quiz (`LessonContent.tsx`); `input` e `radio-group` já instalados via shadcn; registro em `lessons.ts` + módulos `content-*.ts`. Ver specs em `specs/present-perfect-continuous/spec.md` e `specs/present-perfect-continuous-practice/spec.md`. Fonte: Unit 1 (Present time) do PDF `-ocr.pdf` (texto extraível via `pdftotext`) + answer key da mesma Unit.

## Goals / Non-Goals

**Goals:**
- Reutilizar o renderer e os componentes sem nenhuma mudança (só conteúdo novo + 2 entradas no registro).
- Cobrir o contraste pedagógico central simple vs continuous e a lista de stative verbs sem sobrecarregar uma única seção.

**Non-Goals:**
- Novos componentes, placar, persistência de progresso, cronômetro ou limite de tentativas.
- Áudio/pronúncia ou transcrição fonética.

## Decisions

- **Duas aulas separadas (teoria + prática), não uma só.** Motivo: replica o par second-conditional/prática que o usuário aprovou; teoria mantém revela-resposta leve e a prática concentra auto-check/quiz. Alternativa: aula única longa — misturaria formatos e quebraria a navegação anterior/próxima já esperada.
- **Zero mudança de modelo/componentes.** Motivo: `acceptedAnswers` cobre aquecimento (ex.: `I've`/`I have` been), `options`/`correctIndex` cobre o quiz (simple vs continuous, stative), revela-resposta cobre o exercício E longo; ausente/vazio = comportamento atual. Alternativa: novo tipo de exercício — sem ganho observável, só ramificações.
- **Teoria em 6 seções curtas (forma → duração → since/for → simple vs continuous → stative → past continuous vs PPC).** Motivo: espelha a progressão do livro e isola a confusão mais comum (simple vs continuous) em seção própria com pares mínimos. Alternativa: fundir contrastes numa seção — texto denso, pior no mobile 375px.
- **Prática nos mesmos 3 blocos (aquecimento digitado → quiz → E longo em revela-resposta).** Motivo: reuso total do renderer e da verificação tolerante (caixa, espaços, ponto final, apóstrofos). Alternativa: checagem digitada nos diálogos longos do exercício E — puniria acertos parciais em frases de 2 lacunas.

## Risks / Trade-offs

- [Risco] OCR da Unit 1 com ruído (`I've`/`I 've`, `all day/week`) → Mitigação: conferir cada resposta contra a answer key no apply (task dedicada, como nas aulas anteriores).
- [Trade-off] Listas `acceptedAnswers` manuais por exercício (contrações `I've/I have`, `has been/has been working`) → aceito porque garante correção pedagógica.
- [Trade-off] Stative verbs têm lista longa (comunicação, pensamento, emoção, percepção, posse) → resumir em grupos na teoria com 1 par por grupo para não virar glossário.

## Migration Plan

Não se aplica (aditivo). Rollback: remover os dois módulos de conteúdo + 2 entradas no registro.

## Open Questions

- (nenhuma)
