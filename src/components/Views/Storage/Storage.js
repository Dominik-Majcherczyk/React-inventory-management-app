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
import GroupOfItems from "./GroupOfItems";
export default function Storage() {
  return (
    <Container>
      <Row>
        <Col className="justify-content-center">
          <Button variant="danger">Delete epmty</Button>{" "}
        </Col>
        <Col className="justify-content-center">
          <Button variant="primary">Add item</Button>{" "}
        </Col>
      </Row>
      <GroupOfItems />
      <GroupOfItems />
      <GroupOfItems />
      <GroupOfItems />
      <GroupOfItems />
    </Container>
  );
}
