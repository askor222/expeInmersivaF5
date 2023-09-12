import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #4a2fa3ed;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 12px 24px;
  cursor: pointer;
  font-size: 1.5rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #4F59CF;
  }
`;

const Button = () => {
  return (
    <StyledButton type="submit">Login</StyledButton>
  );
}

export default Button;