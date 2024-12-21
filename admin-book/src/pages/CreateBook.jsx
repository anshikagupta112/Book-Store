import { Form, Button } from "react-bootstrap";
import { useState } from "react";
/*
 * kissi page se dusare page pr jaane ke liye useNavigate hook ka use karte hai...
 */
import { useNavigate } from "react-router-dom";
import axios from "axios";
function CreateBook() {
  const navigate = useNavigate();
  function addBook() {
    let data = {
      bookName: bookName,
      authorName: authorName,
      bookDescription: bookDescription,
      bookPrice: bookPrice,
      language: language,
      publisher: publisher
    };
    axios({
      method: "POST",
      url: "http://localhost:3000/add/book",
      data: data
    })
      .then((res) => {
        if (res.data.success) {
          navigate("/book");
        }
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  let [bookName, setBookName] = useState("");
  let [authorName, setAuthorName] = useState("");
  let [bookDescription, setBookDescription] = useState("");
  let [bookPrice, setBookPrice] = useState(0);
  let [language, setLanguage] = useState("");
  let [publisher, setPublisher] = useState("");
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Book Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Book Name"
          onChange={(e) => setBookName(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Author Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Author Name"
          onChange={(e) => setAuthorName(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Book Description </Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          onChange={(e) => setBookDescription(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Price </Form.Label>
        <Form.Control
          type="number"
          placeholder="Price"
          onChange={(e) => setBookPrice(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Language </Form.Label>
        <Form.Control
          type="text"
          placeholder="Language"
          onChange={(e) => setLanguage(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Publisher </Form.Label>
        <Form.Control
          type="text"
          placeholder="Publisher"
          onChange={(e) => setPublisher(e.target.value)}
        />
      </Form.Group>
      <Button variant="dark" onClick={addBook}>
        Add Book
      </Button>
    </Form>
  );
}

export default CreateBook;
