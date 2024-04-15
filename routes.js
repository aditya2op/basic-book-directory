const express = require("express");
const router = express.Router();

let books = [
  { id: 1, title: "Book 1", author: "Author 1" },
  { id: 2, title: "Book 2", author: "Author 2" },
  { id: 3, title: "Book 3", author: "Author 3" },
];

// GET all books
router.get("/books", (req, res) => {
  res.json(books);
});

// POST a new book
router.post("/books", (req, res) => {
  const { title, author } = req.body;
  const newBook = { id: books.length + 1, title, author };
  books.push(newBook);
  res.status(201).json(newBook);
});

// PUT (update) an existing book
router.put("/books/:id", (req, res) => {
  const { id } = req.params;
  const { title, author } = req.body;
  const bookIndex = books.findIndex((book) => book.id === parseInt(id));

  if (bookIndex === -1) {
    return res.status(404).json({ error: "Book not found" });
  }

  books[bookIndex] = { id: parseInt(id), title, author };
  res.json(books[bookIndex]);
});

// DELETE a book
router.delete("/books/:id", (req, res) => {
  const { id } = req.params;
  const bookIndex = books.findIndex((book) => book.id === parseInt(id));

  if (bookIndex === -1) {
    return res.status(404).json({ error: "Book not found" });
  }

  const deletedBook = books.splice(bookIndex, 1)[0];
  res.json(deletedBook);
});

module.exports = router;
