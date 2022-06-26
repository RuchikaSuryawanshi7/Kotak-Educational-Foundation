import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';

function Addteacher() {
  return (
    <div>
        <Container>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
        <Button variant="primary">Primary</Button>

        </Container>
      </Navbar>
    </Container>


    <div className='mx-auto ,p-auto'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>


    </div>
  )
}

export default Addteacher