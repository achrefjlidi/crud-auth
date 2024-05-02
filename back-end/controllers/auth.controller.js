const config = require("../config/auth.config");
const User  = require("../models/user");

const Role = require("../models/role");


var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = async (req, res) => {
  console.log(req.body.username)
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8)
  });
  
  try {
    // Save the user to the database
    const savedUser = await user.save();
  
    // If roles are provided in the request body
    if (req.body.roles) {
      // Find roles
      const roles = await Role.find({ name: { $in: req.body.roles } });
      // Map role ids
      const roleIds = roles.map(role => role._id);
      // Assign roles to the user
      savedUser.roles = roleIds;
      // Save the user with updated roles
      await savedUser.save();
    } else {
      // If no roles are provided, assign the "user" role to the user
      const defaultRole = await Role.findOne({ name: "user" });
      savedUser.roles = [defaultRole._id];
      await savedUser.save();
    }
  
    // Send success response
    res.send({ message: "User was registered successfully!" });
  } catch (err) {
    // Handle errors
    res.status(500).send({ message: err.message || "Some error occurred while creating the user." });
  }
  
};

exports.signin = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username }).populate("roles", "-__v");

    if (!user) {
      return res.status(404).send({ message: "User Not found." });
    }

    const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

    if (!passwordIsValid) {
      return res.status(401).send({
        accessToken: null,
        message: "Invalid Password!"
      });
    }

    const token = jwt.sign({ id: user._id }, config.secret, {
      algorithm: 'HS256',
      allowInsecureKeySizes: true,
      expiresIn: 86400 // 24 hours
    });

    const authorities = user.roles.map(role => "ROLE_" + role.name.toUpperCase());

    res.status(200).send({
      id: user._id,
      username: user.username,
      email: user.email,
      roles: authorities,
      accessToken: token
    });
  } catch (err) {
    res.status(500).send({ message: err.message || "An error occurred while signing in." });
  }
};
