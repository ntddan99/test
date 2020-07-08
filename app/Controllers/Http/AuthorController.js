"use strict";
const Author = use("App/Models/Author");
class AuthorController {
  async index({ response }) {
    let authors = await Author.all();
    return response.json(authors);
  }

  async show({ params, response }) {
    const author = await Author.query().where(params).with("identity").fetch();
    return response.json(author);
  }

  async store({ request, response }) {
    const authorInfo = request.only([
      "authorFName",
      "authorLName",
      "authorDOB",
    ]);

    const author = new Author();
    author.authorFName = authorInfo.authorFName;
    author.authorLName = authorInfo.authorLName;
    author.authorDOB = authorInfo.authorDOB;

    await author.save();

    return response.status(201).json(author);
  }

  async update({ params, request, response }) {
    const authorInfo = request.only([
      "authorFName",
      "authorLName",
      "authorDOB",
    ]);

    const author = await Author.find(params.id);
    if (!author) {
      return response.status(404).json({ data: "Resource not found" });
    }
    author.authorFName = authorInfo.authorFName;
    author.authorLName = authorInfo.authorFName;
    author.authorDOB = authorInfo.authorFName;

    await author.save();

    return response.status(200).json(author);
  }

  async delete({ params, response }) {
    const author = await Author.find(params.id);
    if (!author) {
      return response.status(404).json({ data: "Resource not found" });
    }
    await author.delete();

    return response.status(204).json(null);
  }
}

module.exports = AuthorController;
