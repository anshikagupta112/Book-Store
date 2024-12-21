import { Container, Table, Form, Button, Pagination } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

/*
 * main function Starting from here
 */
function Book() {
  let [books, setBooks] = useState([]);
  let [search, setSearch] = useState("");
  let [isDelete, setIsDelete] = useState(false);

  /*
   * Pagination Conecpt begins here...
   */
  let [pageNo, setPageNo] = useState(1);
  let [count, setCount] = useState(0);
  let items = [];
  let limit = 3;

  // Pagination page concepts
  function changePage(pageNo) {
    setPageNo(pageNo);
  }
  for (let number = 1; number <= count; number++) {
    items.push(
      <Pagination.Item key={number} onClick={() => changePage(number)}>
        {number}
      </Pagination.Item>
    );
  }

  /*
   * onClick function definitions starts here..
   */
  let navigate = useNavigate();
  function addBook() {
    navigate("/add/book");
  }
  function goToBookEditPage(id) {
    navigate("/edit/book/" + id);
  }
  function deleteBook(id) {
    axios({
      url: "http://localhost:3000/delete/book/" + id,
      method: "DELETE"
    })
      .then((res) => {
        console.log(res);
        setIsDelete(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  /*
   * ViewBook function after onclick to render the page to the ViewBook.jsx through the route
   */
  function goToviewBook(id) {
    navigate("/view/Book/" + id);
  }

  /*
   * useEffect section begins here...
   */
  useEffect(() => {
    axios({
      url: "http://localhost:3000/books",
      method: "GET",
      params: {
        search: search,
        page: pageNo,
        limit: limit
      }
    })
      .then((res) => {
        console.log(res);
        setBooks(res.data.data);
        setIsDelete(false);
        setCount(Math.ceil(res.data.totalCount / 3));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isDelete, search, pageNo, count]);

  /*
   * DOM reflection begins here...
   */
  return (
    <Container fluid>
      {/* Search Bar starts from here... */}
      <Form>
        <Form.Group className="mb-2">
          <Form.Control
            type="text"
            placeholder="Enter Book Name or Author Name to Search..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </Form.Group>
      </Form>

      {/* Add Book Button is started from here ... */}
      <Button
        className="mb-2"
        variant="dark"
        style={{ float: "right" }}
        onClick={addBook}
      >
        Add Book
      </Button>

      {/* Table for the Books is started from here... */}
      <Table striped bordered className="mt-2 text-center align-middle">
        <thead>
          <tr>
            <th>Book Image</th>
            <th>Book Name</th>
            <th>Book Author </th>
            {/* <th>Book Description </th> */}
            <th>Book Price</th>
            <th>Book Language</th>
            <th>Book Publisher</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, i) => (
            <tr key={i}>
              <td>
                <img
                  src={book.bookImage}
                  height="150px"
                  width="90px"
                  alt="Image"
                />
              </td>
              <td>{book.bookName}</td>
              <td>{book.authorName}</td>
              {/* <td>{book.shortDescription}</td> */}
              <td>{book.bookPrice}</td>
              <td>{book.language}</td>
              <td>{book.publisher}</td>
              <td>
                <i
                  className="bi bi-pencil-fill text-primary me-3"
                  style={{ cursor: "pointer" }}
                  title="Edit"
                  onClick={() => goToBookEditPage(book._id)}
                ></i>
                <i
                  className="bi bi-trash-fill text-danger me-3"
                  style={{ cursor: "pointer" }}
                  onClick={() => deleteBook(book._id)}
                  title="Delete"
                ></i>
                <i
                  className="bi bi-eye-fill text-success"
                  style={{ cursor: "pointer" }}
                  onClick={() => goToviewBook(book._id)}
                  title="View"
                ></i>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Pagination for the page is ending here means to show on DOM */}
      <div>
        <Pagination size="md">{items}</Pagination>
      </div>
    </Container>
  );
}
export default Book;
