import { Link } from 'react-router-dom'
import { CartContext } from './CartContext'
import { useContext } from 'react'
import Button from 'react-bootstrap/esm/Button';

export default function ProductCard({ id, title, price, image, description }) {
  const cart = useContext(CartContext);
  const getProductQuantity = cart.getProductQuantity(id);
  console.log(cart.items)
  return (
  <div className="product-card">
          <h2>{title}</h2>
          <p>Item price: {price}</p>
          <img className="product-photo" src={image} alt={title} />
          <p>{description}</p>
          <Link className="link-button" to={`/products/${id}`}>View Item Details</Link>
          <Button variant="primary" onClick={() => cart.addOneToCart(id,title,price)} >Add To Cart</Button>
        </div>
  )  
}