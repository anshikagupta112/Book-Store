// import { Container, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../public/vite.svg";

function MyNav() {
  return (
    <Container fluid>
      <Navbar fixed expand="md" bg="warning">
        {/* <Navbar.Brand>Book Store</Navbar.Brand> */}
        <Navbar.Brand>
          <img src={logo} width="30" height="30"></img>
          <span style={{ marginLeft: "5px" }}></span>BookStore
        </Navbar.Brand>
        <Navbar.Toggle aria-control="mynav"></Navbar.Toggle>
        <Navbar.Collapse id="mynav">
          <Nav className="fw-bold">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/book">Books</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
          </Nav>
          {/* <NavDropdown title="Category" id="mynav">
            <NavDropdown.Item href="/category/fiction">
              Fiction
            </NavDropdown.Item>
            <NavDropdown.Item href="/category/non-fiction">
              Non-Fiction
            </NavDropdown.Item>
            <NavDropdown.Item href="/category/science-fiction">
              Science Fiction
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/category/biographies">
              Biographies
            </NavDropdown.Item>
            <NavDropdown.Item href="/category/history">
              History
            </NavDropdown.Item>
            <NavDropdown.Item href="/category/politics">
              Politics
            </NavDropdown.Item>
            <NavDropdown.Item href="/category/religion">
              Religion
            </NavDropdown.Item>
          </NavDropdown> */}
        </Navbar.Collapse>
        <Navbar.Text>Welcome user</Navbar.Text>
      </Navbar>
    </Container>
  );
}

export default MyNav;
