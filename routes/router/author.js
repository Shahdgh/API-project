const express = require("express");
const {
  addAuthor,
  getAuthor,
  deleteAuthor,
  updateAuthor,
} = require("../controller/author");

const authorRouter = express.Router();
authorRouter.post("/addAuthor", addAuthor);
authorRouter.get("/getAuthor", getAuthor);
authorRouter.delete("/delAuthor/:id", deleteAuthor);
authorRouter.put("/updateAuthor/:id", updateAuthor);

module.exports = authorRouter;
