// import QRCode from "qrcode";
// import { useState } from "react";

// // Define a custom hook named useQRCodeGenerator
// export const useQRCodeGenerator = () => {
// const [url, setUrl] = useState("");
// const [qrCode, setQrCode] = useState("");
// const [showInput, setShowInput] = useState(true)


//   // Function to generate a QR code from the input URL
//   const generateQRCode = () => {
    
//     QRCode.toDataURL(url, (err, url)=> {
//       if (err) return console.log(err)
//       console.log(url)
//     setQrCode(url)
//     })

//   };

//   // Function to download the generated QR code as a PNG file
//   const downloadQRCode = () => {
    
//     const getFileName = () => {
 
//     };

   
//   };

//   // Function to reset the state and allow generating a new QR code
//   const repeatAction = () => {
   
//   };

//   // Return the state variables and functions to be used in the component
//   return {
    
//   };
// };

// Hook Explanation
// This React component, specifically a custom hook named useQRCodeGenerator, is designed to facilitate the generation and downloading of QR codes. Initially, it utilizes the useState hook from React to manage three pieces of state: url (to store the input URL that will be converted into a QR code), qr (to store the generated QR code data URL), and showInput (a boolean to toggle the visibility of an input element in the UI). The hook exposes a method generateQRCode which utilizes the QRCode.toDataURL method to convert the provided URL into a QR code, applying specific styling options, and then updates the state with the generated QR code and hides the input. The downloadQRCode method allows users to download the generated QR code as a PNG file, prompting them to provide a filename and handling the download process via creating an anchor element in the DOM. Lastly, the repeatAction method resets the state to allow users to generate a new QR code. The hook returns an object containing the state variables and methods, enabling them to be utilized in the component where the hook is used.
import QRCode from "qrcode";
import { useState } from "react";

// Define a custom hook named useQRCodeGenerator
export const useQRCodeGenerator = () => {
  const [url, setUrl] = useState("");
  const [qrCode, setQrCode] = useState("");
  const [showInput, setShowInput] = useState(true);

  // Function to generate a QR code from the input URL
  const generateQRCode = () => {
    
    QRCode.toDataURL(url, (err, url)=> {
      if (err) return console.log(err)
      console.log(url)
    setQrCode(url)
    })

  };

  // Function to download the generated QR code as a PNG file
  const downloadQRCode = () => {
  // Define a function to get the filename from the user through a prompt
  const getFileName = () => {
    let fileName = prompt("Enter a filename for the QR code", "qrcode"); // A prompt message with a placeholder
    if (!fileName) { 
      // Handle empty filename by recursively asking for a filename
      fileName = getFileName();
    }
    return fileName;
  };

  // Call the getFileName function to get the desired filename from the user
  const fileName = getFileName();

  // Format the filename to ensure it is filesystem-friendly
  const formattedFileName = fileName.replace(/\s+/g, "_").toLowerCase(); // Replace spaces with underscores and convert to lowercase

  // Create an anchor element to facilitate the download
  const downloadLink = document.createElement("a");

  // Set the necessary attributes on the anchor element to prepare it for download
  downloadLink.href = qrCode; // Set the href to the generated QR code data URL
  downloadLink.download = `${formattedFileName}.png`; // Set the download attribute with the formatted filename and .png extension

  // Append the anchor element to the document to make it interactable
  document.body.appendChild(downloadLink);

  // Programmatically trigger a click on the anchor element to initiate the download
  downloadLink.click();

  // Remove the anchor element from the document after the download has been initiated
  document.body.removeChild(downloadLink);
};



  // Function to reset the state and allow generating a new QR code
  const repeatAction = () => {
    setUrl("");
    setQrCode("");
    setShowInput(true);
  };

  // Return the state variables and functions to be used in the component
  return { url, setUrl, qrCode, showInput, generateQRCode, downloadQRCode, repeatAction };
};

