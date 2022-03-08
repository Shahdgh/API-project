const mongoose = require("mongoose");
const author = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  age: { type: Number },
  image: { type: String, required: true },
  gender: { type: String },
  books :[{type:mongoose.Schema.Types.ObjectId ,ref:"Book"}]
});
module.exports = mongoose.model("Author",author)