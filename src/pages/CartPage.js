import React from 'react';
import { useCart } from '../contexts/CartContext';

const CartPage = () => {
  const { cartItems } = useCart(); 

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h1>Cart</h1>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              {item.title} - {item.quantity} x ${item.price.toFixed(2)}
              <span> = ${(item.price * item.quantity).toFixed(2)}</span>
            </li>
          ))}
          <li>Total: ${totalPrice.toFixed(2)}</li>
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartPage;


