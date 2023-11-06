import React, { useState } from 'react';
import { useQRCodeGenerator } from './hooks/useQRCodeGenerator';
import styled from 'styled-components';

const ModalBackdrop = styled.div`
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
`;

const App = () => {
  const { url, setUrl, qrCode, showInput, generateQRCode, resetQRCode } = useQRCodeGenerator();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fileName, setFileName] = useState('');

  const [errorMessage, setErrorMessage] = useState('');


  const handleGenerate = (e) => {
    e.preventDefault();
    const validUrlRegex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
  
    if (validUrlRegex.test(url)) {
      generateQRCode(url);
      setErrorMessage(''); // Clear any previous error messages
    } else {
      setErrorMessage("Please enter a valid web address starting with http or https.");
    }
  };
  

  const handleDownload = () => {
    if (!fileName) {
      setIsModalOpen(true);
      return;
    }

    const link = document.createElement('a');
    link.href = qrCode;
    link.download = `${fileName}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Reset after downloading for a new QR code
    resetQRCode();
    setFileName('');
    setIsModalOpen(false);
  };

  const handleReset = () => {
    resetQRCode(); // This will clear the current QR code and show the input again.
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="App">
      <h1>QR Code Generator</h1>
      {showInput && (
        <form onSubmit={handleGenerate}>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter URL here"
            required
          />
          {errorMessage && <div style={{ color: 'red', marginTop: '8px' }}>{errorMessage}</div>}
          <button type="submit">Generate QR Code</button>
        </form>
      )}

      {qrCode && (
        <div>
          <img src={qrCode} alt="Generated QR Code" />
          <button onClick={handleDownload}>Download QR Code</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      )}

      {isModalOpen && (
        <ModalBackdrop>
          <ModalContent>
            <h2>Enter a file name for your QR Code</h2>
            <input
              type="text"
              value={fileName}
              onChange={(e) => setFileName(e.target.value)}
              placeholder="Add a filename here"
            />
            <button onClick={handleDownload}>Download</button>
            <button onClick={closeModal}>Cancel</button>
          </ModalContent>
        </ModalBackdrop>
      )}
    </div>
  );
};

export default App;


