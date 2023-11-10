// App Component Explanation
// The App component serves as a user interface for generating and downloading QR codes, utilizing the custom hook useQRCodeGenerator which encapsulates the logic for QR code generation and management. When rendered, the component displays a title ("Technigo QR Code Generator") and conditionally renders either an input field and a "Generate" button or, a generated QR code image, a "Download" button, and a "Repeat" button, based on the showInput state variable. If showInput is true, users can input a URL and generate a QR code by clicking the "Generate" button. Once generated, the input field and "Generate" button are replaced by the QR code image and additional buttons. The "Download" button triggers a download of the QR code image, and the "Repeat" button resets the UI to allow for generating a new QR code. The url, setUrl, qr, showInput, generateQRCode, downloadQRCode, and repeatAction variables and functions are derived from the useQRCodeGenerator hook, providing the necessary state and actions to manage the QR code generation process.
import { StyledButton, StyledHeading } from './Styles/styles';
import QRCodeImg from "./assets/QR_Code_img.png"
import { useEffect } from 'react';
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

    <div className="grid sm:grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-5">
  {isInputVisible ?
    <img
      src={QRCodeImg}
      alt="Artistic QR code in red and black on a white background"
      className="col-start-5 sm:col-start-2 md:col-start-3 col-span-2"
      style={{ width: '100%' }}
    /> :
    <img src={qr} alt={`QR code for ${url}`} className="col-start-5 sm:col-start-2 md:col-start-3 col-span-2"
      style={{ width: '100%' }} />
  }

  {/* Conditionally render the heading based on screen size */}
  {window.innerWidth > 767 ? (
    <div className="col-start-7 md:col-start-5 col-span-2 flex-col">
      <StyledHeading>QR</StyledHeading>
      <StyledHeading>Code</StyledHeading>
      <StyledHeading>Generator</StyledHeading>
    </div>
  ) : (
    <div className="flex flex-row col-start-1 col-span-4">
      <StyledHeading>QR Code Generator</StyledHeading>
    </div>
  )}

  <div className="sm:col-start-2 sm:col-span-2 md:col-start-3 md:col-span-4">
    {isInputVisible ? (
      <div>
        <p className="sm:col-start-2 sm:col-span-2 md:col-start-3 md:col-span-2">Enter your URL:</p>
        <input
          type="text"
          placeholder="e.g. https://google.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          ref={inputRef}
          onKeyPress={handleKeyPress} // Handle "Enter" key press
        />

        <div>
          <StyledButton onClick={generateQRCode}>Generate</StyledButton>
          <p>or press 'Enter'</p>
        </div>
      </div>
    ) : (
      <div>
        <div>
          <StyledButton onClick={downloadQRCode}>Download</StyledButton>
          <StyledButton onClick={repeatAction}>Repeat</StyledButton>
        </div>
      </div>
    )}
  </div>
</div>
  );
};