import React from "react";
import { ListGroup, Button } from "react-bootstrap";
export default function Item({ itemData }) {
  return (
    <Button className="w-100 mt-2" variant="light">
      {`${itemData.name} / ${itemData.price} / ${itemData.foundation} / amount: ${itemData.quantity}`}
    </Button>
  );
}
