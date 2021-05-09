import React from "react";
import { ListGroup, Button } from "react-bootstrap";
export default function Item({ itemName }) {
  return (
    <Button className="w-100 mt-2" variant="light">
      {itemName}
    </Button>
  );
}
