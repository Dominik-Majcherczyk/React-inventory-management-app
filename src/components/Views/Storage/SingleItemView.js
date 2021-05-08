import React from "react";

import {
  Accordion,
  Button,
  Card,
  Alert,
  Container,
  ListGroup,
  Table,
} from "react-bootstrap";

export default function SingleItemView() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Larry the Bird</td>
        </tr>
      </tbody>
    </Table>
  );
}
