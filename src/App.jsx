// App Component Explanation
// The App component serves as a user interface for generating and downloading QR codes, utilizing the custom hook useQRCodeGenerator which encapsulates the logic for QR code generation and management. When rendered, the component displays a title ("Technigo QR Code Generator") and conditionally renders either an input field and a "Generate" button or a generated QR code image, a "Download" button, and a "Repeat" button, based on the showInput state variable. If showInput is true, users can input a URL and generate a QR code by clicking the "Generate" button. Once generated, the input field and "Generate" button are replaced by the QR code image and additional buttons. The "Download" button triggers a download of the QR code image, and the "Repeat" button resets the UI to allow for generating a new QR code. The url, setUrl, qr, showInput, generateQRCode, downloadQRCode, and repeatAction variables and functions are derived from the useQRCodeGenerator hook, providing the necessary state and actions to manage the QR code generation process.
import { Footer } from "./components/Footer";
//import logo from "./assets/technigo-logo.svg";
import { useQRCodeGenerator } from "./hooks/useQRCodeGenerator"; // Import the custom hook useQRCodeGenerator
import { LottieQR } from "./components/LottieQR";
import styled from "styled-components";

const StyledApp = styled.div`
  margin: 0 auto 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  //justify-content: center;
  min-height: 100vh;
  background-color: #f8f8f8;
  padding: 20px;

  h1 {
    color: #42121d;
    margin: 40px 0;
  }

  input {
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin: 40px 10px 10px;
    max-width: 300px;
  }

  button {
    background-color: #965862;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    margin: 10px;
  }

  button:hover {
    background-color: #af7881;
  }

  img.generated-qr {
    /*display: block;
  width: 100%;
  max-width: 480px;
  margin: 2rem auto;
  */
    margin-top: 20px;
    max-width: 300px;
    border: 3px solid #ccc;
    border-radius: 4px;
  }

  img.logo {
    border: none;
    max-width: 200px;
    margin: 40px 0;
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
      {/* Render the title */}
      {/* <img className="logo" src={logo} alt="" /> */}
      <h1>QR Code Generator</h1>

      {/* Conditionally render based on wether the user is inputting an URL to generate a QR Code or the user wnats to downaload the generated QR Code from the url input */}
      {/* {yourReactiveVariableThatTogglesTheDownloadQrCcodeOrInputField ? () : ()} */}
      {showInput === true ? (
        <div>
          <LottieQR />
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
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        </div>
      ) : (
        <div>
          <img className="generated-qr" src={qr} />
          {/* <a href={qr} download="qrcode.png">
            Download
          </a> */}
          <button onClick={downloadQRCode}>Download your QR code</button>
          <button onClick={repeatAction}>Get a new QR code</button>
        </div>
      )}
      <Footer />
    </StyledApp>
  );
};
