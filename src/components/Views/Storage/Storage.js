import React, { useState, useEffect } from "react";
import { Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import SpinnerLoading from "./../../SpinnerLoading";
import GroupOfItems from "./GroupOfItems";
import { db } from "./../../../firebase";
export default function Storage() {
  const [categories, setCategories] = useState();

  useEffect(() => {
    setTimeout(() => {
      db.collection("categories/6evTSxdfTnrwSOJlXZ0v/items")
        .get()
        .then((snapshot) => {
          setCategories(snapshot.docs);
          console.log(snapshot.docs);
        });
    }, 500);
  }, []);

  return (
    <>
      {categories ? (
        categories.map((category) => {
          return (
            <>
              <Row className="d-flex justify-content-center mb-5 mt-5">
                <Col md="auto" className="d-flex justify-content-center">
                  <Button variant="danger">Delete epmty</Button>
                </Col>
                <Col md="auto" className="d-flex justify-content-center">
                  <Link to="/add-item">
                    <Button variant="primary">Add item</Button>
                  </Link>
                </Col>
              </Row>

              <GroupOfItems className="mb-5" data={category.data()} />
            </>
          );
        })
      ) : (
        <SpinnerLoading />
      )}
    </>
  );
}
