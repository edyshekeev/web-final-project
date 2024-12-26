import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="home-page">
      <h1 className="home-title">Product List</h1>
      <Link to="/create" className="create-link">Create New Product</Link>
      <ul className="product-list">
        {products.map(product => (
          <li key={product.id} className="product-item">
            <Link to={`/product/${product.id}`} className="product-link">
              {product.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
