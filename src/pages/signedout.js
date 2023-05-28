import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';

const Signedout = () => {
  const navigate = useNavigate();
  const Back = () => {
    navigate('/');
    window.location.reload();
  };
  return (
    <div className="d-flex justify-content-center mt-5">
      <Card className="w-50">
        <Card.Header className="bg-info">
          <Card.Title>Dear User</Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Title>Thank you For shopping with us.</Card.Title>
          <Button onClick={Back}>Go Back</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Signedout;
