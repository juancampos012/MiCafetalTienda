import React from 'react';
import { Container, Card } from 'react-bootstrap';

const ItemListContainer = ({ greeting }) => {
  return (
    <Container className="mt-4">
      <Card style={{backgroundColor: '#70D8D0', position: 'fixed', right: 0, width: '100%', top: 70}}>
        <Card.Body>
          <Card.Title>{greeting}</Card.Title>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ItemListContainer;
