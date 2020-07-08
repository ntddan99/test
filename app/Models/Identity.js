"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Identity extends Model {
  static get table() {
    return "identities";
  }

  static get hidden() {
    return ["created_at", "updated_at"];
  }
}

module.exports = Identity;
