import { useQRCodeGenerator } from "./hooks/useQRCodeGenerator";
import animationData from './Animation-QR.json';
import Lottie from 'lottie-react';


export const App = () => {

  const {
    url,
    setUrl,
    qr,
    showInput,
    errorMessage,
    setErrorMessage,
    generateQRCode,
    downloadQRCode,
    repeatAction,
  } = useQRCodeGenerator();

  return (
    <div className="wrapper">
      <nav className="navbar">
        <h1>QR CODE GENERATOR</h1>
        <p>Create Your Custom QR Code: Seamless Integration on Any Background!</p>
      </nav>
      <div className="mainPageWrapper">
        {showInput ? (
          <>
            <div className="contentWrapper">
              <Lottie
                animationData={animationData}
                loop
                autoplay
                className="lottie-animation"
              />
            </div>
            <input
              type="text"
              value={url}
              onChange={(e) => {
                setUrl(e.target.value);
                if (errorMessage) setErrorMessage('');
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  generateQRCode();
                }
              }}
            />
            {errorMessage && <p style={{ color: '#800000', marginTop: '5px' }}>{errorMessage}</p>}
            <button onClick={generateQRCode} aria-label="Generate QR Code">
              Generate
            </button>
            <div className="foot">
              <p>2023 by Elba Cacan | All Rights Reserved</p>
            </div>
          </>
        ) : (
          <>
            <div className="contentWrapper">
              <img src={qr} alt="QR Code" className="qr-image" /> </div>
            <button onClick={downloadQRCode} aria-label="Download QR Code">
              Download
            </button>
            <button onClick={repeatAction} aria-label="Repeat Action">
              Repeat
            </button>
          </>
        )}
      </div>
    </div>);
};