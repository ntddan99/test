"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Book extends Model {
  static get table() {
    return "books";
  }

  static get primaryKey() {
    return "id";
  }
  Author() {
    return this.belongsToMany("App/Models/Author").pivotModel(
      "App/Models/UserCar"
    );
  }
  static get hidden() {
    return ["created_at", "updated_at"];
  }
}

module.exports = Book;
