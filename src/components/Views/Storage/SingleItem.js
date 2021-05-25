import React, { useState, useEffect } from "react";

import { Button, Card, Alert, Table, ListGroup } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { db } from "./../../../firebase";
export default function SingleItem() {
  const [item, setItem] = useState();
  const { itemId, collectionId } = useParams();
  const [status, setStatus] = useState("primary");

  useEffect(() => {
    db.collection(`categories/${collectionId}/${collectionId}`)
      .doc(itemId)
      .get()
      .then((doc) => {
        setItem(doc.data());
      });
  }, [status]);

  useEffect(() => {
    if (item) {
      if (item.status == "available") {
        setStatus("primary");
      } else if (item.status == "damaged") {
        setStatus("danger");
      } else {
        setStatus("warning");
      }
    }
  }, [item]);

  useEffect(() => {
    db.collection(`categories/${collectionId}/${collectionId}`)
      .doc(itemId)
      .update({ status: status })
      .then(() => console.log("git gut"));
  }, [status]);

  const changeStatusHandler = () => {
    if (status == "primary") {
      setStatus("warning");
    } else if (item.status == "warning") {
      setStatus("danger");
    } else if (item.status == "danger") {
      setStatus("primary");
    }
  };

  return (
    <>
      {item && (
        <>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">{item.name}</h2>
              <Card.Header>details:</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>{`price: ${item.price} $`}</ListGroup.Item>
                <ListGroup.Item>{`quantity: ${item.quantity}`}</ListGroup.Item>
                <ListGroup.Item>{`foundation: "${item.foundation}"`}</ListGroup.Item>
              </ListGroup>
              <Card.Header>description:</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>{`${item.description}`}</ListGroup.Item>
              </ListGroup>
              <Card.Header>status:</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Button
                    className="w-100"
                    variant={status}
                    onClick={() => changeStatusHandler()}
                  >
                    {item.status}
                  </Button>{" "}
                </ListGroup.Item>
              </ListGroup>
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
