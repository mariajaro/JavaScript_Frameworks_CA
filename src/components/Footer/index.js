import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  text-align: center; // Center text horizontally
  padding: 1rem 0; // Add some padding above and below the text
  background-color: #f8f9fa; // A light background color for the footer
  color: #6c757d; // A slightly muted text color
  margin-top: auto; // If using a flex or grid layout, this pushes the footer to the bottom
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>© 2024 eCom</p>
    </StyledFooter>
  );
};

export default Footer;

