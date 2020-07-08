"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class IdentitiesSchema extends Schema {
  up() {
    this.create("identities", (table) => {
      table.increments();
      table.integer("author_id").unsigned();
      table.foreign("author_id").references("id").on("authors");
      table.integer("number").nullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("identities");
  }
}

module.exports = IdentitiesSchema;
