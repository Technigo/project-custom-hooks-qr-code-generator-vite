// App Component Explanation
// The App component serves as a user interface for generating and downloading QR codes, utilizing the custom hook useQRCodeGenerator which encapsulates the logic for QR code generation and management. When rendered, the component displays a title ("Technigo QR Code Generator") and conditionally renders either an input field and a "Generate" button or a generated QR code image, a "Download" button, and a "Repeat" button, based on the showInput state variable. If showInput is true, users can input a URL and generate a QR code by clicking the "Generate" button. Once generated, the input field and "Generate" button are replaced by the QR code image and additional buttons. The "Download" button triggers a download of the QR code image, and the "Repeat" button resets the UI to allow for generating a new QR code. The url, setUrl, qr, showInput, generateQRCode, downloadQRCode, and repeatAction variables and functions are derived from the useQRCodeGenerator hook, providing the necessary state and actions to manage the QR code generation process.

// Import the custom hook useQRCodeGenerator
import { useQRCodeGenerator } from "./hooks/useQRCodeGenerator";
import { useState, useEffect } from 'react';


// Define the App component
export const App = () => {
  // Destructure variables, properties and methods from the useQRCodeGenerator hook that you imported above here :)
  const { url, setUrl, qr, showInput, generateQRCode, downloadQRCode, repeatAction } = useQRCodeGenerator();

  const [isSpinning, setIsSpinning] = useState(false);

  const handleGenerateClick = () => {
    setIsSpinning(true); // Start the spin
    setTimeout(() => {
      generateQRCode(); // This will generate the QR code and change state to hide input
    }, 1000); // Adjust to the total duration of your spin animation
  };

  useEffect(() => {
    if (isSpinning) {
      const timer = setTimeout(() => {
        setIsSpinning(false);
      }, 1000); // This should match the duration of the spin animation
  
      return () => clearTimeout(timer);
    }
  }, [isSpinning]);

  // Return the JSX to render the component
  return (
    <div className="app">
      <h1>QR Code Generator</h1>
      
      <div className={isSpinning ? 'spinning' : ''}>
      {showInput ? (
        // If showing input, display the input field and generate button
        <div className='input-wrapper'>
          <input 
            value={url} 
            onChange={(e) => setUrl(e.target.value)} 
            placeholder="Enter URL" 
          />
          <button onClick={handleGenerateClick}>Generate</button>
        </div>
      ) : (
        // If showing QR code, display the QR code and the buttons
        <div>
          <img src={qr} alt="Generated QR Code" />
          <div className="button-wrapper">
            <button onClick={downloadQRCode}>Download</button>
            <button onClick={repeatAction}>Restart</button>
          </div>
        </div>
      )}
    </div>
  </div>
  );
};


