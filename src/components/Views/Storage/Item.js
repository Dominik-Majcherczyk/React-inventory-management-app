import React, { useState, useEffect } from "react";
import { ListGroup, Button } from "react-bootstrap";
export default function Item({ itemData }) {
  const [status, setStatus] = useState("primary");

  useEffect(() => {
    if (itemData) {
      if (itemData.status == "damaged") {
        setStatus("danger");
      } else if (itemData.status == "borrowed") {
        setStatus("warning");
      } else {
        setStatus("primary");
      }
    }
  }, [itemData]);
  return (
    <Button className="w-100 mt-2" variant="light">
      <container style={{ display: "flex", justifyContent: "space-between" }}>
        <div>{`${itemData.name} / ${itemData.price} / ${itemData.foundation} / amount: ${itemData.quantity}`}</div>
        <div>
          <Button className="ml-5" variant={status}></Button>
        </div>
      </container>
    </Button>
  );
}
