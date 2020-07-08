// <timestamp>_book_schema.js

"use strict";

const Schema = use("Schema");

class BookSchema extends Schema {
  up() {
    this.create("books", (table) => {
      table.increments();
      table.string("title").nullable();
      table.string("isbn").nullable();
      table.string("publisher_name").nullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("books");
  }
}

module.exports = BookSchema;
