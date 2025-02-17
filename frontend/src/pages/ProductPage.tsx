import React from 'react';
import { useCart } from '../context/CartContext';
import '../css/ProductPage.css'; 


const products = [
  { id: 1, name: 'Tubería PVC', price: 10 },
  { id: 2, name: 'Grifo', price: 15 },
  { id: 3, name: 'Llave de paso', price: 8 },
];

export default function ProductPage() {
  const { addToCart } = useCart();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Productos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="border p-4 rounded-lg shadow-md"
          >
            <h2 className="text-xl">{product.name}</h2>
            <p>${product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
            >
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
