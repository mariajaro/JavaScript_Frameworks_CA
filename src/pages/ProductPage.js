import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import styled from 'styled-components';

// Styled components
const ProductDetails = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const ProductTitle = styled.h1`
  color: #333;
`;

const ProductDescription = styled.p`
  color: #666;
`;

const ProductPrice = styled.p`
  color: #007bff;
`;

const DiscountedPrice = styled.p`
  color: #ff6347;
`;

const SavePercentage = styled.p`
  color: #ff6347;
`;

const AddToCartButton = styled.button`
  background-color: #9CAF88;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: #819171;
  }
`;

const ReviewsSection = styled.div`
  margin-top: 20px;
`;

const Review = styled.div`
  border-bottom: 1px solid #eee;
  padding: 10px 0;
`;

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`https://v2.api.noroff.dev/online-shop/${id}`);
        if (!response.ok) throw new Error('Product not found.');
        const jsonData = await response.json();
        setProduct(jsonData.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart({ ...product, quantity: 1 });
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>Product not found.</div>;

  const { title, description, price, discountedPrice, image, reviews } = product;
  const discountPercentage = discountedPrice < price ? ((price - discountedPrice) / price) * 100 : 0;

  return (
    <ProductDetails>
      <ProductTitle>{title}</ProductTitle>
      {image && <ProductImage src={image.url} alt={title} />}
      <ProductDescription>{description}</ProductDescription>
      <ProductPrice>Price: ${price.toFixed(2)}</ProductPrice>
      {discountedPrice < price && (
        <>
          <DiscountedPrice>Discounted Price: ${discountedPrice.toFixed(2)}</DiscountedPrice>
          <SavePercentage>Save: {discountPercentage.toFixed(2)}%</SavePercentage>
        </>
      )}
      <AddToCartButton onClick={handleAddToCart}>Add to Cart</AddToCartButton>
      <ReviewsSection>
        {reviews && reviews.length > 0 ? (
          <>
            <h3>Reviews:</h3>
            {reviews.map(review => (
              <Review key={review.id}>
                <strong>{review.username}</strong> rated {review.rating}
                <p>{review.description}</p>
              </Review>
            ))}
          </>
        ) : <p>No reviews yet.</p>}
      </ReviewsSection>
    </ProductDetails>
  );
};

export default ProductPage;
