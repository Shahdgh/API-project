const authorModel = require("../../models/author");
const addAuthor = (req, res) => {
  const { name, age, gender, image, book } = req.body;
  const newAuthor = new authorModel({
    name,
    age,
    gender,
    image,
    book,
  });
  newAuthor.save().then((result) => {
      res.status(200).json(result)
  })
  .catch((err)=>{
      res.status(400).json(err)
  })
};

module.exports = { addAuthor };