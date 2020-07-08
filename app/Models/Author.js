"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Author extends Model {
  static get table() {
    return "authors";
  }

  static get primaryKey() {
    return "id";
  }

  books() {
    return this.belongsToMany("App/Models/Book").pivotTable("book_authors");
  }

  identity() {
    return this.hasOne("App/Models/Identity");
  }

  static get hidden() {
    return ["created_at", "updated_at"];
  }
}

module.exports = Author;
