"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class BookAuthorSchema extends Schema {
  up() {
    this.create("book_authors", (table) => {
      table.increments();
      table.integer("author_id").unsigned();
      table.foreign("author_id").references("id").on("authors");
      table.integer("book_id").unsigned();
      table.foreign("book_id").references("id").on("books");
      table.timestamps();
    });
  }

  down() {
    this.drop("book_authors");
  }
}

module.exports = BookAuthorSchema;
