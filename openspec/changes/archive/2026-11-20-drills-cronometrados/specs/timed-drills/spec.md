# Spec Delta

## Purpose

Modo de treino cronometrado em formato de drill sequencial que exercita a velocidade de recuperação das estruturas — a ponte entre entender a regra e usá-la falando — sem microfone, backend ou persistência.

## ADDED Requirements

### Requirement: Drill mode is opt-in and only offered when applicable
The system SHALL offer a per-lesson control to start drill mode, defaulting to off, and SHALL hide that control on lessons with no timeable exercises.

#### Scenario: Student opens a lesson with timeable exercises
- **WHEN** the student opens a lesson that has typed or quiz exercises
- **THEN** the system shows the drill control off and the lesson behaves exactly as today

#### Scenario: Student opens a theory-only lesson
- **WHEN** the student opens a lesson whose exercises are all reveal-answer
- **THEN** the system does not show the drill control

### Requirement: Drill shows one timeable question at a time
The system SHALL present drill mode as a sequence of the lesson's typed and quiz exercises, one at a time, in content order, showing progress as position and total.

#### Scenario: Student starts the drill
- **WHEN** the student activates drill mode
- **THEN** the system shows only the first timeable question with a progress indicator such as "Questão 1 de 13"

#### Scenario: Student advances
- **WHEN** the student activates next after answering the current question
- **THEN** the system shows the next question with a full countdown and updated progress

### Requirement: Countdown starts when the question is shown
The system SHALL start each question's countdown when that question is displayed, using the type default unless the exercise defines its own limit.

#### Scenario: New question appears
- **WHEN** a question is displayed in drill mode
- **THEN** its countdown starts immediately at the full limit, with no scroll or extra action needed

### Requirement: Timeout counts as a miss with explanation
The system SHALL treat an expired countdown as an incorrect attempt and immediately show the correct answer with the explanation in Portuguese.

#### Scenario: Student runs out of time on a typed question
- **WHEN** the countdown reaches zero before a correct submission
- **THEN** the system locks the question, marks it as missed, and shows the answer plus explanation

#### Scenario: Student runs out of time on a quiz question
- **WHEN** the countdown reaches zero before any selection
- **THEN** the system locks the options, marks the question as missed, and shows the explanation in Portuguese

### Requirement: Drill ends with a session summary
The system SHALL show a summary when the last question is answered, reporting correct, incorrect, and timed-out counts for the session, with an option to restart the drill.

#### Scenario: Student finishes the drill
- **WHEN** the student answers the last question and activates next
- **THEN** the system shows the session summary with counts and a restart option

#### Scenario: Student restarts the drill
- **WHEN** the student activates restart on the summary
- **THEN** the system returns to the first question with reset counts and a full countdown

### Requirement: Reveal-answer exercises stay out of the drill
The system SHALL exclude reveal-answer exercises from the drill sequence.

#### Scenario: Lesson mixes formats
- **WHEN** a lesson has both reveal-answer and timeable exercises
- **THEN** the drill includes only the timeable ones, while the normal lesson view keeps all of them
