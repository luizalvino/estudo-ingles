# past-time-practice Specification

## Purpose

Aula prática de past time com treino progressivo e correção imediata, usando os exercícios da Unit 3 do livro Destination C1–C2.

## Requirements

### Requirement: Practice lesson is registered and ordered in blocks
The system SHALL register the practice lesson in the catalog and render it in three ordered blocks: warm-up, quiz, then long completions.

#### Scenario: Student opens the practice lesson
- **WHEN** the student opens the practice lesson from the catalog
- **THEN** the system shows the intro followed by the warm-up block, the quiz block, and the long-completion block in that order

### Requirement: Warm-up block uses short auto-checked exercises
The system SHALL present short gap-completion exercises (past simple, past continuous, past perfect, used to/would) with typed-answer checking in the warm-up block.

#### Scenario: Student answers a warm-up exercise
- **WHEN** the student types an answer and submits it
- **THEN** the system immediately reports correct or incorrect with the explanation in Portuguese

### Requirement: Quiz block uses multiple choice with immediate feedback
The system SHALL present multiple-choice items covering past simple vs present perfect, past continuous vs past simple, and past perfect, with immediate feedback per question.

#### Scenario: Student answers a quiz question
- **WHEN** the student selects an option
- **THEN** the system immediately marks it correct or incorrect and shows the explanation in Portuguese

### Requirement: Long-completion block keeps reveal-answer format
The system SHALL present the long completions and rewrites (book exercises F and H style) with the existing reveal-answer interaction, without typed checking.

#### Scenario: Student practices a long completion
- **WHEN** the student reads a long exercise and requests the answer
- **THEN** the system reveals the book's answer with a brief explanation in Portuguese

### Requirement: Practice lesson feeds the timed drill
The system SHALL provide enough timeable exercises in the practice lesson for the timed drill to offer a complete session.

#### Scenario: Student starts the drill
- **WHEN** the student activates drill mode on the practice lesson
- **THEN** the system shows the first of the timeable questions with a full countdown
