# Proposal

## Why

No site publicado, o texto-base (`text-sm`, 14px sobre raiz de 16px) é pequeno para leitura de estudo — é preciso zoom de ~125% para ficar confortável. Aumentar o tamanho padrão melhora a legibilidade sem que o usuário precise de zoom.

## What Changes

- Definir o tamanho de fonte raiz para 20px (125% dos 16px padrão), de forma que todas as medidas em `rem` do Tailwind escalem proporcionalmente (corpo 14px → ~17,5px, títulos acompanham).
- Garantir que o layout continua sem overflow horizontal e sem quebras após o aumento (largura máxima e espaçamentos já são fluidos).
- Premissa: fator de 125% (20px). Se o usuário achar pouco/muito, o ajuste é de uma linha.

## Capabilities

### New Capabilities
- `reading-comfort`: tamanho de fonte padrão confortável para leitura — raiz em 20px com escalonamento proporcional de todo o texto e verificação de layout sem overflow.

### Modified Capabilities
- (nenhuma — nenhuma capability existente muda de comportamento; só apresentação base)

## Impact

- Só CSS base (`app/src/index.css`); nenhum componente precisa mudar (todos usam classes relativas em `rem`).
- Efeito global no site (catálogo, aula, exercícios, header) — é a intenção.
