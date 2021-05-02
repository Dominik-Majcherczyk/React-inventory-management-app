import React from "react";
import {
  Accordion,
  Button,
  Card,
  Alert,
  Container,
  ListGroup,
} from "react-bootstrap";
import GroupOfItems from "./GroupOfItems";
export default function Storage() {
  return (
    <Container>
      <GroupOfItems />
      <GroupOfItems />
      <GroupOfItems />
      <GroupOfItems />
      <GroupOfItems />
    </Container>
  );
}
