import Button from "react-bootstrap/Button";
import { CartContext } from "./CartContext";
import { useContext } from "react";


export default function CartProduct(props) {
  const cart = useContext(CartContext);
  const {id, quantity, title, price} = props;

  return(
    <>
      <h3 key={id}>{title}</h3>
      <p>{quantity} total </p>
      <p>${(quantity * price).toFixed(2)}</p>
      <Button size="sm" onClick={() => cart.deleteFromCart(id)}>Remove</Button>
      <hr></hr>
    </>
  )
}