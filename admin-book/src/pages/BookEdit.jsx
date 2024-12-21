import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

function BookEdit() {
  let [book, setBook] = useState({
    bookName: "",
    authorName: "",
    bookDescription: "",
    shortDescription: "",
    bookPrice: 0,
    language: "",
    isbnNumber: 0,
    edition: 0,
    status: "",
    quantity: 0,
    publisher: ""
  });

  let navigate = useNavigate();
  let params = useParams();
  let id = params.id;

  useEffect(() => {
    axios({
      url: "http://localhost:3000/book/" + id,
      method: "get"
    })
      .then((res) => {
        setBook(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params]);
  function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    setBook((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  }
  function editBook() {
    axios({
      url: "http://localhost:3000/edit/book/" + id,
      method: "put",
      data: book
    })
      .then(() => {
        navigate("/book");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <Form fluid>
      {/* Book Name */}
      <Form.Group className="mb-3">
        <Form.Label>Book Name</Form.Label>
        <Form.Control
          type="text"
          name="bookName"
          value={book.bookName}
          onChange={handleChange}
          required
        />
      </Form.Group>

      {/* Author Name */}
      <Form.Group className="mb-3">
        <Form.Label>Author Name</Form.Label>
        <Form.Control
          type="text"
          name="authorName"
          value={book.authorName}
          onChange={handleChange}
          required
        />
      </Form.Group>

      {/* Book Description */}
      <Form.Group className="mb-3">
        <Form.Label>Book Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="bookDescription"
          value={book.bookDescription}
          onChange={handleChange}
          required
        />
      </Form.Group>

      {/* Short Description */}
      <Form.Group className="mb-3">
        <Form.Label>Short Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={2}
          name="shortDescription"
          value={book.shortDescription}
          onChange={handleChange}
        />
      </Form.Group>

      {/* Price */}
      <Form.Group className="mb-3">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="number"
          name="bookPrice"
          value={book.bookPrice}
          onChange={handleChange}
          required
        />
      </Form.Group>

      {/* Language */}
      <Form.Group className="mb-3">
        <Form.Label>Language</Form.Label>
        <Form.Control
          as="select"
          name="language"
          value={book.language}
          onChange={handleChange}
          required
        >
          <option>Select a Language</option>
          <option value="Hindi">Hindi</option>
          <option value="English">English</option>
          <option value="Marathi">Marathi</option>
          <option value="Gujrati">Gujrati</option>
          <option value="Urdu">Urdu</option>
          {/* Add more languages as required */}
        </Form.Control>
      </Form.Group>

      {/* ISBN Number */}
      <Form.Group className="mb-3">
        <Form.Label>ISBN Number</Form.Label>
        <Form.Control
          type="number"
          name="isbnNumber"
          value={book.isbnNumber}
          onChange={handleChange}
          required
        />
      </Form.Group>

      {/* Edition */}
      <Form.Group className="mb-3">
        <Form.Label>Edition</Form.Label>
        <Form.Control
          type="number"
          name="edition"
          value={book.edition}
          onChange={handleChange}
          required
        />
      </Form.Group>

      {/* Status */}
      <Form.Group className="mb-3">
        <Form.Label>Status</Form.Label>
        <Form.Control
          as="select"
          name="status"
          value={book.status}
          onChange={handleChange}
        >
          <option>Select the status</option>
          <option value="firstHand">First Hand</option>
          <option value="secondHand">Second Hand</option>
          {/* Add more statuses as required */}
        </Form.Control>
      </Form.Group>

      {/* Quantity */}
      <Form.Group className="mb-3">
        <Form.Label>Quantity</Form.Label>
        <Form.Control
          type="number"
          name="quantity"
          value={book.quantity}
          onChange={handleChange}
          required
        />
      </Form.Group>

      {/* Publisher */}
      <Form.Group className="mb-3">
        <Form.Label>Publisher</Form.Label>
        <Form.Control
          type="text"
          name="publisher"
          value={book.publisher}
          onChange={handleChange}
          required
        />
      </Form.Group>

      {/* Submit Button */}
      <Button variant="dark" onClick={editBook}>
        Edit Book
      </Button>
    </Form>
  );
}

export default BookEdit;
