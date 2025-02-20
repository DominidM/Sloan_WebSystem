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
          <Link to="/login" className="nav-button">My Profile</Link>
          <Link to="/carrito" className="cart-button">🛒 Cart</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <button className="arrow left">&larr;</button>
        <div className="hero-banner">
          <h2>¡Bienvenido a SLOAN!</h2>
          <p>Descubre los mejores productos de gasfitería con la mejor calidad.</p>
          <Link to="/productos" className="shop-now">Ver Productos</Link>
        </div>
        <button className="arrow right">&rarr;</button>
      </section>

          {/* Productos Destacados */}
          <section className="featured-section">
        <h2 className="section-title">Productos Destacados</h2>
        <div className="product-container">
          <div className="product-placeholder"></div>
          <div className="product-placeholder"></div>
          <div className="product-placeholder"></div>
          <div className="product-placeholder"></div>
          <div className="product-placeholder"></div>
        </div>
      </section>


      {/* Ruleta de Marcas */}
      <section className="brands-section">
        <h2 className="section-title">Nuestras Marcas</h2>
        <div className="brands-container">
          <div className="brand-placeholder"></div>
          <div className="brand-placeholder"></div>
          <div className="brand-placeholder"></div>
          <div className="brand-placeholder"></div>
        </div>
      </section>


      {/* Información de la Empresa */}
      <section className="company-info">
        <h3>Sobre Nosotros</h3>
        <p>Somos una empresa dedicada a la venta de productos de gasfitería de alta calidad.</p>
        <div className="company-contact">
          <p>📍 Dirección: Av. Central 123, Ciudad</p>
          <p>📞 Teléfono: +123 456 789</p>
          <p>📧 Email: contacto@sloan.com</p>
        </div>
      </section>
    </div>
  );
}
