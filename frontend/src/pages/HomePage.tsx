import { useState, useEffect  } from 'react';
import { Link } from 'react-router-dom';
import { Moon, Sun } from "lucide-react";
import { useLanguage } from "../context/LanguageProvider";
import LanguageSelector from "../components/LanguageSelector";
import '../css/HomePage.css';

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");
  const { language } = useLanguage();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <div className="home-page">
      <header className="navbar">
        <h1 className="logo">SLOAN</h1>
        <nav className="nav-links">        
          <button onClick={() => setDarkMode(!darkMode)} className="nav-button flex items-center">
            {darkMode ? <Moon className="text-yellow-300" /> : <Sun className="text-gray-900" />}
          </button>

          <Link to="/productos" className="nav-button">{language === "es" ? "Tienda" : "Shop"}</Link>
          <Link to="/history" className="nav-button">{language === "es" ? "Historial" : "History"}</Link>  
          <Link to="/login" className="nav-button">{language === "es" ? "Mi Perfil" : "My Profile"}</Link>
          <Link to="/carrito" className="cart-button">🛒 {language === "es" ? "Carrito" : "Cart"}</Link>
        </nav>
        <LanguageSelector />
      </header>

       {/* Contenido principal */}
       <main className="main-content">
        <section className="hero-section">
          <button className="arrow left">&larr;</button>
          <div className="hero-banner">
            <h2>{language === "es" ? "¡Bienvenido a SLOAN!" : "Welcome to SLOAN!"}</h2>
            <p>{language === "es" ? "Descubre los mejores productos de gasfitería con la mejor calidad." : "Discover the best plumbing products with the highest quality."}</p>
            <Link to="/productos" className="shop-now">{language === "es" ? "Ver Productos" : "View Products"}</Link>
          </div>
          <button className="arrow right">&rarr;</button>
        </section>

        <section className="featured-section">
          <h2 className="section-title">{language === "es" ? "Productos Destacados" : "Featured Products"}</h2>
          <div className="product-container">
            <div className="product-placeholder"></div>
            <div className="product-placeholder"></div>
            <div className="product-placeholder"></div>
            <div className="product-placeholder"></div>
            <div className="product-placeholder"></div>
          </div>
        </section>

        <section className="brands-section">
          <h2 className="section-title">{language === "es" ? "Nuestras Marcas" : "Our Brands"}</h2>
          <div className="brands-container">
            <div className="brand-placeholder"></div>
            <div className="brand-placeholder"></div>
            <div className="brand-placeholder"></div>
            <div className="brand-placeholder"></div>
          </div>
        </section>

        <section className="company-info">
          <h3>{language === "es" ? "Sobre Nosotros" : "About Us"}</h3>
          <p>{language === "es" ? "Somos una empresa dedicada a la venta de productos de gasfitería de alta calidad." : "We are a company dedicated to selling high-quality plumbing products."}</p>
          <div className="company-contact">
            <p>📍 {language === "es" ? "Dirección: Av. Central 123, Ciudad" : "Address: Av. Central 123, City"}</p>
            <p>📞 {language === "es" ? "Teléfono: +123 456 789" : "Phone: +123 456 789"}</p>
            <p>📧 Email: contacto@sloan.com</p>
          </div>
        </section>
      </main>


      <section className="extra-info">
        <p>
          © 2025 {language === "es" ? "Hecho por " : "Made by"}  
          <a href="https://www.linkedin.com/in/dominid-muñoz-eslava-50b68828a/" target="_blank" rel="noopener noreferrer">
            <strong>DOMINID</strong>
          </a>  
          &nbsp;|&nbsp;
          <a href="https://www.linkedin.com/in/cristopher-manuel-mendoza-vicente-a218b728b/" target="_blank" rel="noopener noreferrer">
            <strong>CRISTOPHER</strong>
          </a>
        </p>
        <div className="payment-icons">
          <img src="/images/visa.png" alt="VISA" />
          <img src="/images/mastercard.png" alt="MasterCard" />
          <img src="/images/diners.png" alt="Diners Club" />
          <img src="/images/amex.png" alt="American Express" />
        </div>
        <button className="scroll-to-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          ⬆
        </button>
      </section>

    </div>
  );
}
