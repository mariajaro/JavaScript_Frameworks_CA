import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Styled components
const SuccessContainer = styled.div`
  text-align: center;
  padding: 2rem;
  max-width: 600px;
  margin: 40px auto;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
`;

const SuccessTitle = styled.h1`
  color: #9CAF88;
`;

const SuccessMessage = styled.p`
  font-size: 1.1rem;
  margin: 20px 0;
`;

const BackToStoreLink = styled(Link)`
  display: inline-block;
  background-color: #9CAF88;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.2s;

  &:hover {
    background-color: #819171;
  }
`;

const CheckoutSuccessPage = () => {
  return (
    <SuccessContainer>
      <SuccessTitle>Order Successful!</SuccessTitle>
      <SuccessMessage>Your order has been placed successfully.</SuccessMessage>
      <BackToStoreLink to="/">Go back to the store</BackToStoreLink>
    </SuccessContainer>
  );
};

export default CheckoutSuccessPage;
