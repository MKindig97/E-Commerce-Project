import { useState, useEffect } from "react";
import { fetchAllProducts } from "../API";
import ProductCard from "../components/ProductCard";
import { Form, Row, Col } from "react-bootstrap";

export default function AllProducts() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [term, setTerm] = useState("");
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  fetchAllProducts();
  useEffect(() => {
    async function fetchData() {
      const data = await fetchAllProducts();
      setProducts(data);
      setFilteredProducts(data);
    }
    fetchData();
  }, []);
  function handleChange(e) {
    setTerm(e.target.value);
    setFilteredProducts(
      products.filter((product) => {
        return product.title
          .toLowerCase()
          .includes(e.target.value.toLowerCase());
      })
    );
  }
  function handleSubmit(e) {
    e.preventDefault();
    const newFilteredProducts = filteredProducts.filter((product) => {
      return (
        product.title.toLowerCase().includes(term.toLowerCase()) &&
        (!category || product.category.includes(category)) &&
        product.price >= (minPrice || 0) &&
        (!maxPrice || product.price <= maxPrice)
      );
    });
    setFilteredProducts(newFilteredProducts);
  }
  console.log(filteredProducts);
  const categories = [...new Set(products.map((product) => product.category))];
  return (
    <section className="section sidebar">
      <h2></h2>
      <div>
        <h3>Filter Products</h3>
        <input
          className="search-bar"
          type="text"
          placeholder="Search Products"
          value={term}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <select
          className="form-select"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        >
          <option value="">All Categories</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
        <input
          type="number"
          placeholder="Minimum Price"
          value={minPrice}
          onChange={(e) => {
            setMinPrice(e.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Maximum Price"
          value={maxPrice}
          onChange={(e) => {
            setMaxPrice(e.target.value);
          }}
        />
        <button onClick={handleSubmit}>Filter</button>
      </div>
      <main>
        <Row>
          {filteredProducts.map(
            ({ id, title, price, image, description, index }) => (
              <Col className="mb-4" lg={6} key={index}>
                <ProductCard
                  key={id}
                  id={id}
                  title={title}
                  price={price}
                  image={image}
                  description={description}
                />
              </Col>
            )
          )}
        </Row>
      </main>
    </section>
  );
}
