// App Component Explanation
// The App component serves as a user interface for generating and downloading QR codes, utilizing the custom hook useQRCodeGenerator which encapsulates the logic for QR code generation and management. When rendered, the component displays a title ("Technigo QR Code Generator") and conditionally renders either an input field and a "Generate" button or a generated QR code image, a "Download" button, and a "Repeat" button, based on the showInput state variable. If showInput is true, users can input a URL and generate a QR code by clicking the "Generate" button. Once generated, the input field and "Generate" button are replaced by the QR code image and additional buttons. The "Download" button triggers a download of the QR code image, and the "Repeat" button resets the UI to allow for generating a new QR code. The url, setUrl, qr, showInput, generateQRCode, downloadQRCode, and repeatAction variables and functions are derived from the useQRCodeGenerator hook, providing the necessary state and actions to manage the QR code generation process.
// Import the custom hook useQRCodeGenerator
import { useQRCodeGenerator } from "./hooks/useQRCodeGenerator";

// Define the App component
export const App = () => {
  // Destructure variables, properties and methods from the useQRCodeGenerator hook that you imported above here :)
  const { 
    url, 
    qrcode, 
    inputVisible, 
    setUrl, 
    generateQRCode, 
    downloadQRCode, 
    repeatAction 
  } = useQRCodeGenerator();

  //Handle input change
  const handleInputChange = (e) => {
    setUrl(e.target.value);
  }

  // Return the JSX to render the component
  return (
    <div className="app">
      <h1>QR Code Generator</h1>
      {/* Conditionally render based on wether the user is inputting an URL to generate a QR Code or the user wants to download the generated QR Code from the url input */}
      {inputVisible ? (
        <div className="generate">
          <input
            type="text"
            placeholder="e.g. https:/google.com"
            value={url}
            onChange={handleInputChange}
          />
          <button onClick={generateQRCode}>Generate</button>
        </div>
      ) : null}

      {qrcode && 
        <div className="download">
          <img src={qrcode} />
          <button onClick={downloadQRCode}>Download</button>
          <button onClick={repeatAction}>Generate New</button>
        </div>
      }
    </div>
  );
};
