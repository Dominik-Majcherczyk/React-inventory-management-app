import React from "react";
import {
  Accordion,
  Button,
  Card,
  Alert,
  Container,
  ListGroup,
} from "react-bootstrap";
import Item from "./Item";

export default function GroupOfItems() {
  return (
    <Accordion defaultActiveKey="0">
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          legendary items
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <Card>
              <ListGroup variant="flush">
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
              </ListGroup>
            </Card>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}
