const mongoose = require("mongoose");

const book = new mongoose.Schema({
  title: { type: String, required: true },
  pages: { type: Number, required: true },
  price: { type: Number, default: 0 },
  image: { type: String, required: true },
});

module.exports = mongoose.model("Book", book);
