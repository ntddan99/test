"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Customer extends Model {
  static get table() {
    return "customers";
  }

  static get primaryKey() {
    return "id";
  }

  static get hidden() {
    return ["created_at", "updated_at"];
  }
}

module.exports = Customer;
