module.exports = (app) => {
  const users = require("../controllers/user.controller.js");

  var router = require("express").Router();

  // Create a new User
  router.post("/", users.create);

  // Retrieve User
  router.post("/:username", users.findOne);

  // Update a User with username and password
  router.put("/:username", users.update);

  // Delete a User with username and password
  router.delete("/:username", users.delete);

  app.use("/api/users", router);
};
