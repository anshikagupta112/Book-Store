const express = require("express");
const cors = require("cors");
const connection = require("./connection");
const book = require("./routes/book");
const app = express();
connection();

app.use(cors());
app.use(book);

app.listen(3000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connection established!!!");
  }
});
