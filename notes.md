# Data Modeling Notes

## Requirements

A client has hired you to build an API for managing zoos and the animals kept at each zoo. The API will be used for zoos in the United States of America, no need to worry about addresses in other countries.

For the `zoos` the client wants to record:

- name.
- address.
For the `animals` the client wants to record:

- name.
- species.
- list of all the zoos where they have resided.

Determine the database tables necessary to track this information. Label any relationships between table.

## A good data model

- captures ALL the information the system needs.
- captures ONLY the information the system needs.
- reflect reality(from the point of view of the system).
- is flexible, can evolve with the system.
- guarantees `data integrity`, without sacrificing too much performance.
- is driven by the way we access data.

## Components 

- entities (nouns: zoo, animal,species), like a resources --> tables.
- properties --> columns or fields.
- relationships --> Foreign Keys (FK)


## Workflow

- identify entities (real and tansactinal).
- identify the properties
- identify relationships

## Relationships
- one to one
- one to many
- many to many: this is smoke and mirrors.

_there are many animals in one species_

_there can be more than one animal in a zoo_

_an animal could have lived in more than one zoo_


## Mantras

- every table must have a **Primary Key**
- work on **two or three** entities at a time.
- **one to many** relationships are modeled using a  **Foreign Key**
- the **Foreign Key** always goes in the **many** side.
- the **Foreign Key Column** must be the same type as the **Primary Key** it references.
- **many to many** relationships are modeled using a **third table**.
- the third table could include other columns.