// styles.js
import styled from 'styled-components';

// Style - buttons
export const StyledButton = styled.button`
  padding: 8px 16px;
  background-color: #150404;
  color: #E1DFF2;
  border: none;
  border-radius: 0.25em;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  justify-content: center;
  gap: 8px;
  font-family: 'Roboto', sans-serif;
  width: 50%;

  &:hover {
    background-color: #6b1414;
  }
`;

export const StyledHeading = styled.h1`
    font-family: 'Gugi', sans-serif;
    margin-top: 30%;  
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    color: #0C090D;

  @media (min-width: 767px) {
    font-size: 32px;
    text-align:right;
  }
`;
