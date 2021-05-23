import React, { useState, useEffect } from "react";

import { Button, Card, Alert, Table } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { db } from "./../../../firebase";
export default function SingleItem() {
  const [item, setItem] = useState();
  const { itemId, collectionId } = useParams();

  useEffect(() => {
    db.collection(`categories/${collectionId}/${collectionId}`)
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
