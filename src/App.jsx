import { Footer } from "./components/Footer";
import { useQRCodeGenerator } from "./hooks/useQRCodeGenerator";
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
    margin-bottom: 20px;
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

  @media (min-width: 1024px) {
    h1 {
      font-size: 52px;
      margin: 30px 0 20px 0;
    }
  }
`;

const InputContainer = styled.div`
  input {
    padding: 14px 10px;
    font-size: 18px;
    border: 1px solid #ccc;
    border-radius: 4px;
    max-width: 300px;

    &::placeholder {
      font-family: "Josefin Sans", sans-serif;
    }
  }
`;

const AnimatedQR = styled.div`
  margin: 20px;

  @media (min-width: 667px) {
    margin: 50px;
  }
`;

const QRContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

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
  margin: 20px;

  @media (min-width: 667px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export const App = () => {
  // Destructure variables, properties and methods from the useQRCodeGenerator hook
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

  return (
    <StyledApp>
      <h1>QR Code Generator</h1>
      {/* Conditionally render based on wether the user is inputting an URL to generate a QR Code or the user wnats to downaload the generated QR Code from the URL input */}
      {showInput === true ? (
        <InputContainer>
          <AnimatedQR>
            <LottieQR />
          </AnimatedQR>
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
          <img className="generated-qr" src={qr} alt="Generated QR code" />
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
