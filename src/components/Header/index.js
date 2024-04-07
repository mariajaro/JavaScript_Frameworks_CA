import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import CartIcon from '../CartIcon'; 

const StyledHeader = styled.header`
  background-color: #9CAF88;
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;

  a {
    color: white;
    text-decoration: none;
    margin: 0 1rem;

    &:hover, &.active {
      color: #F1F8E9; 
    }
  }
`;

const StyledCartIcon = styled(CartIcon)`
  color: white;
  &:hover {
    color: #F1F8E9;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <Navigation>
        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : undefined}>Home</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : undefined}>Contact</NavLink>
      </Navigation>
      <StyledCartIcon />
    </StyledHeader>
  );
};

export default Header;




