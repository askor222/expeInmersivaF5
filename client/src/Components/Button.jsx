// BurguerButton.js
import React from 'react';
import styled from 'styled-components';


const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 24px;
`;

const Line = styled.div`
  width: 24px;
  height: 4px;
  background-color: #000;
  transition: transform 0.3s, opacity 0.3s;

  &:first-child {
    transform: ${({ clicked }) => (clicked ? 'rotate(-45deg) translate(-5px, 6px)' : 'translate(0, 0)')};
  }

  &:nth-child(2) {
    opacity: ${({ clicked }) => (clicked ? 0 : 1)};
  }

  &:last-child {
    transform: ${({ clicked }) => (clicked ? 'rotate(45deg) translate(-5px, -6px)' : 'translate(0, 0)')};
  }
`;

const BurguerButton = ({ clicked, handleClick }) => {
  return (
    <StyledButton onClick={handleClick}>
      <Line clicked={clicked} />
      <Line clicked={clicked} />
      <Line clicked={clicked} />
    </StyledButton>
  );
}

export default BurguerButton;

