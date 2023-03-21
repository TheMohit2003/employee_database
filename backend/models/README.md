## Description

This is a Node.js module that exports a Mongoose data model called `Data`. The `Data` model is defined with a schema that specifies the structure of the documents that will be stored in MongoDB.

The schema has five fields:

- `name`: a required string
- `address`: a string
- `age`: a number
- `department`: a string
- `status`: a number that can only be 1, 2, or 3

The schema also includes timestamps that are automatically added to each document when it is created or updated.
