# second-conditional-practice Specification

## Purpose

Aula prática de second conditional com treino progressivo e correção imediata, usando os exercícios da Unit 11 do livro.

## Requirements

### Requirement: Practice lesson is registered and ordered in blocks
The system SHALL register the practice lesson in the catalog and render it in three ordered blocks: warm-up, quiz, then long rewrites.

#### Scenario: Student opens the practice lesson
- **WHEN** the student opens the practice lesson from the catalog
- **THEN** the system shows the intro followed by the warm-up block, the quiz block, and the rewrite block in that order

### Requirement: Warm-up block uses short auto-checked exercises
The system SHALL present short exercises (gap completion and complete-with-structure) with typed-answer checking in the warm-up block.

#### Scenario: Student answers a warm-up exercise
- **WHEN** the student types an answer and submits it
- **THEN** the system immediately reports correct or incorrect with the explanation in Portuguese

### Requirement: Quiz block uses Unit 11 multiple choice
The system SHALL present the 10 multiple-choice items of exercise H from Unit 11, one question at a time or as a list, with immediate feedback per question.

#### Scenario: Student answers a quiz question
- **WHEN** the student selects an option
- **THEN** the system immediately marks it correct or incorrect and shows the explanation in Portuguese

### Requirement: Rewrite block keeps reveal-answer format
The system SHALL present the long rewrites (G and J from Unit 11) with the existing reveal-answer interaction, without typed checking.

#### Scenario: Student practices a long rewrite
- **WHEN** the student reads a rewrite exercise and requests the answer
- **THEN** the system reveals the book's answer with a brief explanation in Portuguese
