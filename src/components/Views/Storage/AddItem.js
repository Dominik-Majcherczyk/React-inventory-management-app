import React, { useState, useRef, useEffect } from "react";
import { Button, Card, Form, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { db } from "./../../../firebase";

export default function AddItem() {
  const history = useHistory();
  const [error, setError] = useState(undefined);
  const [tableName, setTableName] = useState("swords");
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState();
  const [foundation, setFoundation] = useState("Desired Gods");
  const [description, setDescription] = useState();
  const [categories, setCategories] = useState();
  const [foundations, setFoundations] = useState();
  useEffect(() => {
    db.collection("categories")
      .get()
      .then((snapshot) => {
        setCategories(snapshot.docs);
        setTableName(snapshot.docs[0].id);
      });

    db.collection("foundations")
      .get()
      .then((snapshot) => {
        setFoundations(snapshot.docs);
        setFoundation(snapshot.docs[0].id);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      db.collection("categories")
        .doc(tableName)
        .collection(tableName)
        .add({
          name,
          price,
          description,
          quantity,
          foundation,
        })
        .then(() => {
          console.log("item added");
          history.push("/storage");
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
          setError(error);
        });
    } catch {
      setError("failed to add file");
    }
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Add item</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Table name:</Form.Label>
              <Form.Control
                as="select"
                value={tableName}
                onChange={(e) => setTableName(e.target.value)}
              >
                {categories &&
                  categories.map((category) => <option>{category.id}</option>)}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="itemName">
              <Form.Label>Item name:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Item name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="price">
              <Form.Label>Price:</Form.Label>
              <Form.Control
                type="number"
                placeholder="0.00"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="quantity">
              <Form.Label>Quantity:</Form.Label>
              <Form.Control
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="foundation">
              <Form.Label>Foundation name:</Form.Label>
              <Form.Control
                as="select"
                value={foundation}
                onChange={(e) => setFoundation(e.target.value)}
              >
                {foundations &&
                  foundations.map((foundation) => (
                    <option>{foundation.id}</option>
                  ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="itemDescription">
              <Form.Label>Item Description:</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
            <Button
              className="w-100"
              type="submit"
              onClick={(e) => handleSubmit(e)}
            >
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
