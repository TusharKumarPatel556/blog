const express = require("express");
const isUserLoggedIn = require("../../middlewares/Authentication/auth");
const {
  BlogPostController,
  AllBlogs,
} = require("../../controllers/blogPost/blogpost");
const BlogRoutes = express.Router();
BlogRoutes.post("/postablog", isUserLoggedIn, BlogPostController);
BlogRoutes.get("/Bloglist", AllBlogs);

module.exports = BlogRoutes;
