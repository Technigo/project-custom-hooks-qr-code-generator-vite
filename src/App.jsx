// App Component Explanation
// The App component serves as a user interface for generating and downloading QR codes, utilizing the custom hook useQRCodeGenerator which encapsulates the logic for QR code generation and management. When rendered, the component displays a title ("Technigo QR Code Generator") and conditionally renders either an input field and a "Generate" button or a generated QR code image, a "Download" button, and a "Repeat" button, based on the showInput state variable. If showInput is true, users can input a URL and generate a QR code by clicking the "Generate" button. Once generated, the input field and "Generate" button are replaced by the QR code image and additional buttons. The "Download" button triggers a download of the QR code image, and the "Repeat" button resets the UI to allow for generating a new QR code. The url, setUrl, qr, showInput, generateQRCode, downloadQRCode, and repeatAction variables and functions are derived from the useQRCodeGenerator hook, providing the necessary state and actions to manage the QR code generation process.
import { Footer } from "./components/Footer";
import { useQRCodeGenerator } from "./hooks/useQRCodeGenerator"; // Import the custom hook useQRCodeGenerator
import { LottieQR } from "./components/LottieQR";
import { LottieConfetti } from "./components/LottieConfetti";
import { LottieDownload } from "./components/LottieDownload.jsx";
import styled from "styled-components";

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #f8f8f8;
  padding: 20px;

  h1 {
    color: #42121d;
    font-size: 28px;
    margin: 50px 0;
    text-align: center;
  }

  button {
    background-color: #965862;
    color: #fff;
    padding: 16px 20px;
    border: none;
    border-radius: 4px;
    font-size: 18px;
    cursor: pointer;
  }

  button:hover {
    background-color: #af7881;
  }

  @media (min-width: 667px) {
    h1 {
      font-size: 45px;
    }
  }

  @media (min-width: 667px) {
    h1 {
      font-size: 52px;
    }
  }
`;

const InputContainer = styled.div`
  input {
    padding: 14px 10px;
    font-size: 18px;
    border: 1px solid #ccc;
    border-radius: 4px;
    //margin: 40px 10px 10px;
    max-width: 300px;

    &::placeholder {
      font-family: "Josefin Sans", sans-serif;
    }
  }
`;

const QRContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  /* svg {
    display: flex;
    justify-content: center;
  } */

  img.generated-qr {
    width: 200px;
    border: 3px solid #ccc;
    border-radius: 4px;

    @media (min-width: 667px) {
      width: 250px;
      margin: 30px;
    }

    @media (min-width: 1024px) {
      margin: 50px;
    }
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 50px;

  /* #download-button {
    background-color: #fff;
  } */

  @media (min-width: 667px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

// Define the App component
export const App = () => {
  // Destructure variables, properties and methods from the useQRCodeGenerator hook that you imported above here :)
  const {
    url,
    setUrl,
    qr,
    errorMessage,
    setErrorMessage,
    showInput,
    generateQRCode,
    downloadQRCode,
    repeatAction,
  } = useQRCodeGenerator();

  // Return the JSX to render the component
  return (
    <StyledApp>
      <h1>QR Code Generator</h1>

      {/* Conditionally render based on wether the user is inputting an URL to generate a QR Code or the user wnats to downaload the generated QR Code from the url input */}
      {showInput === true ? (
        <InputContainer>
          <LottieQR />
          <ButtonWrapper>
            <input
              type="text"
              required
              placeholder="e.g. https://www.technigo.io"
              value={url}
              onChange={(e) => {
                setUrl(e.target.value);
                setErrorMessage(""); // Clear the error message when the input changes.
              }}
            />
            <button onClick={generateQRCode}>Generate QR code</button>
          </ButtonWrapper>
          {errorMessage && (
            <p style={{ color: "#42121d", fontWeight: "600" }}>
              {errorMessage}
            </p>
          )}
        </InputContainer>
      ) : (
        <QRContainer>
          <LottieConfetti />
          <img className="generated-qr" src={qr} />
          <ButtonWrapper>
            <LottieDownload onClick={downloadQRCode}>Download</LottieDownload>
            <button onClick={repeatAction}>Get a new QR code</button>
          </ButtonWrapper>
        </QRContainer>
      )}
      <Footer />
    </StyledApp>
  );
};
