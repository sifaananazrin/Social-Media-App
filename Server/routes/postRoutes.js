const express = require('express');
const router = express.Router();
const PostController = require('../controllers/UserPostController');

router.get('/',PostController.getAllPost);

router.post("/add",PostController.addPost)
router.put("/update/:id",PostController.updatePost)
router.get("/:id",PostController.getById)
router.delete("/:id",PostController.deletePost)
module.exports = router;
