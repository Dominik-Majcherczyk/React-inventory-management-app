import React, { useState } from "react";
import { Nav, Row, Col } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function Navbar() {
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
    <>
      <Row className="justify-content-between">
        <Col>
          <Nav.Link>
            <Link to="/">SuperStorage</Link>
          </Nav.Link>
        </Col>
        <Col>
          <Nav
            className="justify-content-end"
            variant="pills"
            defaultActiveKey="/home"
          >
            <Nav.Item>
              <Nav.Link>
                <Link to="/admin-panel">Admin panel</Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <Link to="/storage">Storage</Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <Link to="/update-profile">Update profile</Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <Link onClick={() => handleLogout()}>Logout</Link>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
    </>
  );
}
