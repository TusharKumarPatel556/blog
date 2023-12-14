const BlogData = require("../../model/blog/blog");
const jwt = require("jsonwebtoken");
const isUserLoggedIn = require("../../middlewares/Authentication/auth");

const BlogPostController = async (req, res) => {
  try {
    const { BlogTitle, BlogContent, AuthorName } = req.body;

    const blogpost = await BlogData.create({
      BlogTitle,
      BlogContent,
      AuthorName,
      createdAt: new Date(),
    });
    res.send({
      message: "Job Posted",
      Author: req.user.name,
    });
  } catch (err) {
    res.send({
      message: "failed",
    });
  }
};
const AllBlogs = async (req, res) => {
  try {
    const blogs = await BlogData.find();
    res.status(200).json({
      blogs: blogs,
    });
  } catch (err) {
    res.status(500).send({
      message: "Can no find any User",
    });
  }
};

module.exports = {
  BlogPostController,
  AllBlogs,
};
