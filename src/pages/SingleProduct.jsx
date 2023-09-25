import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../API";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../components/CartContext";
import Button from "react-bootstrap/esm/Button";
import { Form, Row, Col } from "react-bootstrap";

export default function SingleProduct() {
  const cart = useContext(CartContext);
  const { id } = useParams({});
  let productQuantity = cart.getProductQuantity(id);
  const [product, setProduct] = useState({});
  useEffect(() => {
    async function fetchData() {
      const data = await fetchProductById(id);
      setProduct(data);
    }
    fetchData();
  }, [id]);
  const { title, price, image, description, category } = product;

  return (
    <>
      <div className="container-fluid">
        <Link className="btn btn-outline-primary mt-2 pl-2" to="/">
          Back to All Products
        </Link>
        <div className="product-card">
          <h2>{title}</h2>
          <p>Item price: ${price}</p>
          <img className="product-photo" src={image} alt={title} />
          <p>{description}</p>
          <section>
            <p>Category: {category}</p>
            {/*<p>Rating: {rating.rate}</p>*/}
            {console.log(productQuantity)}
          </section>
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
                    onClick={() => cart.removeOneFromCart(id)}
                    className="mx-2"
                  >
                    -
                  </Button>
                </Col>
              </Form>
              <Button
                variant="danger"
                onClick={() => cart.deleteFromCart(id)}
                className="my-2"
              >
                Remove from cart
              </Button>
            </>
          ) : (
            <>
              <Button
                className="cart-button"
                variant="primary"
                onClick={() => cart.addOneToCart(id, title, price)}
              >
                Add To Cart
              </Button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
