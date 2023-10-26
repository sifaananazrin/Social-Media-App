const User = require("../models/User");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
  verify: (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(400).send({
        token: false,
        message: "No token provided",
      });
    }
    try {
      const decoded = jwt.verify(
        token.split(" ")[1],
        process.env.JWT_SECRET_KEY
      );
      if (decoded) {
        User.findOne({ _id: decoded.userId }).then((user) => {
          req.id = decoded.userId;
          next();
        });
      } else {
        return res.status(400).send({
          token: false,
          message: "invalid token",
        });
      }
    } catch (err) {
      return res.status(400).send({
        token: false,
        message: "invalid token",
      });
    }
  },
};
