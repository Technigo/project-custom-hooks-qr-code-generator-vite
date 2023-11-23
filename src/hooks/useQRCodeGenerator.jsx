import { useState } from 'react';
import QRCode from 'qrcode';

export const useQRCodeGenerator = () => {
  // State to manage the input URL
  const [url, setUrl] = useState('');

  // State to manage the generated QR code
  const [qr, setQr] = useState('');

  // State to toggle input visibility
  const [showInput, setShowInput] = useState(true);

  // Function to generate the QR code based on the input URL
  const generateQRCode = (inputUrl) => {
    QRCode.toDataURL(inputUrl, { width: 200 })
      .then((generatedQR) => {
        setQr(generatedQR);
        setShowInput(false); // Hide the input field after generating the QR code
      })
      .catch((error) => {
        console.error('Error generating QR code:', error);
        // Handle error if necessary
      });
  };

  // Function to download the generated QR code as an image
  const downloadQRCode = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = qr;
    downloadLink.download = 'qrcode.png';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  // Function to reset the state for generating a new QR code
  const repeatAction = () => {
    setUrl('');
    setQr('');
    setShowInput(true); // Show the input field again
  };

  return {
    url,
    setUrl,
    qr,
    showInput,
    generateQRCode,
    downloadQRCode,
    repeatAction,
  };
};
