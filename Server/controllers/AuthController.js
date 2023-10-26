const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();


const saltRounds = 10;
const secretKey = process.env.JWT_SECRET_KEY;

module.exports = {
  register: async (req, res) => {
    try {
      const { email, password, username } = req.body;
      const photo = req.file.filename;

      const hashedPassword = await bcrypt.hash(String(password), saltRounds);

      const user = new User({
        email,
        password: hashedPassword,
        username,
        photo,
      });
      await user.save();

      res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
      console.error("Error registering new user:", error);
      res.status(500).json({ error: "Error registering new user" });
    }
  },

  getAllUser: async (req, res, next) => {
    try {
      const users = await User.find();
      if (!users) {
        return res.status(404).json({ message: "No users found" });
      }
      res.status(200).json({ users });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Error getting users" });
    }
  },
  login: async (req, res) => {
    try {
      const { email, password, } = req.body;
      console.log("Request data:", email, password);

      const user = await User.findOne({ email });
      console.log("User found:", user);

      if (!user) {
        console.log("Invalid email or password");
        return res.status(401).json({ error: "Invalid email or password" });
      }

      const userPassword = String(user.password);
      const enteredPassword = String(password);

      const isMatch = await bcrypt.compare(enteredPassword, userPassword);
      console.log("Password match:", isMatch);

      if (isMatch) {
        const token = jwt.sign({ userId: user._id }, secretKey, {
          expiresIn: "1h",
        });

        console.log("Login successful");
        res.status(200).json({ token });
      } else {
        console.log("Invalid email or password");
        res.status(401).json({ error: "Invalid email or password" });
      }
    } catch (error) {
      console.error("Login error:", error);
      res.status(500).json({ error: "Error during login" });
    }
  },
};
