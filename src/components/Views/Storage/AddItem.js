import React from "react";
import {
  Accordion,
  Button,
  Card,
  Alert,
  Container,
  Form,
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
export default function AddItem() {
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Add item</h2>

          <Form>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Table name:</Form.Label>
              <Form.Control as="select">
                <option>swords</option>
                <option>wands</option>
                <option>shields</option>
                <option>bows</option>
                <option>add new table</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="itemName">
              <Form.Label>Item name:</Form.Label>
              <Form.Control type="text" placeholder="Item name" />
            </Form.Group>
            <Form.Group controlId="price">
              <Form.Label>Price:</Form.Label>
              <Form.Control type="text" placeholder="0.00" />
            </Form.Group>

            <Form.Group controlId="quantity">
              <Form.Label>Quantity:</Form.Label>
              <Form.Control type="text" placeholder="0" />
            </Form.Group>
            <Form.Group controlId="foundation">
              <Form.Label>Foundation name:</Form.Label>
              <Form.Control as="select">
                <option>Guardians of the World</option>
                <option>Desired Gods</option>
                <option>Wretched Dynasty</option>
                <option>Whitecrawlers</option>
                <option>Deceivers of the Faithful</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="itemDescription">
              <Form.Label>Item Description:</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button className="w-100" type="submit">
              Add item
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Link to="/storage">Cancel</Link>
      </div>
    </>
  );
}
