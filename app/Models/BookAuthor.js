"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class BookAuthor extends Model {
  author() {
    return this.belongsTo("App/Models/Author").belongsTo("App/Models/Book");
  }
}

module.exports = BookAuthor;
