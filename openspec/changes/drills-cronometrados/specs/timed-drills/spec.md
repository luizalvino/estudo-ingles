# Spec Delta

## Purpose

Modo de treino cronometrado que exercita a velocidade de recuperação das estruturas — a ponte entre entender a regra e usá-la falando — sem microfone, backend ou persistência.

## ADDED Requirements

### Requirement: Timed mode is opt-in per lesson
The system SHALL offer a per-lesson toggle for timed mode, defaulting to off, with untimed behavior unchanged when off.

#### Scenario: Student opens a lesson
- **WHEN** the student opens any lesson
- **THEN** the system shows the timed-mode toggle off and all exercises behave exactly as today

### Requirement: Typed exercises count down per question
The system SHALL show a per-question countdown on typed exercises in timed mode, using the default limit for the type unless the exercise defines its own.

#### Scenario: Student answers in time
- **WHEN** the student submits a correct answer before the countdown ends
- **THEN** the system reports it as correct exactly like the untimed flow

### Requirement: Timeout counts as a miss with explanation
The system SHALL treat an expired countdown as an incorrect attempt and immediately show the correct answer with the explanation in Portuguese.

#### Scenario: Student runs out of time
- **WHEN** the countdown reaches zero before a correct submission
- **THEN** the system locks the question, marks it as missed, and shows the answer plus explanation

### Requirement: Quiz questions count down per question
The system SHALL show a per-question countdown on quiz exercises in timed mode, treating timeout like a wrong selection.

#### Scenario: Student answers a quiz question in time
- **WHEN** the student selects the correct option before the countdown ends
- **THEN** the system marks it correct with immediate feedback as today

#### Scenario: Student runs out of time on quiz
- **WHEN** the countdown reaches zero before any selection
- **THEN** the system locks the options, marks the question as missed, and shows the explanation in Portuguese

### Requirement: Reveal-answer exercises stay untimed
The system SHALL render reveal-answer exercises without any countdown even when timed mode is on.

#### Scenario: Student reaches a long exercise in timed mode
- **WHEN** the student opens a reveal-answer exercise with timed mode on
- **THEN** the system shows it exactly as in untimed mode, with no timer
