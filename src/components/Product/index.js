import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Styled components
const ProductCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 1rem;
  margin: 1rem;
  width: calc(100% - 2rem);
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);

  img {
    max-width: 100%;
    height: auto;
    border-radius: 4px;
  }

  h3, p {
    margin: 0.5rem 0;
  }
`;

const ButtonLink = styled(Link)`
  display: inline-block;
  background-color: #9CAF88;
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  text-decoration: none;
  text-align: center;
  transition: background-color 0.2s;

  &:hover {
    background-color: #819171;
  }
`;

const Product = ({ product }) => {
  const { id, title, description, price, discountedPrice, image } = product;

  return (
    <ProductCard>
      <img src={image.url} alt={image.alt || title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Price: ${price}</p>
      {discountedPrice && <p>Discounted Price: ${discountedPrice}</p>}
      <ButtonLink to={`/product/${id}`}>View product</ButtonLink>
    </ProductCard>
  );
};

export default Product;

