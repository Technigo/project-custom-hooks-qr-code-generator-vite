// App Component Explanation
// The App component serves as a user interface for generating and downloading QR codes, utilizing the custom hook useQRCodeGenerator which encapsulates the logic for QR code generation and management. When rendered, the component displays a title ("Technigo QR Code Generator") and conditionally renders either an input field and a "Generate" button or, a generated QR code image, a "Download" button, and a "Repeat" button, based on the showInput state variable. If showInput is true, users can input a URL and generate a QR code by clicking the "Generate" button. Once generated, the input field and "Generate" button are replaced by the QR code image and additional buttons. The "Download" button triggers a download of the QR code image, and the "Repeat" button resets the UI to allow for generating a new QR code. The url, setUrl, qr, showInput, generateQRCode, downloadQRCode, and repeatAction variables and functions are derived from the useQRCodeGenerator hook, providing the necessary state and actions to manage the QR code generation process.
import React, { useEffect } from 'react';
import { useQRCodeGenerator } from "./hooks/useQRCodeGenerator";

export const App = () => {
  // Destructure variables and functions from the custom hook
  const {
    url,
    setUrl,
    qr,
    isInputVisible,
    generateQRCode,
    downloadQRCode,
    repeatAction,
    inputRef,
  } = useQRCodeGenerator();

  // Use useEffect to focus on the input element when the component mounts
  useEffect(() => {
    if (inputRef.current && isInputVisible) {
      inputRef.current.focus();
    }
  }, [isInputVisible, inputRef]);

  // Handle "Enter" key press in the input field
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      // Prevent the default form submission
      event.preventDefault();
      generateQRCode();
    }
  };

  return (
    <div>
      <h1>QR Code Generator</h1>
      {isInputVisible ? (
        <div>
          <input
            type="text"
            placeholder="e.g. https://google.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            ref={inputRef}
            onKeyPress={handleKeyPress} // Handle "Enter" key press
          />
          <p>Generate your QR code by pressing 'Enter' or clicking the 'Generate' button.</p>
          <button onClick={generateQRCode}>Generate</button>
        </div>
      ) : (
        <div>
          <img src={qr} alt={`QR code for ${url}`}/>
          <button onClick={downloadQRCode}>Download</button>
          <button onClick={repeatAction}>Repeat</button>
        </div>
      )}
    </div>
  );
};