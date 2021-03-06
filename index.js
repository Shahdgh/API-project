const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv").config()
const Joi = require("joi")
const morgan = require("morgan")

const JoiObjectId = require("joi-objectid")
Joi.objectid = JoiObjectId(Joi)
const users = require("./routes/users")

// const books = require("./routes/books")

mongoose
  .connect(`mongodb+srv://shahadgh:${process.env.MONOGDB_PASSWORD}@cluster0.nbouy.mongodb.net/AuthorDB`)
  
  .then(() => {
    console.log("connected to MongoDB")
  })
  .catch(error => {
    console.log("Error conneceting to MongoDB", error)
  })

  const app = express()
app.use(express.json())
app.use(cors())
app.use(morgan())


app.use("/api/users", users)
const authorRouter = require("./routes/router/author");
app.use(authorRouter);
const bookRouter = require("./routes/router/book");
app.use(bookRouter);






const port = process.env.PORT || 5000

app.listen(port, () => console.log("server is listening on port " + port))