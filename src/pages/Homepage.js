import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../utils/api';

function Homepage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get('/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="homepage">
      <h1 className="homepage-title">Homepage</h1>
      <ul className="product-list">
        {products.map(product => (
          <li key={product.id} className="product-item">
            <Link to={`/product/${product.id}`} className="product-link">{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Homepage;