import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CreateProductPage from './pages/CreateProductPage';
import EditProductPage from './pages/EditProductPage';
import './App.css';

function App() {
  return (
    <Router>
      <nav className="nav-bar">
        <Link to="/" className="nav-link">Home</Link>
      </nav>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/create" element={<CreateProductPage />} />
          <Route path="/edit/:id" element={<EditProductPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;