const express = require("express");
const app = express();
const PORT = 8082;

var cors = require("cors");

app.use(cors());

//receiving incoming from the client

app.use(express.json());

const books = [
  { id: 1, title: "The great Gatsby", author: "F.cott" },
  { id: 2, title: "The Moby Dic", author: "Herman" },
];

//home route

app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "Welcome to my first boom apiusing express",
  });
});

//fetching all books

app.get("/books", (req, res) => {
  res.json({
    status: "success",
    message: "welcome to my  all books",
    data: books,
  });
});

app.get("/books/:id", (req, res) => {
  const id = req.params.id;

  const bookFound = books.find((book) => book.id === id);
  // console.log(bookFound)
  if (!bookFound) {
    return res.json({
      status: "failed",
      message: "Book not found",
    });
  }
  res.json({
    status: "success",
    message: "welcome to my  single book",
    data: bookFound,
  });
});
//create book
app.post("/books", (req, res) => {
  console.log(req.body);
  const newPost = req.body;
  books.push(newPost);
  res.json({
    status: "success",
    message: "Book craete successfully",
    data: books,
  });
});
//delete a book
app.delete("/books/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const afterdeleteBook = books.filter((book) => book.id !== id);
  console.log(afterdeleteBook);
  res.json({
    status: "success",
    message: "Book deleted successfully",
    data: afterdeleteBook,
  });
});

//start the server

app.listen(PORT, function () {
  console.log("Server is running at port no 8082");
});
