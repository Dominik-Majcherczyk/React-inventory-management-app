import React from "react";
import { Spinner } from "react-bootstrap";
export default function SpinnerLoading() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <Spinner animation="border" variant="primary" />
    </div>
  );
}
