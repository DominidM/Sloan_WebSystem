import React from 'react';
import { Link } from 'react-router-dom';
import '../css/HomePage.css';

export default function HomePage() {
  return (
    <div className="home-page">
      {/* Navbar */}
      <header className="navbar">
        <h1 className="logo">SLOAN</h1>
        <nav className="nav-links">
          <Link to="/language" className="nav-button">Language</Link>
          <Link to="/productos" className="nav-button">Shop</Link>
          <Link to="/history" className="nav-button">History</Link>  
          <Link to="/login" className="nav-button">My profile</Link>
          <Link to="/carrito" className="cart-button">Cart</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="hero-section">
        <button className="arrow left">&larr;</button>
        <div className="hero-banner"></div>
        <button className="arrow right">&rarr;</button>
      </div>

      {/* Productos destacados */}
      <div className="featured-products">
        <div className="product-placeholder"></div>
        <div className="product-placeholder"></div>
        <div className="product-placeholder"></div>
        <div className="product-placeholder"></div>
      </div>

      
      {/* Ruleta de Marcas*/}
      <div className="featured-products">
        <div className="product-placeholder"></div>
        <div className="product-placeholder"></div>
        <div className="product-placeholder"></div>
        <div className="product-placeholder"></div>
      </div>

    </div>
  );
}
