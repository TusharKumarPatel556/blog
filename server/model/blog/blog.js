const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema(
  {
    BlogTitle: {
      type: String,
      required: true,
    },
    BlogContent: {
      type: String,
      required: true,
    },
    AuthorName: {
      type: String,
      required: true,
    },
    createdAt: Date,
  },
  { collection: "Blog-data" }
);

const BlogData = mongoose.model("Bloglist", BlogSchema);

module.exports = BlogData;
