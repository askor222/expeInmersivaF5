import React from 'react'
import styled from 'styled-components';

const Botones = () => {
    return (
      <a href="/RegisterPage"><StyledButton type="submit" >Registrate</StyledButton></a> 
      );
}

const StyledButton = styled.button`
  background-color: #4a2fa3ed;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 12px 24px;
  cursor: pointer;
  font-size: 1.5rem;
  transition: background-color 0.3s;
  top: auto;
  z-index: 100;
  position: relative;
  height: 60px;
  margin: 20px;
  margin-top: 100%;

  &:hover {
    background-color: #4F59CF;
  }
  @media screen and (max-width: 750px) {
    margin-top: 110px;
    }
`;
export default Botones