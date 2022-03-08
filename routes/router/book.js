const express = require("express")
const {newBook,
    getbook,
    softDel,
    updateBook}= require("../controller/book")


const bookRouter = express.Router()
bookRouter.post("/newBook" , newBook)
bookRouter.get("/show", getbook);
bookRouter.delete("/softDelete/:id", softDel);
bookRouter.put("/updateBook/:id", updateBook);


module.exports = bookRouter;