// Import QRCode library
import QRCode from "qrcode";

// Import the useState hook
import { useState } from 'react';

// Define a custom hook
export const useQRCodeGenerator = () => {
  //  Variables for URL, QR code data, and input
  const [url, setUrl] = useState('');
  const [qr, setQr] = useState('');
  const [showInput, setShowInput] = useState(true);

  // Function to validate URL
  const isValidUrl = (input) => {
    const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
    return urlPattern.test(input);
  };

  // Function to generate a QR code from the URL
  const generateQRCode = async () => {
    try {
      // Validate the URL and show an alert if it's invalid
      if (!url.trim() || !isValidUrl(url)) {
        alert('Please enter a valid URL (http://www.example.com)');
        return;
      }

      // Generate the QR code data URL
      const qrCodeDataUrl = await QRCode.toDataURL(url, {
        width: 500,
        margin: 3,
        color: {
          dark: '#2476dd',
          light: '#fff'
        }
      });

      // Set the generated QR code and hide the input
      setQr(qrCodeDataUrl);
      setShowInput(false);
    } catch (err) {
      console.error(err);
    }
  };

  // Function to download the generated QR as a file
  const downloadQRCode = () => {
    // Function to get file name from the user
    const getFileName = () => {
      let filename = prompt('Please enter a file name', 'QRcode');
      if (!filename) {
        filename = getFileName();
      }
      return filename.replace(/[^a-z0-9]/gi, '_').toLowerCase();
    };

    // Create filename and download link
    const filename = `${getFileName()}.png`;
    const link = document.createElement('a');
    link.href = qr;
    link.download = filename;

    // Click the link and remove it from the document
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Function to reset the state
  const repeatAction = () => {
    setUrl('');
    setQr('');
    setShowInput(true);
  };

  // Return the state variables and functions
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
