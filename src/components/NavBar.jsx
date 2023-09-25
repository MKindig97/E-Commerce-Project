import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState, useContext } from "react";
import { CartContext } from "./CartContext";
import CartProduct from "./CartProduct";

export default function NavBar() {
  const [show, setShow] = useState(false);
  const cart = useContext(CartContext);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(cart);

  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container-fluid className="">
          <Nav className="me-auto">
            <Navbar.Brand href="/">Matt's Trading Co.</Navbar.Brand>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/register">Register Here</Nav.Link>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Shopping Cart</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {productsCount > 0 ? (
                  <>
                    <p>Items in your cart: </p>
                    {cart.items.map((currentProduct, idx) => (
                      <CartProduct
                        key={idx}
                        title={currentProduct.title}
                        price={currentProduct.price}
                        id={currentProduct.id}
                        quantity={currentProduct.quantity}
                      ></CartProduct>
                    ))}

                    <h1>Total: ${cart.getTotalCost().toFixed(2)}</h1>

                    <Button variant="success">Purchase items!</Button>
                  </>
                ) : (
                  <h1>There are no items in your cart!</h1>
                )}
              </Modal.Body>
              {/* {cart.items[0] && cart.items.map((product) =>  (
        
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
        
        ))}  */}
            </Modal>
            <Button className="main-cart-btn" onClick={handleShow}>
              Cart ({productsCount}) items
            </Button>
          </Nav>
        </Container-fluid>
      </Navbar>
    </>
  );
}
