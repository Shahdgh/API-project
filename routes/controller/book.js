const bookModel = require("../../models/book");

const newBook = (req, res) => {
  const { title, pages, price, image } = req.body;
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
const getBook = (req, res) => {
    bookModel
      .find({})
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  };

const softDel = (req, res) => {
  const { _id } = req.params;
  try {
    bookModel.findOne({ _id: _id }).then((item) => {
      if (item) {
        bookModel.findById({ _id: _id }).then((item) => {
          if (item.show == false) {
            bookModel
              .findByIdAndUpdate(
                { _id: _id },
                { $set: { show: true } },
                { new: true }
              )
              .then((result) => {
                res.status(200).json(result);
              })
              .catch((err) => {
                res.status(400).json(err);
              });
          } else {
            bookModel
              .findByIdAndUpdate(
                { _id: _id },
                { $set: { show: false } },
                { new: true }
              )
              .then((result) => {
                res.status(200).json(result);
              })
              .catch((err) => {
                res.status(400).json(err);
              });
          }
        });
      } else {
        res.status(403).send("Forbidden");
      }
    });
  } catch (error) {
    res.status(400).json(error);
  }
};
const updateBook = (req, res) => {
  const { _id } = req.params;
  const { desc } = req.body;
  try {
    bookModel.findOne({ _id: _id }).then((item) => {
      if (item) {
        bookModel
          .findOneAndUpdate(
            { _id: _id },
            { $set: { desc: desc, time: Date() } },
            { new: true }
          )
          .then((result) => {
            res.status(200).json(result);
          });

        bookModel
          .findOneAndUpdate(
            { _id: _id },
            { $set: { desc: desc, time: Date() } },
            { new: true }
          )
          .then((result) => {
            res.status(200).json(result);
          });
      } else {
        res.status(404).send("Book not found");
      }
    });
  } catch (error) {
    res.status(400).json(error);
  }
};
module.exports = {
  newBook,
  getBook,
  softDel,
  updateBook,
};
