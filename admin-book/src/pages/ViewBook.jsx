import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Assuming you're using React Router
import { Container } from "react-bootstrap";
import axios from "axios";

function ViewBook() {
  let params = useParams();
  let id = params.id;
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

  useEffect(() => {
    axios({
      url: "http://localhost:3000/book/" + id,
      method: "GET"
    })
      .then((res) => {
        console.log(res);
        setBook(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <Container fluid>
      <div>
        {/* Book Image */}
        <img
          src={book.bookImage || "https://via.placeholder.com/150"}
          alt={book.bookName || "Unknown Book"}
          style={{
            width: "500PX", // Make image take full width
            height: "500PX" // Maintain aspect ratio
            
          }}
        />

        {/* Book Title */}
        <h2 className="text-primary mt-4">{book.bookName || "Unknown Book"}</h2>

        {/* Book Author */}
        <p className="text-muted">
          <strong>Author:</strong> {book.authorName || "Unknown Author"}
        </p>

        {/* Book Description */}
        <p>
          <strong>Description:</strong>{" "}
          {book.bookDescription || "No description available for this book."}
        </p>

        {/* Short Description */}
        <p>
          <strong>Short Description:</strong> {book.shortDescription || "N/A"}
        </p>

        {/* Book Information */}
        <p>
          <strong>Price:</strong> ${book.bookPrice || "N/A"}
        </p>
        <p>
          <strong>Language:</strong> {book.language || "Unknown"}
        </p>
        <p>
          <strong>ISBN:</strong> {book.isbnNumber || "N/A"}
        </p>
        <p>
          <strong>Edition:</strong> {book.edition || "N/A"}
        </p>
        <p>
          <strong>Status:</strong> {book.status || "N/A"}
        </p>
        <p>
          <strong>Quantity:</strong> {book.quantity || "N/A"}
        </p>
        <p>
          <strong>Publisher:</strong> {book.publisher || "Unknown"}
        </p>

        {/* Action Buttons */}
        <div className="d-flex justify-content-between mt-4">
          <button className="btn btn-primary px-4">Buy Now</button>
          <button className="btn btn-secondary px-4">Add to Wishlist</button>
        </div>
      </div>
    </Container>
  );
}

export default ViewBook;
