import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import { CartProvider } from "./context/CartContext";
import { LanguageProvider } from "./context/LanguageProvider";

function App() {
  return (
    <CartProvider>
      <LanguageProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/productos" element={<ProductPage />} />
            <Route path="/carrito" element={<CartPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </Router>
      </LanguageProvider>
    </CartProvider>
  );
}

export default App;
