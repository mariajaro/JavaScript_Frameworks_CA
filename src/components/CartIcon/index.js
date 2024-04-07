import React from 'react';
import styled from 'styled-components';
import { useCart } from '../../contexts/CartContext';
import { Link } from 'react-router-dom';

// Styled components
const CartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fa; 
  color: #343a40; 
  padding: 8px;
  border-radius: 50%;
  position: relative;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #e9ecef; 
  }
`;

const CartLink = styled(Link)`
  text-decoration: none;
  color: #343a40; 
  display: flex;
  align-items: center;
`;

const ItemCount = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #819171;
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 0.75rem;
  border: 2px solid #f8f9fa;
`;

const CartIcon = () => {
  const { cartItems } = useCart();
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContainer>
      <CartLink to="/checkout">
        🛒 <ItemCount>{itemCount}</ItemCount> 
      </CartLink>
    </CartContainer>
  );
};

export default CartIcon;
