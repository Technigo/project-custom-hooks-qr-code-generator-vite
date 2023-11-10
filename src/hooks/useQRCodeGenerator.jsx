// useQRCodeGenerator.jsx

import { useState } from 'react';
import QRCode from 'qrcode';

export const useQRCodeGenerator = () => {
  // STATE VARIABLES
  const [url, setUrl] = useState('');
  const [qr, setQr] = useState('');
  const [showInput, setShowInput] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  // FUNCTION TO CHECK IF THE INPUT IS A VALID URL
  const isValidUrl = (input) => {
    try {
      new URL(input);
      return true;
    } catch (error) {
      return false;
    }
  };

  // FUNCTION TO GENERATE A QR CODE FROM THE INPUT URL
  const generateQRCode = async () => {
    try {
      // Check if the URL is empty
      if (!url.trim()) {
        setErrorMessage('Please enter a valid URL.');
        return;
      }

      // Check if the entered text is a valid URL
      if (!isValidUrl(url)) {
        setErrorMessage('Please enter a valid URL.');
        return;
      }

      // Generate QR code data URL
      const qrCodeDataURL = await QRCode.toDataURL(url, {
        width: 200,
        margin: 1,
        color: {
          dark: 'hotpink',
          light: '#ffffff',
        },
      });

      console.log('Generated QR Code Data URL:', qrCodeDataURL);


      // Update state variables with the generated QR code data URL
      setQr(qrCodeDataURL);
      setShowInput(false);
      setErrorMessage(''); // Clear the error message if the URL is valid
    } catch (error) {
      console.error('Error generating QR Code: ', error);
    }
  };

  // FUNCTION TO DOWNLOAD THE GENERATED QR CODE AS A PNG FILE AND GET FILENAME FROM USER
  const downloadQRCode = () => {
    // Function to get filename from user
    const getFileName = () => {
      // Use a method to prompt the user for input and store the response
      let fileName = prompt('Please enter a filename for the QR code:', 'QRCode');
      // Recursively call getFileName if the filename is empty
      return fileName === "" ? getFileName() : fileName;
    };

    // Call the above function to retrieve a filename and store it in a variable
    let fileName = getFileName();

    // Format the filename to ensure it is filesystem-friendly
    fileName = fileName.split(" ").join("-");

    // Create an anchor element to facilitate the download
    const link = document.createElement("a");
    // Set the necessary attributes on the anchor element to prepare it for download
    link.href = qr;
    link.download = `${fileName}.png`;
    // Append the anchor element to the document to make it interactable
    document.body.appendChild(link);
    // Programmatically trigger a click on the anchor element to initiate the download
    link.click();
    // Remove the anchor element from the document after the download has been initiated
    document.body.removeChild(link);
  };

  // FUNCTION TO RESET THE STATE AND ALLOW GENERATING A NEW QR CODE
  const repeatAction = () => {
    setUrl('');
    setQr('');
    setShowInput(true);
    setErrorMessage('');
  };

  // RETURN THE STATE VARIABLES AND FUNCTIONS TO BE USED IN THE COMPONENT
  return {
    url,
    setUrl,
    qr,
    showInput,
    errorMessage,
    generateQRCode,
    downloadQRCode,
    repeatAction,
  };
};
