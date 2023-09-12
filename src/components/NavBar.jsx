import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import { useState, useContext } from 'react';
import { CartContext } from './CartContext';

export default function NavBar () {
  const [show, setShow] = useState(false);
  const cart = useContext(CartContext);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(cart)
  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="/">Matt's Trading Co.</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/login">Login</Nav.Link>
        <Nav.Link href="/register">Register Here</Nav.Link>
        <Nav.Link href="/cart">My Cart</Nav.Link>
      </Nav>
      <Button onClick={handleShow}>Cart 0 items</Button>
    </Container>
  </Navbar>
  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton >
      <Modal.Title>Shopping Cart</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <h1>This is the modal body.</h1>
    
        {cart.items[0] && cart.items.map((product) =>  (
        
           <div key={product.id}>
          <div>
            {product.id}
          </div>
          <div>
            {product.title}
          </div>
          <div>
            {product.price}
          </div>
          </div>
        
        ))}
    </Modal.Body>
  </Modal>
  </>
  )
}