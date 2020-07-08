"use strict";
const Identity = use("App/Models/Identity");
class IdentityController {
  async index({ response }) {
    const identity = await Identity.all();
    return response.json(identity);
  }

  async show({ params, response }) {
    const identity = await Identity.find(params.id);
    console.log(identity.author().id);
    return response.json(identity);
  }

  async store({ request, response }) {
    const indentityInfo = request.only(["author_id", "number"]);

    const identity = new Identity();
    identity.author_id = indentityInfo.author_id;
    identity.number = indentityInfo.number;

    await identity.save();

    return response.status(201).json(identity);
  }

  async update({ params, request, response }) {
    const indentityInfo = request.only(["author_id", "number"]);

    const identity = await Identity.find(params.id);
    if (!identity) {
      return response.status(404).json({ data: "Resource not found" });
    }
    identity.author_id = indentityInfo.author_id;
    identity.number = indentityInfo.number;

    await author.save();

    return response.status(200).json(identity);
  }

  async delete({ params, response }) {
    const identity = await Identity.find(params.id);
    if (!identity) {
      return response.status(404).json({ data: "Resource not found" });
    }
    await identity.delete();

    return response.status(204).json(null);
  }
}

module.exports = IdentityController;
