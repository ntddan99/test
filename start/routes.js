"use strict";

const Route = use("Route");

Route.group(() => {
  Route.get("books", "BookController.index");
  Route.post("books", "BookController.store");
  Route.get("books/:id", "BookController.show");
  Route.put("books/:id", "BookController.update");
  Route.delete("books/:id", "BookController.delete");
  Route.post("authors", "AuthorController.store");
  Route.get("authors", "AuthorController.index");
  Route.get("authors/:id", "AuthorController.show");
  Route.put("authors/:id", "AuthorController.update");
  Route.delete("authors/:id", "AuthorController.delete");
  Route.get("/abc", "BookController.getBookInfoRelation");
  Route.post("identity", "IdentityController.store");
  Route.get("identity", "IdentityController.index");
  Route.get("identity/:id", "IdentityController.show");
  Route.get("customer", "CustomerController.index");
}).prefix("api/v1");
