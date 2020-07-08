"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ShoppingBasketBookSchema extends Schema {
  up() {
    this.create("shopping_basket_books", (table) => {
      table.increments();
      table.integer("book_id").unsigned();
      table.foreign("book_id").references("id").on("books");
      table.integer("customer_id").unsigned();
      table.foreign("customer_id").references("id").on("customers");
      table.string("customerEmail").nullable();
      table.string("selling").nullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("shopping_basket_books");
  }
}

module.exports = ShoppingBasketBookSchema;
