import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductCard({ data = {} }) {
  return (
    <Card>
      <Card.Img variant="top" src={data.imageUrl} />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>{data.price}</Card.Text>
        {data?.sizes?.length > 0 ? (
          <Button variant="primary">View Options</Button>
        ) : (
          <Button variant="primary">Add To Cart</Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
