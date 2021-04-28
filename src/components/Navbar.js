import React, { useState } from "react";
import { Nav, Row, Col } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <Row className="justify-content-between">
        <Col>SuperStorage</Col>
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
                <Link to="/">Logout</Link>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
    </>
  );
}
