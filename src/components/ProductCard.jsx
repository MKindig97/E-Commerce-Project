import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import { useContext } from "react";
import Button from "react-bootstrap/esm/Button";
import { Form, Row, Col } from "react-bootstrap";

export default function ProductCard({ id, title, price, image, description }) {
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(id);
  console.log(cart.items);
  return (
    <div className="product-card">
      <h2>{title}</h2>
      <p>Item price: ${price}</p>
      <img className="product-photo" src={image} alt={title} />
      <p>{description}</p>
      <Link className="link-button" to={`/products/${id}`}>
        View Item Details
      </Link>
      {productQuantity > 0 ? (
        <>
          <Form as={Row}>
            <Form.Label column="true" sm="6">
              In Cart: {productQuantity}
            </Form.Label>
            <Col sm="6">
              <Button
                sm="6"
                onClick={() => cart.addOneToCart(id, title, price)}
                className="mx-2"
              >
                +
              </Button>
              <Button
                sm="6"
                onClick={() => cart.removeOneFromCart(id, title, price)}
                className="mx-2"
              >
                -
              </Button>
            </Col>
          </Form>
          <Button
            variant="danger"
            onClick={() => cart.deleteFromCart(id, title, price)}
            className="my-2"
          >
            Remove from cart
          </Button>
        </>
      ) : (
        <Button
          className="cart-button"
          variant="primary"
          onClick={() => cart.addOneToCart(id, title, price)}
        >
          Add To Cart
        </Button>
      )}
    </div>
  );
}
