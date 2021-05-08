import React from "react";
import {
  Accordion,
  Button,
  Card,
  Alert,
  Container,
  ListGroup,
  Row,
  Col,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import GroupOfItems from "./GroupOfItems";
export default function Storage() {
  return (
    <>
      <Row className="d-flex justify-content-center mb-5 mt-5">
        <Col md="auto" className="d-flex justify-content-center">
          <Button variant="danger">Delete epmty</Button>
        </Col>
        <Col md="auto" className="d-flex justify-content-center">
          <Link to="/add-item">
            <Button variant="primary">Add item</Button>
          </Link>
        </Col>
      </Row>

      <GroupOfItems className="mb-5" />
      <GroupOfItems />
      <GroupOfItems />
      <GroupOfItems />
      <GroupOfItems />
    </>
  );
}
