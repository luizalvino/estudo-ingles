# Design

## Context

Greenfield neste repositório: hoje há o PDF com OCR, `.opencode/` (commands/skills) e `openspec/`. Ver specs em `specs/lesson-platform/spec.md` e `specs/second-conditional/spec.md`. Restrições observadas: Node padrão no ambiente é v14 (via nvm) — o build vai exigir Node moderno; `bun` não está instalado; o conteúdo da aula será extraído do texto OCR da Unit 11 (pp. 86–88) e conferido contra o livro.

## Goals / Non-Goals

**Goals:**
- Shell + catálogo extensível por registro, sem acoplamento com o conteúdo de cada aula.
- Aula de second conditional completa (básico → avançado + exercícios), em pt-BR.
- Stack única para todas as aulas futuras.

**Non-Goals:**
- Backend, contas, persistência de progresso em servidor.
- i18n multi-idioma (só pt-BR neste change).

## Decisions

- **Vite + React + Tailwind CSS como base.** Motivo: shadcn/ui é biblioteca de componentes React — exige React; Vite é o scaffold estático mais simples para um site de estudo sem servidor. Alternativas consideradas: Next.js (roteamento/pré-render nativos, porém servidor e complexidade desnecessários agora); HTML estático puro (incompatível com shadcn/ui).
- **shadcn/ui (estilo new-york, CSS variables) para shell e exercícios.** Motivo: pedido do usuário + componentes acessíveis prontos (Card, Accordion para seções, Button, Alert para respostas). Alternativa: Tailwind puro — menos componentes prontos, mais CSS manual.
- **Conteúdo das aulas como módulos de dados versionados + registro central (`lessons.ts`).** Motivo: cumpre o requisito "nova aula sem mexer no shell" — adicionar entrada + arquivo de conteúdo basta. Alternativa: uma página hardcoded por aula — exigiria editar navegação a cada aula.
- **Sem markdown cru para exercícios interativos: seções como dados estruturados (explicação, exemplos, exercícios com resposta).** Motivo: exercícios com revelar-resposta precisam de estrutura, não de texto livre. Alternativa: markdown + parser custom — mais trabalho para o mesmo resultado.

## Risks / Trade-offs

- [Risco] Node v14 padrão não roda Vite moderno → Mitigação: usar nvm para Node LTS no apply e documentar a versão no README.
- [Risco] Extração do OCR pode conter ruído (ex.: "Se cond conditional") → Mitigação: conferir cada forma e exemplo contra o livro no apply; marcar a aula como "baseada na Unit 11 de Destination C1–C2".
- [Trade-off] React+Vite para conteúdo majoritariamente estático adiciona build JS → aceito porque shadcn/ui exige React e o ganho de componentes compensa.

## Migration Plan

Não se aplica (greenfield). Rollback: remover a pasta da aplicação; `openspec/` e PDF permanecem intactos.

## Open Questions

- Onde hospedar (GitHub Pages, Netlify, Vercel ou só local)? Resposta adiável: o build estático do Vite serve em qualquer um sem mudar specs, design ou tasks.
