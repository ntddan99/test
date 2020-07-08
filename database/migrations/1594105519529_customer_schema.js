"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class CustomerSchema extends Schema {
  up() {
    this.create("customers", (table) => {
      table.increments();
      table.string("email").nullable();
      table.string("name").nullable();
      table.string("phone").nullable();
      table.string("Address").nullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("customers");
  }
}

module.exports = CustomerSchema;
