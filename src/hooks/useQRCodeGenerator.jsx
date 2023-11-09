import QRCode from "qrcode";
import { useState } from "react";

// Define a custom hook named useQRCodeGenerator
export const useQRCodeGenerator = () => {
  const [url, setUrl] = useState("");
  const [qrCode, setQrCode] = useState("");
  const [showInput, setShowInput] = useState(true);

  // Function to generate a QR code from the input URL
  const generateQRCode = () => {
    
    QRCode.toDataURL(url, {
      width: 200,
      margin: 2,
      color: {
        light: '#0000',
        dark:'#ffff'
      }
    }, (err, url)=> {
      if (err) return console.log(err)
      console.log(url)
    setQrCode(url)
    setShowInput(false)
    })

  };

  // Function to download the generated QR code as a PNG file
  const downloadQRCode = () => {
  // Define a function to get the filename from the user through a prompt
  const getFileName = () => {
    let fileName = prompt("Enter a filename for the QR code", "qrcode"); // A prompt message with a placeholder
    return fileName;
  };

  // Calling the getFileName function to get the desired filename from the user
  const fileName = getFileName();

  // Formatting the filename to ensure it is filesystem-friendly
  const formattedFileName = fileName.replace(/\s+/g, "_").toLowerCase(); // Replaces spaces with underscores and convert to lowercase

  // Creates an anchor element to facilitate the download
  const downloadLink = document.createElement("a");

  // Sets the necessary attributes on the anchor element to prepare it for download
  downloadLink.href = qrCode; // Sets the href to the generated QR code data URL
  downloadLink.download = `${formattedFileName}.png`; // Sets the download attribute with the formatted filename and .png extension

  // Appends the anchor element to the document to make it interactable
  document.body.appendChild(downloadLink);

  // Programmatically triggers a click on the anchor element to initiate the download
  downloadLink.click();

  // Removes the anchor element from the document after the download has been initiated
  document.body.removeChild(downloadLink);
};


  // Function to reset the state and allow generating a new QR code
  const repeatAction = () => {
    setUrl("");
    setQrCode("");
    setShowInput(true);
  };

  // Returning the state variables and functions to be used in the app component
  return { url, setUrl, qrCode, showInput, generateQRCode, downloadQRCode, repeatAction };
};

