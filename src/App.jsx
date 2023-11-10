// App Component Explanation
// The App component serves as a user interface for generating and downloading QR codes, utilizing the custom hook useQRCodeGenerator which encapsulates the logic for QR code generation and management. When rendered, the component displays a title ("Technigo QR Code Generator") and conditionally renders either an input field and a "Generate" button or, a generated QR code image, a "Download" button, and a "Repeat" button, based on the showInput state variable. If showInput is true, users can input a URL and generate a QR code by clicking the "Generate" button. Once generated, the input field and "Generate" button are replaced by the QR code image and additional buttons. The "Download" button triggers a download of the QR code image, and the "Repeat" button resets the UI to allow for generating a new QR code. The url, setUrl, qr, showInput, generateQRCode, downloadQRCode, and repeatAction variables and functions are derived from the useQRCodeGenerator hook, providing the necessary state and actions to manage the QR code generation process.
import styled from 'styled-components';
import QRCodeImg from "./assets/QR_Code_img.png"
import { useEffect } from 'react';
import { useQRCodeGenerator } from "./hooks/useQRCodeGenerator";

const QRArtisticImage = styled.img`
width: 200px;
height: 200px;

@media (min-width: 768px) {
  width: 300px;
  height: 300px;
}

@media (min-width: 1024px) {
  width: 300px;
  height: 300px;
}
`;

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
    inputRef
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
      <div className="flex">
        <div className="flex-col items-start">
          <h1 className="text-3xl font-bold">QR</h1>
          <h1 className="text-3xl font-bold">Code</h1>
          <h1 className="text-3xl font-bold">Generator</h1>
        </div>
        <div>
          {isInputVisible ? (
            <QRArtisticImage
              src={QRCodeImg}
              alt="Artistic QR code in red and black on a white background"
            />
          ) : (
            <img src={qr} alt={`QR code for ${url}`} />
          )}
        </div>
      </div>
      {isInputVisible ? (
        <div>
          <div>
            <p>Enter your URL:</p>
            <input
              type="text"
              placeholder="e.g. https://google.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              ref={inputRef}
              onKeyPress={handleKeyPress} // Handle "Enter" key press
            />
          </div>
          <div>
            <button onClick={generateQRCode}>Generate</button>
            <p>or press 'Enter'</p>
          </div>
        </div>
      ) : (
        <div>
          <button onClick={downloadQRCode}>Download</button>
          <button onClick={repeatAction}>Repeat</button>
        </div>
      )}
    </div>
  );
};