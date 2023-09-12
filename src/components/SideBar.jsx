import { useState, useEffect } from "react";

const Sidebar = ({ onFilter }) => {
  const [products, setProducts] = useState([]);
  const [term, setTerm] = useState('');
  const [category, setCategory] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => setProducts(data))
    .catch(err => console.error('Error:',err));
  },[]);
  const updateFilter = () => {
    const filteredProducts = products.filter(product => product.title.toLowerCase()
    .includes(term.toLowerCase))&&
    (!category || product.category.includes(category))&&
    product.price >= (minPrice || 0)&&
    (!maxPrice || product.price <= maxPrice).sort((a, b)=> a.price - b.price);
    onFilter(filteredProducts);
  };
  const categories = [...new Set(products.map(product => product.category))];
  return (
    <div>
      <h3>Filter Products</h3>
      <input 
      type='text'
      placeholder='Search Products'
      value={term}
      onChange={e => {
        setTerm(e.target.value);
        updateFilter();
      }}
      />
      <select
      value={category}
      onChange={e => {
        setCategory(e.target.value);
        updateFilter();
      }}
      />
      <option value="">All Categories</option>
      {categories.map((category, index) => (
        <option key={index} value={category}
        >
        {category}
        </option>
      ))}
      <select/>
      <input 
      type='number'
      placeholder='Minimum Price'
      value={minPrice}
      onChange={e => {
        setMinPrice(e.target.value);
        updateFilter();
      }}
      />
      <input
      type='number'
      placeholder='Maximum Price'
      value={maxPrice}
      onChange={e => {
        setMaxPrice(e.target.value);
        updateFilter();
      }}
      />
    </div>
  )
}
export default Sidebar