import React from 'react';
import { useCart } from '../context/CartContext';
import '../css/ProductPage.css'; // Asegúrate de que la ruta sea correcta

const products = [
  { id: 1, name: 'Tubería PVC', price: 10 },
  { id: 2, name: 'Grifo', price: 15 },
  { id: 3, name: 'Llave de paso', price: 8 },
];

export default function ProductPage() {
  const { addToCart } = useCart();

  return (
    <div className="product-page">
      <h1>Productos en el almacen</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
