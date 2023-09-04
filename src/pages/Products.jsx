import { useState, useEffect } from "react";
import { fetchAllProducts } from "../API";
import ProductCard from "../components/ProductCard";

export default function AllProducts() {
  const [products, setProducts] = useState([]);
  fetchAllProducts();
  useEffect(() => {
    async function fetchData() {
      const data = await fetchAllProducts();
      setProducts(data);
    }
    fetchData();
  }, []);
  return (
    <section>
      <h1>Our Products</h1>
      <main>
      {products.map(({ id, title, price, image, description }) => (
       <ProductCard
        key={id}
        id={id}
        title={title}
        price={price}
        image={image}
        description={description}
       />
      ))}
      </main>
    </section>
  );
}
