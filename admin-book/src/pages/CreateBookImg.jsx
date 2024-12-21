import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function CreateBookImg() {
  const navigate = useNavigate();
  function addBook() {
    // let data = {
    //     bookName: bookName,
    //     authorName: authorName,
    //     description: description,
    //     price: price,
    //     language: language,
    //     publisher: publisher
    // }
    let formData = new FormData();
    formData.append("bookName", bookName);
    formData.append("authorName", authorName);
    formData.append("bookDescription", bookDescription);
    formData.append("shortDescription", shortDescription);
    formData.append("bookPrice", bookPrice);
    formData.append("language", language);
    formData.append("quantity", quantity);
    formData.append("status", status);
    formData.append("publisher", publisher);
    formData.append("isbnNumber", isbnNumber);
    formData.append("edition", edition);
    formData.append("file", file);
    axios({
      url: "http://localhost:3000/add/book",
      method: "post",
      data: formData,
      headers: {
        "content-type": "multipart/form-data"
      }
    })
      .then((res) => {
        if (res.data.success) {
          navigate("/book");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  let [bookName, setBookName] = useState("");
  let [authorName, setAuthorName] = useState("");
  let [bookDescription, setBookDescription] = useState("");
  let [shortDescription, setShortDescription] = useState("");
  let [bookPrice, setBookPrice] = useState(0);
  let [language, setLanguage] = useState("");
  let [quantity, setQuantity] = useState("");
  let [status, setStatus] = useState("");
  let [publisher, setPublisher] = useState("");
  let [isbnNumber, setIsbnNumber] = useState("");
  let [edition, setEdition] = useState("");
  let [file, setFile] = useState("");
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
        <Form.Label>Short Description </Form.Label>
        <Form.Control
          as="textarea"
          rows={2}
          onChange={(e) => setShortDescription(e.target.value)}
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
        <Form.Label>Language</Form.Label>
        <Form.Select onChange={(e) => setLanguage(e.target.value)}>
          <option>Select a Language</option>
          <option value="Hindi">Hindi</option>
          <option value="English">English</option>
          <option value="Marathi">Marathi</option>
          <option value="Gujrati">Gujrati</option>
          <option value="Urdu">Urdu</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>ISBN Number </Form.Label>
        <Form.Control
          type="text"
          placeholder="ISBN Number"
          onChange={(e) => setIsbnNumber(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Edition</Form.Label>
        <Form.Control
          type="text"
          placeholder="Edition"
          onChange={(e) => setEdition(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Status</Form.Label>
        <Form.Select onChange={(e) => setStatus(e.target.value)}>
          <option value="">Select the status</option>
          <option value="firstHand">First Hand</option>
          <option value="secondHand">Second Hand</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Quantity Available</Form.Label>
        <Form.Control
          type="number"
          placeholder="Quantity Available"
          onChange={(e) => setQuantity(e.target.value)}
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

      <Form.Group className="mb-3">
        <Form.Label>Select Book Image </Form.Label>
        <Form.Control
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        />
      </Form.Group>
      <Button variant="dark" onClick={addBook}>
        Add Book
      </Button>
    </Form>
  );
}
export default CreateBookImg;
