// working example from chatgpt

import QRCode from "qrcode";
import { useState } from "react";

// Define a custom hook named useQRCodeGenerator
export const useQRCodeGenerator = () => {
  // Reactive State variable to store the input URL
  const [url, setUrl] = useState("");

  // Reactive State variable to store the generated QR code data URL
  const [qr, setQr] = useState("");

  // Reactive State variable to toggle the visibility of the input element - boolean value
  const [showInput, setShowInput] = useState(true);

  // Function to generate a QR code from the input URL
  const generateQRCode = () => {
    // Utilize the qrccode library to convert a URL to a QR code data URL.
    QRCode.toDataURL(
      url,
      {
        width: 100,
        margin: 2,
        color: {
          dark: "#335383FF",
          light: "#EEEEEEFF",
        },
      },
      (err, generateQRCode) => {
        if (err) {
          console.error(err);
        } else {
          // Update qr state with the generated QR code data URL
          setQr(generateQRCode);
          // Hide the input element
          setShowInput(false);
        }
      }
    );
  };

  // Function to download the generated QR code as a PNG file
  const downloadQRCode = () => {
    // Encapsulate the filename prompting logic into a separate function.
    const getFileName = () => {
      // Use a method to prompt the user for input and store the response.
      const fileName = prompt("Enter a filename for the QR code:");
      // Implement a check for an empty filename and utilize recursion to re-prompt the user if necessary.
      if (!fileName) {
        return getFileName();
      }
      // Ensure the function returns the obtained filename.
      return fileName;
    };

    // Call the above function to retrieve a filename and store it in a variable.
    const fileName = getFileName();

    // Format the filename to ensure it is filesystem-friendly.
    const formattedFileName = fileName.replace(/[^a-z0-9]/gi, "_");

    // Create an anchor element to facilitate the download.
    const a = document.createElement("a");

    // Set the necessary attributes on the anchor element to prepare it for download.
    a.href = qr;
    a.download = `${formattedFileName}.png`;

    // Append the anchor element to the document to make it interactable.
    document.body.appendChild(a);

    // Programmatically trigger a click on the anchor element to initiate the download.
    a.click();

    // Remove the anchor element from the document after the download has been initiated.
    document.body.removeChild(a);
  };

  // Function to reset the state and allow generating a new QR code
  const repeatAction = () => {
    // Reset the url state to an empty string
    setUrl("");
    // Reset the qr state to an empty string
    setQr("");
    // Show the input element back to true
    setShowInput(true);
  };

  // Return the state variables and functions to be used in the component
  return {
    url,
    qr,
    showInput,
    generateQRCode,
    downloadQRCode,
    repeatAction,
    setUrl,
  };
};
