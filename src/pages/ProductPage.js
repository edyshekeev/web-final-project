import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import '../App.css';

function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data));
  }, [id]);

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      fetch(`https://fakestoreapi.com/products/${id}`, {
        method: 'DELETE',
      })
        .then(response => response.json())
        .then(() => {
          alert('Product deleted successfully.');
          navigate('/');
        });
    }
  };

  if (!product) return <div className="loading">Loading...</div>;

  return (
    <div className="product-page">
      <h1 className="product-title">{product.title}</h1>
      <div className="product-details">
        <img src={product.image} alt={product.title} className="product-image" />
        <div className="product-info">
          <p className="product-description">{product.description}</p>
          <p className="product-price">Price: ${product.price}</p>
          <p className="product-category">Category: {product.category}</p>
        </div>
      </div>
      <div className="product-actions">
        <Link to={`/edit/${id}`} className="edit-link">Edit Product</Link>
        <button onClick={handleDelete} className="delete-button">Delete Product</button>
      </div>
    </div>
  );
}

export default ProductPage;
