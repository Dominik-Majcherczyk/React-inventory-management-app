import React from "react";

import { Button, Card, Alert, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function SingleItemView() {
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Item name</h2>

          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Item</th>
                <th>status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Microlith of Paradise</td>
                <td className="text-center">
                  <Button variant="primary">avialable</Button>{" "}
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Microlith of Paradise</td>
                <td className="text-center">
                  <Button variant="warning">pożyczoned</Button>{" "}
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Microlith of Paradise</td>
                <td className="text-center">
                  <Button variant="danger">rozjebaned</Button>{" "}
                </td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
        <div className="w-100 text-center">
          <Alert variant="light">last changed by: Jan 08.09.2021</Alert>
        </div>
      </Card>
      <div className="w-100 text-center mt-2">
        <Link to="/storage">Cancel</Link>
      </div>
    </>
  );
}
