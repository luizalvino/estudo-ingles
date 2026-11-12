# Spec Delta

## Purpose

Base do sistema de aulas de inglês: catálogo, shell de página e navegação extensível para N aulas futuras.

## ADDED Requirements

### Requirement: Lesson catalog lists available lessons
The system SHALL render a catalog page listing every registered lesson with its title and a link to it.

#### Scenario: User opens the catalog
- **WHEN** the user opens the home/catalog page
- **THEN** the system shows one entry per registered lesson, including "Second Conditional"

### Requirement: Lesson page renders shell with navigation
The system SHALL render each lesson inside a shared shell showing the lesson title, its content sections, and navigation to the other lessons.

#### Scenario: User opens a lesson
- **WHEN** the user opens a lesson page
- **THEN** the system shows the lesson title, its sections in order, and links to return to the catalog and to move between lessons

### Requirement: New lessons register without shell changes
The system SHALL add a new lesson to the catalog and navigation from a lesson registry entry plus its content file, with no changes to the shell.

#### Scenario: Author adds a future lesson
- **WHEN** an author adds a registry entry and content file for a new lesson
- **THEN** the catalog and lesson navigation include the new lesson with no shell modification

### Requirement: Interface and content in Portuguese
The system SHALL present navigation, labels, and lesson content in Brazilian Portuguese.

#### Scenario: User browses the system
- **WHEN** the user navigates the catalog or a lesson
- **THEN** all labels, instructions, and explanations are shown in Brazilian Portuguese
