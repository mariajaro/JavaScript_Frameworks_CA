import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

// Styled components
const CheckoutContainer = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const CheckoutTitle = styled.h1`
  color: #333;
`;

const CheckoutList = styled.ul`
  list-style: none;
  padding: 0;
`;

const CheckoutItem = styled.li`
  margin: 10px 0;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
`;

const TotalPrice = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
`;

const CheckoutButton = styled.button`
  background-color: #9CAF88;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #819171;
  }
`;

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { cartItems, clearCart } = useCart();
  const total = cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);

  const handleCheckout = () => {
    console.log('Proceeding to checkout...');
    clearCart();
    navigate('/checkout-success');
  };

  return (
    <CheckoutContainer>
      <CheckoutTitle>Checkout</CheckoutTitle>
      <CheckoutList>
        {cartItems.map((item) => (
          <CheckoutItem key={item.id}>
            {item.title} - {item.quantity} x ${item.price.toFixed(2)}
          </CheckoutItem>
        ))}
      </CheckoutList>
      <TotalPrice>Total: ${total.toFixed(2)}</TotalPrice>
      <CheckoutButton onClick={handleCheckout}>Checkout</CheckoutButton>
    </CheckoutContainer>
  );
};

export default CheckoutPage;
