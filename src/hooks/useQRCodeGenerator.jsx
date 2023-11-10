// Importing the QRCode library for generating QR codes
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

  // Reactive State variable to toggle the visibility of the input element
  const [showInput, setShowInput] = useState(true);

  // Function to generate a QR code from the input URL
  const generateQRCode = () => {
    if (url) {
      setInputError('');
      // Check if the input is a valid URL
      const isValidUrl = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i.test(url);
  
      if (isValidUrl) {
        // Generate QR code data URL with specified width and margin
        QRCode.toDataURL(url, { width: 200, margin: 2 })
          .then((dataUrl) => {
            setQRCodeData(dataUrl); // Set the generated QR code data URL,
            setShowInput(false); // Hide input
            setInputError(''); // Clear any previous error message
          })
          .catch((error) => {
            console.error('QR code generation error', error);
            setInputError('QR code generation error');
          });
      } else {
        setInputError('Invalid URL'); // If user do not input value in the correct format of a URL
      }
    } else {
      setInputError('URL is required'); // If user tries to press generate directly without any input
    }
  };
  
  // Function to download the generated QR code as a PNG file
  const downloadQRCode = () => {
    // Function to prompt the user for a filename (without extension)
    const getFileName = () => {
      let fileName;
      do {
        fileName = prompt('Enter a filename for the QR code (without extension):');
      } while (!fileName);
        return fileName;
    };


    // Call the above function to retrieve a filename and store it in a variable.
    const fileName = getFileName();

    // Format the filename to ensure it is filesystem-friendly.
   const formattedFileName = fileName.replace(/[^a-z0-9]/gi, '_') + '.png';

    // Create an anchor element to facilitate the download.
   const downloadLink = document.createElement('a');

    // Set attributes on the anchor element to prepare it for download.
    downloadLink.href = qrCodeData;
    downloadLink.download = formattedFileName;

    // Append the anchor element to the document to make it interactable.
    document.body.appendChild(downloadLink);

    // Programmatically trigger a click on the anchor element to initiate the download.
    downloadLink.click();

    // Remove the anchor element from the document after the download has been initiated.
    document.body.removeChild(downloadLink);
  };

  // Function to reset the state and allow generating a new QR code
  const repeatAction = () => {
    setUrl('');  // Reset the url state to an empty string
    setInputError(''); // Reset errors
    setQRCodeData(''); // Reset the QR data state to an emty string
    setShowInput(true); // Show the input element again
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
