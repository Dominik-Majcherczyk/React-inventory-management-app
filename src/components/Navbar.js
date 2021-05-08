import React, { useState } from "react";
import { Nav, Row, Col, Navbar, NavDropdown, Container } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import ico from "./../img/logo.svg";

export default function Navenu() {
  const [error, setError] = useState("");
  const { logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand>
          <Link
            class="text-decoration-none text-uppercase font-weight-normal text-reset"
            to="/"
          >
            SuperStorage{" "}
            <img
              src={ico}
              style={{
                width: "80px",
                paddingLeft: "10px",
                paddingRight: "40px",
              }}
              alt="logo"
            ></img>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link eventKey={1}>
              <Link class="text-decoration-none text-reset " to="/admin-panel">
                Admin panel
              </Link>
            </Nav.Link>
            <Nav.Link eventKey={2}>
              <Link class="text-decoration-none text-reset " to="/storage">
                Storage
              </Link>
            </Nav.Link>
            <Nav.Link eventKey={3}>
              <Link
                class="text-decoration-none text-reset "
                to="/update-profile"
              >
                Update profile
              </Link>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link
              class="text-decoration-none text-reset "
              onClick={() => handleLogout()}
            >
              {" "}
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

<>
  <Row className="justify-content-between">
    <Col>
      <Nav.Link></Nav.Link>
    </Col>
    <Col>
      <Nav
        className="justify-content-end"
        variant="pills"
        defaultActiveKey="/home"
      >
        <Nav.Item>
          <Nav.Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link></Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
  </Row>
</>;
