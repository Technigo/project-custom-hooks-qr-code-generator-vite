import React from 'react';
import { useQRCodeGenerator } from './hooks/useQRCodeGenerator';
import logo from './assets/technigo-logo.svg';

const App = () => {
  const {
    url,
    setUrl,
    qr,
    showInput,
    generateQRCode,
    downloadQRCode,
    repeatAction,
  } = useQRCodeGenerator();

  const handleGenerateClick = () => {
    generateQRCode(url);
  };

  return (
    <div className="app">
      <img className="logo" src={logo} alt="Technigo Logo" />
      <h1>Technigo QR Code Generator</h1>
      {showInput && (
        <div>
          <input
            type="text"
            placeholder="Enter URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button onClick={handleGenerateClick}>Generate QR Code</button>
        </div>
      )}
      {qr && (
        <div>
          <img src={qr} alt="QR Code" />
          <a href={qr} download="qrcode.png" onClick={downloadQRCode}>
            Download QR Code
          </a>
          <button onClick={repeatAction}>Generate New QR Code</button>
        </div>
      )}
    </div>
  );
};

export default App;


