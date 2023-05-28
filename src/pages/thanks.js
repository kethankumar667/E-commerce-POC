import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

const Thanks = () => {
  const navigate = useNavigate();
  let cartData = useSelector((state) => state.products.cartData);

  const Back = () => {
    navigate('/');
  };
  return (
    <div>
      <div className="d-flex justify-content-center mt-5">
        <Card className="w-50">
          <Card.Body>
            <Card.Title>Thank you For shopping with us.</Card.Title>
            <Button onClick={Back}>Go Back</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Thanks;
