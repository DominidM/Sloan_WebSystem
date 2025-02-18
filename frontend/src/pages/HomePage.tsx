import React from 'react'; // Si estás usando JSX

import { Link } from 'react-router-dom';
import '../css/HomePage.css'; // Asegúrate de que la ruta sea correcta

export default function HomePage() {
  return (
    <div className="home-page">
      <div className="hero-section">
        <h1 className="hero-title">Bienvenido a Sloan Gasfitería</h1>
        <p className="hero-subtitle">Compra productos de gasfitería de alta calidad para tu hogar</p>
      </div>

      <div className="buttons-container">
        <Link to="/productos" className="home-button">
          Ver Productos
        </Link>
        <Link to="/carrito" className="home-button">
          Ver Carrito
        </Link>
        <Link to="/login" className="home-button">
          Iniciar sesión / Registrarse
        </Link>
      </div>
    </div>
  );
}
