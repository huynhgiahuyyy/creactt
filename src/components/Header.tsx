import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Container } from "react-bootstrap";

import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>React + Redux</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/products">
              Products
            </Nav.Link>
            <Nav.Link as={Link} to="/charts">
              Charts
            </Nav.Link>
          </Nav>
          <Link to="/add" className="btn btn-outline-light">
            Add Product
          </Link>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
