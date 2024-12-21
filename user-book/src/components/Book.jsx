import { Carousel, Container, Row, Card, Col } from "react-bootstrap";
import OIP1 from "../../public/OIP1.jpg";
import OIP2 from "../../public/OIP2.jpg";
import OIP3 from "../../public/OIP3.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import axios from "axios";
function Book() {
  let [books, setBooks] = useState([]);
  useEffect(() => {
    axios({
      url: "http://localhost:3000/user/books",
      method: "GET"
    })
      .then((res) => {
        console.log(res);
        setBooks(res.data.data);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, []);
  return (
    <Container fluid>
      <Carousel style={{ marginTop: "10px" }}>
        <Carousel.Item>
          <img className="d-block w-100" src={OIP1} alt="First slide"></img>
          <Carousel.Caption>
            <h3>First slide label</h3>
            {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={OIP2} alt="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={OIP3} alt="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            {/* <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Row>
        {books.map((book, i) => (
          <Card fluid style={{ width: "20rem", marginTop: "10px" }} key={i}>
            <Card.Img src={book.bookImage} width="500px" height="250px" />
            <Card.Title>{book.bookName}</Card.Title>
            <br />

            <Card.Text fw-bold>Author: {book.authorName}</Card.Text>
            <Card.Text>Description: {book.shortDescription}</Card.Text>
          </Card>
        ))}
      </Row>
    </Container>
  );
}

export default Book;
