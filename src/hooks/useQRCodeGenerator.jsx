import React, { useState } from 'react';
import QRCode from 'qrcode';

export const useQRCodeGenerator = () => {
  const [url, setUrl] = useState('');
  const [qrCode, setQRCode] = useState('');
  const [showInput, setShowInput] = useState(true);

  const generateQRCode = async (url) => {
    try {
      const qrDataUrl = await QRCode.toDataURL(url, {
        width: 200,
        margin: 1,
        color: {
          dark: '#01056F',
          light: '#FFFFFF',
        },
      });
      setQRCode(qrDataUrl);
      setShowInput(false); // Hide input after generating QR code
    } catch (error) {
      console.error(error);
      // Handle any errors, potentially resetting state or showing a message
    }
  };

  const downloadQRCode = () => {
    const element = document.createElement("a");
    element.href = qrCode;
    element.download = "QRCode.png";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const resetQRCode = () => {
    setUrl('');
    setQRCode('');
    setShowInput(true);
  };

  return {
    url,
    setUrl,
    qrCode,
    showInput,
    generateQRCode,
    downloadQRCode,
    resetQRCode,
  };
};


