"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class WarehouseSchema extends Schema {
  up() {
    this.create("warehouses", (table) => {
      table.increments();
      table.integer("warehouse_id").unsigned();
      table.foreign("warehouse_id").references("id").on("books");
      table.string("phone").nullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("warehouses");
  }
}

module.exports = WarehouseSchema;
