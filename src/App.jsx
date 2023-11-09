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
  color: #F5ECE2;
  font-weight: 400;
  margin: 50px 20px;
  gap: 30px;

h1 {
  font-size: 36px;
  font-weight: 900;
  text-align: center;
  margin: 0;
  padding: 0 0 20px 0;
}

.input-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
}

.button-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.qr-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin-top: 20px;
}

.qr-wrapper img {
  border-radius: 10px;
  height: 300px;
  width: 300px;
  padding-bottom: 10px;
}

@media (max-width: 1279px) and (min-width: 744px) {
    h1 {
      font-size: 48px;
    }

  }

@media (min-width: 1280px) {
  h1 {
  font-size: 48px;
  font-weight: 900;
  text-align: center;
  margin: 0;
  padding: 0 0 30px 0;
}

  .button-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
}
}
`;

const Input = styled.input`
  font-family: 'Lexend', sans-serif;
  font-size: 16px;
  border: 1px solid #725AC1;
  border-radius: 5px;
  padding: 5px;
  width: 250px;

  &:focus {
    border-color: 5px solid #8D86C9; /* Change this to the desired color */
  }

  @media (max-width: 1279px) and (min-width: 744px) {
    font-size: 24px;
    width: 350px;
  }

  @media (min-width: 1280px) {
    font-size: 24px;
    width: 400px;
  }
`;

const Button = styled.button`
  background-color: #5ECBF5;
  color: #fff;
  font-weight: 600;
  padding: 10px 20px;
  border: none;
  border-radius: 15px;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background-color:#F5ECE2;
    color: #3D1050;
  }
  @media (max-width: 1279px) and (min-width: 744px) {
    font-size: 24px;
  }

  @media (min-width: 1280px) {
    font-size: 24px;
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

  //Lottie properties
  const options = {
    animationData: qranimation,
    style: {
      height: 300
    },
    loop: true,
    autoplay: true
  }

  // Return the JSX to render the component
  return (
    <AppContainer>
      {isInputVisible ? (
        //Renders the input field and generate button
        <>
          <Lottie
            animationData={options.animationData}
            style={options.style}
            loop={options.loop}
            autoplay={options.autoplay}
          />
          <div className="input-wrapper">
            <h1>QR Code Generator</h1>
            <Input
              type="text"
              ref={inputRef}
              placeholder="e.g. https://google.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <Button onClick={generateQRCode}>Generate QR</Button>
          </div>
        </>
      ) : (
        //Renders the QR code, dowload button and repeat button
        <div className="qr-wrapper">
          <h1>QR Code Generator</h1>
          <img src={qrCode} />
          <div className="button-wrapper">
            <Button onClick={downloadQRCode}>Download</Button>
            <Button onClick={repeatAction}>New QR</Button>
          </div>
        </div>
      )}
    </AppContainer>
  );
};
