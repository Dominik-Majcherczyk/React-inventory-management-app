import React, { useState, useEffect } from "react";
import { Accordion, Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import Item from "./Item";
import { db } from "./../../../firebase";

export default function GroupOfItems({ categoryId, categoryData }) {
  const [items, setItems] = useState();

  useEffect(() => {
    db.collection(`categories/${categoryId}/items`)
      .get()
      .then((snapshot) => {
        setItems(snapshot.docs);
      });
  }, []);

  return (
    <Accordion defaultActiveKey="1" className="mb-2">
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          {categoryData.name}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            {items &&
              items.map((item) => {
                return (
                  <Link
                    to={`/storage/${categoryId}/${item.id}`}
                    class="text-decoration-none  text-reset"
                  >
                    <Item itemName={item.data().name} />
                  </Link>
                );
              })}
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}
