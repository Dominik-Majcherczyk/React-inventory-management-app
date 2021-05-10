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
      db.collection("categories")
        .get()
        .then((snapshot) => {
          setCategories(snapshot.docs);
        });
    }, 500);
  }, []);

  return (
    <>
      {categories ? (
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
          {categories.map((category) => {
            return (
              <GroupOfItems
                key={category.id}
                className="mb-5"
                categoryId={category.id}
                categoryData={category.data()}
              />
            );
          })}
        </>
      ) : (
        <SpinnerLoading />
      )}
    </>
  );
}
