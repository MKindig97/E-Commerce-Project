import { Link } from 'react-router-dom'

export default function ProductCard({ id, title, price, image, description }) {
  return (
  <div className="product-card">
          <h2>{title}</h2>
          <p>Item price: {price}</p>
          <img className="product-photo" src={image} alt={title} />
          <p>{description}</p>
          <Link className="link-button" to={`/products/${id}`}>View Item Details</Link>
        </div>
  )  
}