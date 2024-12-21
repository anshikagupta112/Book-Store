const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const timestamps = require("mongoose-timestamps");
const bookSchema = new Schema({
  bookName: {
    type: String,
    required: true
  },
  authorName: {
    type: String,
    required: true
  },
  bookDescription: {
    type: String,
    required: true
  },
  shortDescription: {
    type: String
  },
  bookPrice: {
    type: Number,
    required: true
  },
  language: {
    type: String,
    required: true
  },
  isbnNumber: {
    type: Number,
    required: true
  },
  edition: {
    type: Number,
    required: true
  },
  status: {
    type: String
  },
  quantity: {
    type: Number
  },
  publisher: {
    type: String,
    required: true
  },
  bookImage: {
    type: String
  },
  createdAt: Date,
  updatedAt: Date
});
bookSchema.plugin(timestamps, { index: true });
module.exports = mongoose.model("Book", bookSchema);
