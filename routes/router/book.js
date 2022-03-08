const express = require("express");
const { newBook, getBook, softDel, updateBook } = require("../controller/book");

const bookRouter = express.Router();
bookRouter.post("/newBook", newBook);
bookRouter.get("/getBook", getBook);
bookRouter.delete("/softDelete/:_id", softDel);
bookRouter.put("/updateBook/:id", updateBook);

module.exports = bookRouter;
