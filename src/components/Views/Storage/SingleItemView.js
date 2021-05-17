import React, { useState, useEffect } from "react";

import { Button, Card, Alert, Table } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { db } from "./../../../firebase";
export default function SingleItemView() {
  const [item, setItem] = useState();
  const { itemId, collectionId } = useParams();
  let rows = [];
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

  if (item) {
    for (let i = 0; i < item.quantity; i++) {
      rows.push(i);
    }
  }

  console.log(rows);
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
                {item && (
                  <tbody>
                    {rows.map((number) => {
                      return (
                        <tr>
                          <td>{number}</td>
                          <td>{item.name}</td>
                          <td className="text-center">avialable</td>
                        </tr>
                      );
                    })}
                  </tbody>
                )}
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
