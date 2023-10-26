const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  photo: String,
  post: [{ type: mongoose.Types.ObjectId, ref: "Post", required: true }],
});

module.exports = mongoose.model("User", userSchema);
