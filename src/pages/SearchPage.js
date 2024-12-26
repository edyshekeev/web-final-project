import React, { useState } from 'react';
import api from '../utils/api';

function SearchPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    api.get(`/products?search=${query}`)
      .then(response => setResults(response.data))
      .catch(error => console.error(error));
  };

  return (
    <div className="search-page">
      <h1 className="search-title">Search Page</h1>
      <div className="search-bar">
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search products..."
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">Search</button>
      </div>
      <ul className="search-results">
        {results.map(product => (
          <li key={product.id} className="search-item">{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchPage;