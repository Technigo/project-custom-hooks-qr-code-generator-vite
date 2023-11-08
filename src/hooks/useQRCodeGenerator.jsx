// Hook Explanation
// This React component, specifically a custom hook named useQRCodeGenerator, is designed to facilitate the generation and downloading of QR codes. Initially, it utilizes the useState hook from React to manage three pieces of state: url (to store the input URL that will be converted into a QR code), qr (to store the generated QR code data URL), and showInput (a boolean to toggle the visibility of an input element in the UI). The hook exposes a method generateQRCode which utilizes the QRCode.toDataURL method to convert the provided URL into a QR code, applying specific styling options, and then updates the state with the generated QR code and hides the input. The downloadQRCode method allows users to download the generated QR code as a PNG file, prompting them to provide a filename and handling the download process via creating an anchor element in the DOM. Lastly, the repeatAction method resets the state to allow users to generate a new QR code. The hook returns an object containing the state variables and methods, enabling them to be utilized in the component where the hook is used.
import QRCode from "qrcode";
import { useState } from "react";

// Define a custom hook named useQRCodeGenerator
export const useQRCodeGenerator = () => {
  // State variable to store the input URL
  const [url, setUrl] = useState("");

  // State variable to store the generated QR code data URL
  const [qr, setQr] = useState("");

  // State variable to toggle the visibility of the input element
  const [isInputVisible, setIsInputVisible] = useState(true);

  // Function to generate a QR code from the input URL
  const generateQRCode = () => {
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
      (error, url) => {
        if (error) {
          console.error(error);
        } else {
          console.log(url);
          setQr(url);
          setIsInputVisible(false);
        }
      }
    );
  };

  // Function to prompt the user for a filename
  const getFileName = () => {
    const fileName = prompt('Enter a filename for the QR code:');
    if (fileName === null) {
      // User canceled the action, do nothing or handle accordingly
      return null;
    } else if (fileName === "") {
      // No filename provided, retry
      return getFileName();
    } else {
      return fileName;
    }
  };

  // Function to download the generated QR code as a PNG file
  const downloadQRCode = () => {
    let fileName = getFileName();
    if (fileName === null) {
      return;
    }
    let formattedFileName = fileName + ".png";
    
    // Check if qr contains a valid data URL
    if (qr) {
      // Create the download link after the QR code data URL is available
      const downloadLink = document.createElement("a");

      // Set the href attribute to the actual QR code data URL
      downloadLink.href = qr;
      downloadLink.download = formattedFileName;

      // Append the anchor element to the document to make it interactable
      document.body.appendChild(downloadLink);

      // Programmatically trigger a click on the anchor element to initiate the download
      downloadLink.click();

      // Remove the anchor element from the document after the download has been initiated
      document.body.removeChild(downloadLink);
    } else {
      console.error("QR code data is not available.");
    }
  };

  // Function to reset the state and allow generating a new QR code
  const repeatAction = () => {
    setUrl("");
    setQr("");
    setIsInputVisible(true);
  };

  // Return the state variables and functions to be used in the component
  return {
    url, setUrl, qr, isInputVisible, generateQRCode, downloadQRCode, repeatAction
  };
};
