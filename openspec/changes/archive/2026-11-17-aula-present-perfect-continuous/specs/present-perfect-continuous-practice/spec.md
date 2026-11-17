# Spec Delta

## Purpose

Aula prática de present perfect continuous com treino progressivo e correção imediata, usando os exercícios da Unit 1 do livro Destination C1–C2.

## ADDED Requirements

### Requirement: Practice lesson is registered and ordered in blocks
The system SHALL register the practice lesson in the catalog and render it in three ordered blocks: warm-up, quiz, then long completions.

#### Scenario: Student opens the practice lesson
- **WHEN** the student opens the practice lesson from the catalog
- **THEN** the system shows the intro followed by the warm-up block, the quiz block, and the long-completion block in that order

### Requirement: Warm-up block uses short auto-checked exercises
The system SHALL present short gap-completion exercises (form have/has been + -ing, since/for choice) with typed-answer checking in the warm-up block.

#### Scenario: Student answers a warm-up exercise
- **WHEN** the student types an answer and submits it
- **THEN** the system immediately reports correct or incorrect with the explanation in Portuguese

### Requirement: Quiz block uses multiple choice with immediate feedback
The system SHALL present multiple-choice items (simple vs continuous, past continuous vs present perfect continuous, stative verbs) with immediate feedback per question.

#### Scenario: Student answers a quiz question
- **WHEN** the student selects an option
- **THEN** the system immediately marks it correct or incorrect and shows the explanation in Portuguese

### Requirement: Long-completion block keeps reveal-answer format
The system SHALL present the long completions (book exercise E style: past continuous vs present perfect continuous in mini-dialogues) with the existing reveal-answer interaction, without typed checking.

#### Scenario: Student practices a long completion
- **WHEN** the student reads a long exercise and requests the answer
- **THEN** the system reveals the book's answer with a brief explanation in Portuguese
