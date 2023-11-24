import React from 'react';
import { useQRCodeGenerator } from './hooks/useQRCodeGenerator';

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
      <h1>QR Code Generator</h1>
      {showInput && (
        <div className="input-container">
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
          <button onClick={downloadQRCode}>Download QR Code</button>
          <button onClick={repeatAction}>Restart</button>
        </div>
      )}
    </div>
  );
};

export default App;


