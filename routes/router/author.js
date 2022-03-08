const express = require("express")
const {addAuthor}= require("../controller/author")


const authorRouter = express.Router()
authorRouter.post("/addAuthor" , addAuthor)

module.exports = authorRouter;