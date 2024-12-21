const express = require("express");
const bodyParser = require("body-parser");
const bookcontroller = require("../controllers/bookcontrolller");
const multer = require("multer");
const router = express.Router();

/*
 * ---------------------------------
 * ===== Routes for Admin Panel =====
 * ---------------------------------
 */

// Middleware to parse JSON and URL-encoded data
router.use(bodyParser.json());
router.use(
  bodyParser.urlencoded({
    extended: false
  })
);

// Multer configuration
const uploader = multer({
  storage: multer.diskStorage({}),
  limits: { fileSize: 10 * 1024 * 1024 }
});

// Route to add a new book to the database
router.post("/add/book", uploader.single("file"), (req, res) => {
  bookcontroller.addBook(req, res);
});

// Route to get all books from the database
router.get("/books", (req, res) => {
  bookcontroller.getBooks(req, res);
});

// Route to get a single book by its ID from the database
router.get("/book/:id", (req, res) => {
  bookcontroller.getBook(req, res);
});

// Route to update a book in the database
router.put("/edit/book/:id", (req, res) => {
  bookcontroller.editBook(req, res);
});

// Route to delete a book from the database
router.delete("/delete/book/:id", (req, res) => {
  bookcontroller.deleteBook(req, res);
});

/*
 * ---------------------------------
 * ===== Routes for User Panel =====
 * ---------------------------------
 */

router.get("/user/books", (req, res) => {
  bookcontroller.getBooksForUser(req, res);
});

module.exports = router;
