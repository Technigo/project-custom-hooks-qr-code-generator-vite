// App Component Explanation
// The App component serves as a user interface for generating and downloading QR codes, utilizing the custom hook useQRCodeGenerator which encapsulates the logic for QR code generation and management. When rendered, the component displays a title ("Technigo QR Code Generator") and conditionally renders either an input field and a "Generate" button or a generated QR code image, a "Download" button, and a "Repeat" button, based on the showInput state variable. If showInput is true, users can input a URL and generate a QR code by clicking the "Generate" button. Once generated, the input field and "Generate" button are replaced by the QR code image and additional buttons. The "Download" button triggers a download of the QR code image, and the "Repeat" button resets the UI to allow for generating a new QR code. The url, setUrl, qr, showInput, generateQRCode, downloadQRCode, and repeatAction variables and functions are derived from the useQRCodeGenerator hook, providing the necessary state and actions to manage the QR code generation process.
// Import the custom hook useQRCodeGenerator
import { useQRCodeGenerator } from "./hooks/useQRCodeGenerator";
import styled from 'styled-components';
import Lottie from "lottie-react";
import qranimation from "./assets/qranimation.json"

const AppContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Lexend', sans-serif;
  color: #725AC1;
  font-weight: 400;
  margin: 50px 20px;
  gap: 30px;

h1 {
  font-size: 36px;
  font-weight: 900;
  text-align: center;
  margin: 20px 0 0 0;
  padding: 0 0 30px 0;
}

.button-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

img {
  border-radius: 10px;
}
`;

const Input = styled.input`
  font-family: 'Lexend', sans-serif;
  font-size: 16px;
  border: 1px solid #725AC1;
  border-radius: 5px;
  padding: 5px;
  width: 300px;
`;

const Button = styled.button`
  background-color:#725AC1;
  color: #fff;
  font-weight: 600;
  padding: 10px 20px;
  border: none;
  border-radius: 15px;
  font-size: 18px;
  cursor: pointer;
  margin: 10px;

  :hover {
    background-color: #3321A6;
  }
`;


// Define the App component
export const App = () => {
  // Destructure variables, properties and methods from the useQRCodeGenerator hook 
  const {
    url,
    setUrl,
    qrCode,
    inputRef,
    isInputVisible,
    generateQRCode,
    downloadQRCode,
    repeatAction
  } = useQRCodeGenerator();

  // Return the JSX to render the component
  return (
    <AppContainer>
      {/* Render the title */}
      <h1>QR Code Generator</h1>
      {/* Conditionall rendering of elements */}
      {isInputVisible ? (
        //Renders the input field and generate button
        <>
          <Lottie animationData={qranimation} />
          <Input
            type="text"
            ref={inputRef}
            placeholder="e.g. https://google.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <Button onClick={generateQRCode}>Generate QR</Button>
        </>
      ) : (
        //Renders the QR code, dowload button and repeat button
        <>
          <img src={qrCode} />
          <div className="button-wrapper">
            <Button onClick={downloadQRCode}>Download</Button>
            <Button onClick={repeatAction}>New QR</Button>
          </div>
        </>
      )}
    </AppContainer>
  );
};
