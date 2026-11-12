# reading-comfort Specification

## Purpose

Texto-base do site em tamanho confortável para leitura de estudo, sem exigir zoom do usuário.

## Requirements

### Requirement: Root font size is 20px
The system SHALL set the root (`html`) font size to 20px so all `rem`-based text renders at 125% of the browser default.

#### Scenario: Student opens any page
- **WHEN** the student opens the catalog or a lesson
- **THEN** the computed root font size is 20px and body text renders larger than before without any browser zoom

### Requirement: All text scales proportionally
The system SHALL keep every text size relative (`rem`-based Tailwind classes), with no fixed pixel font sizes that would stay small after the root change.

#### Scenario: Student reads headings and body
- **WHEN** the student reads titles, body text, examples, and exercises
- **THEN** headings, body, and UI labels are all proportionally larger than before the change

### Requirement: Layout holds at common widths
The system SHALL show no horizontal overflow or overlapping content at 375px and 1280px viewport widths with the larger base size.

#### Scenario: Student resizes the viewport
- **WHEN** the student views any page at 375px or 1280px width
- **THEN** there is no horizontal scrollbar and no text overlaps other content
