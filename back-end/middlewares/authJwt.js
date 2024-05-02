const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");

const db = require("../models");
const User = db.user;
const Role = db.role;
;

const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];
    if (!token) {
      return res.status(403).send({ message: "No token provided!" });
    }

    const decoded = jwt.verify(token, config.secret);
    req.userId = decoded.id;
    next();
  } catch (err) {
    return res.status(401).send({ message: "Unauthorized!" });
  }
};

const isAdmin = async (req, res, next) => {
  try {
    const user = await User.findById(req.userId);
    const roles = await Role.find({ _id: { $in: user.roles } });

    if (!roles.some(role => role.name === "admin")) {
      return res.status(403).send({ message: "Require Admin Role!" });
    }

    next();
  } catch (err) {
    return res.status(500).send({ message: err.message || "Internal Server Error" });
  }
};

const isModerator = async (req, res, next) => {
  try {
    const user = await User.findById(req.userId);
    const roles = await Role.find({ _id: { $in: user.roles } });

    if (!roles.some(role => role.name === "moderator")) {
      return res.status(403).send({ message: "Require Moderator Role!" });
    }

    next();
  } catch (err) {
    return res.status(500).send({ message: err.message || "Internal Server Error" });
  }
};

const authJwt = {
  verifyToken,
  isAdmin,
  isModerator
};

module.exports = authJwt;
