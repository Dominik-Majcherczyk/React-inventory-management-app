import React from "react";
import {
  Accordion,
  Button,
  Card,
  Alert,
  Container,
  ListGroup,
} from "react-bootstrap";
export default function Storage() {
  return (
    <Container>
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            Swords V
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <Card>
                <ListGroup variant="flush">
                  <ListGroup.Item>Microlith of Paradise</ListGroup.Item>
                  <ListGroup.Item>Monolith of Wisdom</ListGroup.Item>
                  <ListGroup.Item>Paralyzing Cylinder</ListGroup.Item>
                  <ListGroup.Item>Thaumaturgy Statuette</ListGroup.Item>
                  <ListGroup.Item>Staff of the Void</ListGroup.Item>
                  <ListGroup.Item>Microlith of Paradise</ListGroup.Item>
                  <ListGroup.Item>Monolith of Wisdom</ListGroup.Item>
                  <ListGroup.Item>Paralyzing Cylinder</ListGroup.Item>
                  <ListGroup.Item>Thaumaturgy Statuette</ListGroup.Item>
                  <ListGroup.Item>Staff of the Void</ListGroup.Item>
                  <ListGroup.Item>Microlith of Paradise</ListGroup.Item>
                  <ListGroup.Item>Monolith of Wisdom</ListGroup.Item>
                  <ListGroup.Item>Paralyzing Cylinder</ListGroup.Item>
                  <ListGroup.Item>Thaumaturgy Statuette</ListGroup.Item>
                  <ListGroup.Item>Staff of the Void</ListGroup.Item>
                  <ListGroup.Item>Microlith of Paradise</ListGroup.Item>
                  <ListGroup.Item>Monolith of Wisdom</ListGroup.Item>
                  <ListGroup.Item>Paralyzing Cylinder</ListGroup.Item>
                  <ListGroup.Item>Thaumaturgy Statuette</ListGroup.Item>
                  <ListGroup.Item>Staff of the Void</ListGroup.Item>
                  <ListGroup.Item>Microlith of Paradise</ListGroup.Item>
                  <ListGroup.Item>Monolith of Wisdom</ListGroup.Item>
                  <ListGroup.Item>Paralyzing Cylinder</ListGroup.Item>
                  <ListGroup.Item>Thaumaturgy Statuette</ListGroup.Item>
                  <ListGroup.Item>Staff of the Void</ListGroup.Item>
                  <ListGroup.Item>Microlith of Paradise</ListGroup.Item>
                  <ListGroup.Item>Monolith of Wisdom</ListGroup.Item>
                  <ListGroup.Item>Paralyzing Cylinder</ListGroup.Item>
                  <ListGroup.Item>Thaumaturgy Statuette</ListGroup.Item>
                  <ListGroup.Item>Staff of the Void</ListGroup.Item>
                </ListGroup>
              </Card>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            Shields V
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <Card>
                <ListGroup variant="flush">
                  <ListGroup.Item>Pillar of Worship</ListGroup.Item>
                  <ListGroup.Item>Absorbing Cube</ListGroup.Item>
                  <ListGroup.Item>Necklace of Transformation</ListGroup.Item>
                  <ListGroup.Item>Metamorphosis Horn</ListGroup.Item>
                  <ListGroup.Item>Tome of Restoration</ListGroup.Item>
                </ListGroup>
              </Card>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </Container>
  );
}
