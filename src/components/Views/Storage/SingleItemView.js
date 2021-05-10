import React, { useState, useEffect } from "react";

import { Button, Card, Alert, Table } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { db } from "./../../../firebase";
export default function SingleItemView() {
  const [item, setItem] = useState();
  const { itemId, collectionId } = useParams();
  useEffect(() => {
    db.collection("categories")
      .doc(collectionId)
      .collection("items")
      .doc(itemId)
      .get()
      .then((doc) => {
        setItem(doc.data());
      });
  }, []);

  return (
    <>
      {item && (
        <>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">{item.name}</h2>

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
                      <Button variant="warning">passed away</Button>{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Microlith of Paradise</td>
                    <Button variant="danger">damaged</Button>{" "}
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
      )}
    </>
  );
}
