"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class WarehouseBookSchema extends Schema {
  up() {
    this.create("warehouse_books", (table) => {
      table.increments();
      table.integer("book_id").unsigned();
      table.foreign("book_id").references("id").on("books");
      table.integer("total").nullable();
      table.integer("sold").nullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("warehouse_books");
  }
}

module.exports = WarehouseBookSchema;
