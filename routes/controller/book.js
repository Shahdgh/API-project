const bookModel = require("../../models/book");

const newBook = (req, res) => {
  const { title, pages, price, image} = req.body;
  try {
    const newBook = new bookModel({
        title,
        pages,
        price,
        image,
    });
    newBook
      .save()
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  } catch (error) {
    res.status(400).send(error);
  }
};
const getAllbook = (req, res) => {
    bookModel
      .find({})
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  };