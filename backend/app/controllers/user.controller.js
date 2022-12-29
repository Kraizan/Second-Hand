const db = require("../models");
const User = db.users;

// Create and Save a new User
exports.create = (req, res) => {
  // Create a User
  const user = new User(req.body);

  // Save User in the database
  user
    .save(user)
    .then((data) => {
      res.status(200).send({ message: "User registered successfully!" });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while registering the user.",
      });
    });
};

// Retrieve all Users from the database.
exports.findOne = (req, res) => {
  const [_username, _password] = [req.body.username, req.body.password];
  var condition = {
    username: _username,
    password: _password,
  };

  User.find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving user.",
      });
    });
};

// Update a User by the username in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }

  const _username = req.params.username;

  User.findOneAndUpdate({ username: _username }, req.body, {
    useFindAndModify: false,
  })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update User with username=${_username}. Or User was not found!`,
        });
      } else res.send({ message: "User details were updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating User with username=" + _username,
      });
    });
};

// Delete a User with the specified username in the request
exports.delete = (req, res) => {
  const _username = req.params.username;

  User.findOneAndDelete({ username: _username }, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete User with username=${_username}. Or User was not found!`,
        });
      } else {
        res.send({
          message: "User was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete User with username=" + _username,
      });
    });
};
