import React from 'react';
import { useCart } from '../context/CartContext';
import '../css/CartPage.css'; 


const CartPage: React.FC = () => {
  const { cart, removeFromCart, getTotal } = useCart();

  return (
    <div className="cart-container">
      <h1>Tu Carrito de Compras</h1>

      {cart.length === 0 ? (
        <p className="empty-cart">¡Tu carrito está vacío!</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((product) => (
              <div key={product.id} className="cart-item">
                <img
                  src={`https://via.placeholder.com/100?text=${product.name}`}
                  alt={product.name}
                  className="cart-item-image"
                />
                <div className="cart-item-info">
                  <h3>{product.name}</h3>
                  <p>Precio: ${product.price}</p>
                  <button
                    onClick={() => removeFromCart(product.id)}
                    className="remove-btn"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <p>Total: ${getTotal()}</p>
            <button className="checkout-btn">Proceder a la compra</button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
