const { findOneAndRemove } = require("../../models/author");
const authorModel = require("../../models/author");

const getAuthor = (req, res) => {
  authorModel
    .find({})
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const addAuthor = (req, res) => {
  const { name, age, gender, image, book } = req.body;
  const newAuthor = new authorModel({
    name,
    age,
    gender,
    image,
    book,
  });
  newAuthor
    .save()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
const deleteAuthor = (req, res) => {
  const { id } = req.params;
  authorModel
    .findOneAndRemove(id)
    .exec()
    .then((result) => {
      res.status(200).json("Deleted");
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
const updateAuthor = (req, res) => {
  const { name, age, image } = req.body;
  const { id } = req.params
  authorModel
  .findByIdAndUpdate(id ,{$set:{name:name ,age:age,image:image}})
  .then((result)=>{
      res.status(200).json("updates")

  }).catch((err)=>{
      res.status(400).json(err)

  })
};

module.exports = { addAuthor, getAuthor, deleteAuthor,updateAuthor };
