const Book = require("../models/Book");
const cloudinary = require("cloudinary").v2;

// function to add the book
async function addBook(req, res) {
  try {
    if (req.file) {
      cloudinary.config({
        cloud_name: "dmvkdb242",
        api_key: 829329545992856,
        api_secret: "4pNMsXoXu3GkLGEwTf2Y9wKELNY"
      });
      const upload = await cloudinary.uploader.upload(req.file.path);
      req.body.bookImage = upload.secure_url;
    }
    let book = new Book(req.body);
    await book.save();
    res.status(200).send({ success: true });
  } catch (err) {
    console.error(err);
    res.status(400).send({ success: false });
  }
}

// function to get all books
async function getBooks(req, res) {
  try {
    let page = req.query.page;
    let limit = req.query.limit;
    // countDocuments is a inbuilt function which is used to count the occurance of document in it...
    let count = await Book.countDocuments({});
    const bookName = new RegExp(req.query.search, "i");
    const authorName = new RegExp(req.query.search, "i");
    let books = await Book.find({
      $or: [
        {
          bookName: { $regex: bookName }
        },
        {
          authorName: { $regex: authorName }
        }
      ]
    })
      .skip((page - 1) * limit)
      .limit(limit);
    res.status(200).send({ success: true, data: books, totalCount: count });
  } catch (err) {
    console.log(err);
  }
}

// function to get a single book with their id
async function getBook(req, res) {
  try {
    let id = req.params.id;
    let book = await Book.findOne({ _id: id });
    res.status(200).send({ success: true, data: book });
  } catch (err) {
    console.error(err);
    res.status(400).send({ success: false, message: "something went wrong" });
  }
}

// function to edit a single book
async function editBook(req, res) {
  try {
    let id = req.params.id;
    let book = await Book.findOne({ _id: id });
    book.bookName = req.body.bookName;
    book.authorName = req.body.authorName;
    book.description = req.body.description;
    book.price = req.body.price;
    book.language = req.body.language;
    book.publisher = req.body.publisher;
    await book.save();
    res.status(200).send({ success: true });
  } catch (err) {
    console.log(err);
    res.status(400).send({ success: false });
  }
}

// function to delete a single book
async function deleteBook(req, res) {
  try {
    let id = req.params.id;
    await Book.deleteOne({ _id: id });
    res.status(200).send({ success: true });
  } catch (err) {
    console.log(err);
    res.status(400).send({ success: false });
  }
}

/*
 * ---------------------------------
 * ===== methods for User Panel =====
 * ---------------------------------
 */

async function getBooksForUser(req, res) {
  try {
    let books = await Book.find({});
    res.status(200).send({ success: true, data: books });
  } catch (error) {
    console.error(error);
    res.status(400).send({ success: false });
  }
}

module.exports = {
  addBook,
  getBooks,
  getBook,
  editBook,
  deleteBook,
  getBooksForUser
};
