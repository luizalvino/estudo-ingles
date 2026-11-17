# present-perfect-continuous Specification

## Purpose

Aula teórica de present perfect continuous do básico ao uso real, com explicações em português, exemplos traduzidos e exercícios com correção, baseada na Unit 1 do livro.

## Requirements

### Requirement: Lesson teaches the basic form first
The system SHALL present the present perfect continuous form (have/has been + verb-ing) before any contrast or exception.

#### Scenario: Student starts the lesson
- **WHEN** the student reads the first section
- **THEN** the system shows the structure, an affirmative example with translation, and the contraction (`'ve`/`'s` been)

### Requirement: Lesson teaches duration up to the present
The system SHALL explain that the tense describes actions/situations continuing up to the present (or just before it), with at least one translated example.

#### Scenario: Student studies the duration section
- **WHEN** the student reads the duration explanation
- **THEN** the system shows the explanation in Portuguese plus an English example with its Portuguese translation

### Requirement: Lesson covers since/for time markers
The system SHALL present the markers `since`, `for`, `just` and `all day/week/etc` with the present perfect continuous, each with a translated example.

#### Scenario: Student reaches the markers section
- **WHEN** the student reads the markers section
- **THEN** the system shows each marker with an English example and its Portuguese translation

### Requirement: Lesson contrasts simple vs continuous
The system SHALL contrast present perfect simple (number of times/things) versus present perfect continuous (emphasis on duration), with paired examples.

#### Scenario: Student confuses the two perfects
- **WHEN** the student reads the comparison section
- **THEN** the system shows the paired examples and states when to use each one

### Requirement: Lesson covers stative verbs
The system SHALL explain that stative verbs (thinking, emotions, perception, possession) normally use simple tenses, plus the dual-use verbs that change meaning in continuous form.

#### Scenario: Student reaches the stative section
- **WHEN** the student reads the stative section
- **THEN** the system shows the verb groups and a paired state-vs-action example with translation

### Requirement: Lesson contrasts past continuous vs present perfect continuous
The system SHALL include the book's contrast (past continuous for finished past scenes vs present perfect continuous for periods continuing up to now), with paired examples.

#### Scenario: Student studies the past contrast
- **WHEN** the student reads the contrast section
- **THEN** the system shows when each tense applies with translated examples

### Requirement: Lesson includes exercises with answers
The system SHALL provide at least one exercise per level (form, duration/markers, contrasts) where the student can check the answer, using the book's Unit 1 formats.

#### Scenario: Student practices
- **WHEN** the student completes an exercise and requests the answer
- **THEN** the system reveals the correct answer with a brief explanation in Portuguese
