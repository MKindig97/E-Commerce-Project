import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { fetchProductById } from "../API";

export default function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState({})
  useEffect(() => {
    async function fetchData() {
      const data = await fetchProductById(id);
      setProduct(data);
    }
    fetchData();
  }, [id])
  const { title, price, image, description, category } = product;
  return (
    <>
    <div className="product-card">
    <h2>{title}</h2>
    <p>Item price: {price}</p>
    <img className="product-photo" src={image} alt={title} />
    <p>{description}</p>
    <p>Category: {category}</p>
    {/*<p>Rating: {rating.rate}</p>*/}
  </div>
  </>
  )
}

