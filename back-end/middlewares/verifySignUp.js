const db = require("../models");
const ROLES = db.ROLES;
const User = db.user;

checkDuplicateUsernameOrEmail = (req, res, next) => {
  // Username
  User.findOne({ username: req.body.username })
  .then(existingUser => {
    if (existingUser) {
      res.status(400).send({ message: "Failed! Username is already in use!" });
    } else {
      // Email
      return User.findOne({ email: req.body.email });
    }
  })
  .then(existingEmailUser => {
    if (existingEmailUser) {
      res.status(400).send({ message: "Failed! Email is already in use!" });
    } else {
      next();
    }
  })
  .catch(err => {
    res.status(500).send({ message: err.message || "Some error occurred while checking user existence." });
  });
};

checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        res.status(400).send({
          message: `Failed! Role ${req.body.roles[i]} does not exist!`
        });
        return;
      }
    }
  }

  next();
};

const verifySignUp = {
  checkDuplicateUsernameOrEmail,
  checkRolesExisted
};

module.exports = verifySignUp;
