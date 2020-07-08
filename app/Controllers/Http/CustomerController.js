"use strict";
const Customer = use("App/Models/Customer");
class CustomerController {
  async index({ response }) {
    let customer = await Customer.all();
    return response.json(customer);
  }

  async show({ params, response }) {
    const customer = await Customer.find(params.id);
    return response.json(customer);
  }

  async store({ request, response }) {
    const customerInfo = request.only(["email", "name", "phone", "Address"]);

    const customer = new Cutomer();
    customer.email = customerInfo.email;
    customer.name = customerInfo.name;
    customer.phone = customerInfo.phone;
    customer.Address = customerInfo.Address;

    await customer.save();

    return response.status(201).json(customer);
  }

  async update({ params, request, response }) {
    const customerInfo = request.only(["email", "name", "phone", "Address"]);

    const customer = await Customer.find(params.id);
    if (!customer) {
      return response.status(404).json({ data: "Resource not found" });
    }
    customer.email = customerInfo.email;
    customer.name = customerInfo.name;
    customer.phone = customerInfo.phone;
    customer.Address = customerInfo.Address;

    await customer.save();

    return response.status(200).json(customer);
  }

  async delete({ params, response }) {
    const customer = await Customer.find(params.id);
    if (!customer) {
      return response.status(404).json({ data: "Resource not found" });
    }
    await customer.delete();

    return response.status(204).json(null);
  }
}

module.exports = CustomerController;
