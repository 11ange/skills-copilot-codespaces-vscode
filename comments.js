// Create web server and listen on port 3000
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const comments = require("./comments");

app.use(bodyParser.json());

app.get("/comments", (req, res) => {
  // Get all comments
  res.json(comments.getComments());
});

app.post("/comments", (req, res) => {
  // Create a new comment
  const comment = req.body;
  comments.addComment(comment);
  res.json(comment);
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});