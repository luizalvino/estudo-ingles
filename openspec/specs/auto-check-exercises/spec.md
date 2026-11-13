# auto-check-exercises Specification

## Purpose

Exercícios com correção automática reutilizáveis por qualquer aula: resposta digitada verificada contra lista de aceitas e quiz de múltipla escolha com feedback imediato.

## Requirements

### Requirement: Typed answers checked against an accepted list
The system SHALL compare the student's typed answer against a per-exercise list of accepted answers after normalization (lowercase, trimmed and collapsed spaces, no trailing period, unified apostrophes).

#### Scenario: Student submits a correct variant
- **WHEN** the student submits an answer matching any accepted variant (e.g. "I'd" or "I would")
- **THEN** the system reports it as correct

#### Scenario: Student submits a wrong answer
- **WHEN** the student submits an answer matching no accepted variant
- **THEN** the system reports it as incorrect and shows the explanation in Portuguese

### Requirement: Quiz options give immediate feedback
The system SHALL mark a selected quiz option as correct or incorrect immediately on click and show the explanation.

#### Scenario: Student clicks a quiz option
- **WHEN** the student clicks an option
- **THEN** the system immediately highlights it as correct or incorrect and shows the explanation in Portuguese

### Requirement: Legacy reveal-answer exercises keep working
The system SHALL keep rendering exercises in the current single-answer reveal format with no behavior change.

#### Scenario: Student opens lesson 1
- **WHEN** the student practices any exercise of the first second-conditional lesson
- **THEN** the reveal-answer interaction works exactly as before
