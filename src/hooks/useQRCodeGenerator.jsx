import QRCode from "qrcode";
import { useState } from "react";

// This is the custom hook
export const useQRCodeGenerator = () => {
  // Reactive State variable to store the input URL
  const [url, setUrl] = useState('');

   // Reactive State variable to store the input validation error message
   const [inputError, setInputError] = useState('');

  // Reactive State variable to store the generated QR code data URL
  const [qrCodeData, setQRCodeData] = useState('');

  // Reactive State variable to toggle the visibility of the input element - boolean value
  const [showInput, setShowInput] = useState(true);

  // Function to generate a QR code from the input URL
  const generateQRCode = () => {
    if (url) {
      setInputError('');
      // Check if the input is a valid URL
      const isValidUrl = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i.test(url);
  
      if (isValidUrl) {
        QRCode.toDataURL(url, { width: 200, margin: 2 })
          .then((dataUrl) => {
            setQRCodeData(dataUrl);
            setShowInput(false);
            setInputError(''); // Clear any previous error message
          })
          .catch((error) => {
            console.error('QR code generation error', error);
            setInputError('QR code generation error');
          });
      } else {
        setInputError('Invalid URL');
      }
    } else {
      setInputError('URL is required');
    }
  };
  
  // Function to download the generated QR code as a PNG file
  const downloadQRCode = () => {
    // HINT 1: Consider encapsulating the filename prompting logic into a separate function.
    const getFileName = () => {
      let fileName;
      do {
        fileName = prompt('Enter a filename for the QR code (without extension):');
      } while (!fileName);
        return fileName;
    
    };


    // HINT 5: Call the above function to retrieve a filename and store it in a variable.
    const fileName = getFileName();

    // HINT 6: Format the filename to ensure it is filesystem-friendly.
   const formattedFileName = fileName.replace(/[^a-z0-9]/gi, '_') + '.png';

    // HINT 7: Create an anchor element to facilitate the download.
   const downloadLink = document.createElement('a');

    // HINT 8: Set the necessary attributes on the anchor element to prepare it for download.
    downloadLink.href = qrCodeData;
    downloadLink.download = formattedFileName;

    // HINT 9: Append the anchor element to the document to make it interactable.
    document.body.appendChild(downloadLink);

    // HINT 10: Programmatically trigger a click on the anchor element to initiate the download.
    downloadLink.click();

    // HINT 11: Remove the anchor element from the document after the download has been initiated.
    document.body.removeChild(downloadLink);
  };

  // Function to reset the state and allow generating a new QR code
  const repeatAction = () => {
    // Reset the url state to an empty string
    // Reset the qr state to an empty string
    setUrl('');
    setInputError('');
    setQRCodeData('');
    // Show the input element back to true :)
    setShowInput(true);
  };

  // Return the state variables and functions to be used in the component
  return {
    url,
    qrCodeData,
    showInput,
    inputError,
    setInputError,
    setUrl,
    generateQRCode,
    downloadQRCode,
    repeatAction,
  };
};
