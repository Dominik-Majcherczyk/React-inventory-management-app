import React from "react";
import { Accordion, Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import Item from "./Item";

export default function GroupOfItems({ data }) {
  return (
    <Accordion defaultActiveKey="1" className="mb-2">
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          {data.name}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <Card>
              <ListGroup variant="flush">
                <Link to="/single-item">
                  <Item />
                </Link>
                <Link to="/single-item">
                  <Item />
                </Link>
                <Link to="/single-item">
                  <Item />
                </Link>
                <Link to="/single-item">
                  <Item />
                </Link>
                <Link to="/single-item">
                  <Item />
                </Link>
                <Link to="/single-item">
                  <Item />
                </Link>
                <Link to="/single-item">
                  <Item />
                </Link>
                <Link to="/single-item">
                  <Item />
                </Link>
                <Link to="/single-item">
                  <Item />
                </Link>
                <Link to="/single-item">
                  <Item />
                </Link>
                <Link to="/single-item">
                  <Item />
                </Link>
              </ListGroup>
            </Card>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}
