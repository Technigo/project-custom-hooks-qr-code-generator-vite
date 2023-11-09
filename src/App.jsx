import React, { useState } from 'react';
import { useQRCodeGenerator } from './hooks/useQRCodeGenerator';
import styled from 'styled-components';
import Lottie from 'lottie-react';
import animationData from './assets/QR.json';

const AppContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh; /* 100% of the viewport height */
text-align: center; /* Ensures that text inside the container is centered */
`;


const TitleContainer = styled.div`
  position: center; /* Set to relative to act as a reference for the absolute positioned Lottie container */
  display: inline-block; /* Ensures the container doesn't take full width */
`;

const StyledH1 = styled.h1`
  color: #01056F;
  font-size: 2.5rem;
  text-align: center;
  position: relative; /* Needed for z-index stacking context */
  z-index: 2; /* Ensures the text is above the Lottie animation */
`;

const StyledH2 = styled.h2`
  color: #01056F;
  font-size: 2rem;
`;

const LottieContainer = styled.div`
  margin-bottom: -30px; // Or however much space you want between the animation and the title
  width: 250px;
  height: 250px;
  border: outset;
  border-width:1px;
 color: #01056F;
`;

const QRCodeImage = styled.img`
  display: block;
  margin: auto; /* This will center the image horizontally */
  margin: 20px;
`;


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

const ErrorMessage = styled.div`
  color: red;
  margin-top: 8px;
  font-size: 14px;
`;

const StyledButton = styled.button`
  background-color: #01056F;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 18px;
  font-weight: bold; /* Makes the text bold */
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
  border-radius: 30px;
`;

const App = () => {
  const { url, setUrl, qrCode, showInput, generateQRCode, resetQRCode } = useQRCodeGenerator();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fileName, setFileName] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const handleGenerate = (e) => {
    e.preventDefault();
    const validUrlRegex = /^(https?:\/\/(www\.)?|www\.)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i;


  
    if (validUrlRegex.test(url)) {
      generateQRCode(url);
      setErrorMessage(''); // Clear any previous error messages
    } else {
      setErrorMessage("Please enter a valid web address starting with http, https or www.");
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
    <AppContainer>
          <LottieContainer>
          <Lottie
         loop
        autoplay
          animationData={animationData}
       />
</LottieContainer>
      <TitleContainer>
        <StyledH1>QR Code Generator</StyledH1>
      </TitleContainer>
        {showInput && (
          <form onSubmit={handleGenerate}>
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="E.g. www.linkedin.com"
              required
            />
            <StyledButton type="submit">Generate QR Code</StyledButton>
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
          </form>
        )}

{qrCode && (
  <>
    <QRCodeImage src={qrCode} alt="Generated QR Code" />
    <div>
      <StyledButton onClick={handleDownload}>Download QR Code</StyledButton>
      <StyledButton onClick={handleReset}>Reset</StyledButton>
    </div>
  </>
)}

{isModalOpen && (
  <ModalBackdrop>
    <ModalContent>
      <StyledH2>Enter a file name for your QR Code</StyledH2>
      <input
        type="text"
        value={fileName}
        onChange={(e) => setFileName(e.target.value)}
        placeholder="E.g. Linkedin_qrcode"
      />
      <StyledButton onClick={handleDownload}>Download</StyledButton>
      <StyledButton onClick={closeModal}>Cancel</StyledButton>
    </ModalContent>
  </ModalBackdrop>
)}
    </AppContainer>
  );
};

export default App;


