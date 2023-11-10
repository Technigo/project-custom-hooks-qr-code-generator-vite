// styles.js
import styled from 'styled-components';

// Style - static QR image
// export const QRArtisticImage = styled.img`
//   width: 200px;
//   height: 200px;

//   @media (min-width: 768px) {
//     width: 300px;
//     height: 300px;
//   }

//   @media (min-width: 1024px) {
//     width: 300px;
//     height: 300px;
//   }
// `;

// Style - buttons
export const StyledButton = styled.button`
  padding: 8px 16px;
  background-color: #4a90e2; // Change this to your desired color
  color: #fff;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 7px;

  &:hover {
    background-color: #3c7bd9; // Change this to your desired hover color
  }
`;

export const StyledHeading = styled.h1`
  font-size: 32px;
  font-weight: bold;

  @media (min-width: 767px) {
    font-size: 32px;
    text-align:left;
  }
`;
