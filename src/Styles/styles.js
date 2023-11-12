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
  width: 25%;

  &:hover {
    background-color: #6b1414;
  }
  @media (min-width: 667px) {
    font-size: 20px;
  }
`;

export const StyledHeading = styled.h1`
    font-family: 'Gugi', sans-serif;
    margin-top: 30%;  
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    color: #0C090D;

    @media (min-width: 667px) and (max-width: 1024px) {
    margin: 0;
    font-size: 56px;
    text-align:right;
  }

    @media (min-width: 1025px) {
      margin: 0;
      font-size: 72px;
      text-align:right;
    }
`;
