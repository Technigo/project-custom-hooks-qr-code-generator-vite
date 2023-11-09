// App Component Explanation
// The App component serves as a user interface for generating and downloading QR codes, utilizing the custom hook useQRCodeGenerator which encapsulates the logic for QR code generation and management. When rendered, the component displays a title ("Technigo QR Code Generator") and conditionally renders either an input field and a "Generate" button or a generated QR code image, a "Download" button, and a "Repeat" button, based on the showInput state variable. If showInput is true, users can input a URL and generate a QR code by clicking the "Generate" button. Once generated, the input field and "Generate" button are replaced by the QR code image and additional buttons. The "Download" button triggers a download of the QR code image, and the "Repeat" button resets the UI to allow for generating a new QR code. The url, setUrl, qr, showInput, generateQRCode, downloadQRCode, and repeatAction variables and functions are derived from the useQRCodeGenerator hook, providing the necessary state and actions to manage the QR code generation process.
import logo from "./assets/technigo-logo.svg";
// Import the custom hook useQRCodeGenerator
// import { useQRCodeGenerator } from "./hooks/useQRCodeGenerator";

// Define the App component
export const App = () => {
  // Destructure variables, properties and methods from the useQRCodeGenerator hook that you imported above Here :)

  // Return the JSX to render the component
  return (
    <div className="">
      {/* Render the title*/}
      <img className="logo" src={logo} alt="" />
      <h1>QR - testing / app.jsx</h1>
      <p>Start Here</p>
      <useQRCodeGenerator />

      {/* Conditionally render based on wether the user is inputting an URL to generate a QR Code or the user wnats to downaload the generated QR Code from the url input */}
      {/* {yourReactiveVariableThatTogglesTheDownloadQrCcodeOrInputField ? () : ()} */}
    </div>
  );
};

/******** current useQRCodeGenerator implemented in app: *****************/
/*import React, { useState } from 'react';
import QRCode from 'qrcode';

export const App = () => {
  // State variable to store the input URL
  const [url, setUrl] = useState('');

  // State variable to store the generated QR code data URL
  const [qr, setQr] = useState('');

  // State variable to toggle the visibility of the input element - boolean value
  const [showInput, setShowInput] = useState(true);

  // Function to generate a QR code from the input URL
  const generateQRCode = async () => {
    try {
      const qrCodeDataURL = await QRCode.toDataURL(url, {
        width: 500,
        margin: 1,
        color: {
          dark: '#ff69b4',
          light: '#ffffff',
        },
      });
      setQr(qrCodeDataURL);
      setShowInput(false);
    } catch (error) {
      console.error('Error generating QR Code: ', error);
    }
  };

  // Function to download the generated QR code as a PNG file
  const downloadQRCode = () => {
    const getFileName = () => {
      const filename = prompt('Please enter a filename for the QR code:', 'QRCode');
      if (!filename) {
        return getFileName();  // Recursion if filename is empty
      }
      return filename.trim().replace(/[^a-z0-9]/gi, '_').toLowerCase();  // Filesystem-friendly format
    };

    const filename = getFileName() + '.png';
    const anchor = document.createElement('a');
    anchor.href = qr;
    anchor.download = filename;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  // Function to reset the state and allow generating a new QR code
  const repeatAction = () => {
    setUrl('');
    setQr('');
    setShowInput(true);
  };

  return (
    <div>
      <h1>Technigo QR Code Generator</h1>
      {showInput ? (
        <div>
          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter URL"
          />
          <button onClick={generateQRCode}>Generate</button>
        </div>
      ) : (
        <div>
          <img src={qr} alt="Generated QR Code" />
          <button onClick={downloadQRCode}>Download</button>
          <button onClick={repeatAction}>Repeat</button>
        </div>
      )}
    </div>
  );
}

export default App;
*/