import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../utils/api';

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    api.get(`/products/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!product) return <p className="loading">Loading...</p>;

  return (
    <div className="product-page">
      <h1 className="product-title">{product.name}</h1>
      <p className="product-description">{product.description}</p>
      <p className="product-price">Price: ${product.price}</p>
      <img src={product.image} alt={product.name} className="product-image" />
    </div>
  );
}

export default ProductPage;