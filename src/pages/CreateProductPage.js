import React, { useState } from 'react';
import '../App.css';

function CreateProductPage() {
  const [form, setForm] = useState({ title: '', price: '', description: '', category: '', image: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    fetch('https://fakestoreapi.com/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
      .then(response => response.json())
      .then(data => alert(`Product created with ID: ${data.id}`));
  };

  return (
    <form onSubmit={handleSubmit} className="create-product-form">
      <h1 className="form-title">Create Product</h1>
      <input
        className="form-input"
        name="title"
        placeholder="Title"
        value={form.title}
        onChange={handleChange}
        required
      />
      <input
        className="form-input"
        name="price"
        placeholder="Price"
        value={form.price}
        onChange={handleChange}
        required
      />
      <textarea
        className="form-textarea"
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
        required
      />
      <input
        className="form-input"
        name="category"
        placeholder="Category"
        value={form.category}
        onChange={handleChange}
        required
      />
      <input
        className="form-input"
        name="image"
        placeholder="Image URL"
        value={form.image}
        onChange={handleChange}
        required
      />
      <button type="submit" className="form-button">Create Product</button>
    </form>
  );
}

export default CreateProductPage;
