const mongoose = require('mongoose');
const Post = require('../models/Post');
const User = require('../models/User');

const UserPostController = {
  getAllPost: async (req, res, next) => {
    let post;
    try {
      post = await Post.find();
    } catch (err) {
      console.log(err);
    }
    if (!post) {
      return res.status(404).json({ message: "Not found" });
    }
    return res.status(200).json({ post });
  },

  addPost: async (req, res, next) => {
    const { title, description, image, user } = req.body;
    console.log(user)

    let existingUser;
  
    try {
      existingUser = await User.findById(user);
      console.log(existingUser)
    } catch (err) {
      return console.log(err);
    }
    if (!existingUser) {
      return res.status(400).json({ message: "Unable TO Find User By This ID" });
    }

    const post = new Post({
      title,
      description,
      image,
      user,
    });

    try {
      const session = await mongoose.startSession();
      session.startTransaction();
      await post.save({ session });
      existingUser.post.push(post);
      await session.commitTransaction();
    } catch (err) {
      await existingUser.save({ session });
      console.log(err);
      return res.status(500).json({ message: err });
    }

    return res.status(200).json({ post });
  },

  updatePost: async (req, res, next) => {
    const { title, description, image } = req.body;
    const postId = req.params.id;
    try {
      const post = await Post.findByIdAndUpdate(postId, {
        title,
        description,
        image,
      });

      if (!post) {
        return res.status(500).json({ message: "Unable to Update" });
      }

      return res.status(200).json({ post });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: "Error occurred while updating" });
    }
  },

  getById: async (req, res, next) => {
    const id = req.params.id;
    let post;
    try {
      post = await Post.findById(id);
    } catch (err) {
      console.log(err);
    }
    if (!post) {
      return res.status(404).json({ message: "No Blog Found" });
    }
    return res.status(200).json({ post });
  },

  deletePost: async (req, res, next) => {
    const id = req.params.id;

    let post;
    try {
      post = await Post.findByIdAndRemove(id).populate("user");
      await  post.user.post.pull(post);
      await post.user.save();
    } catch (err) {
      console.log(err);
    }
    if (!post) {
      return res.status(500).json({ message: "Unable To Delete" });
    }
    return res.status(200).json({ message: "Successfully Delete" });
  },
};

module.exports = UserPostController;
