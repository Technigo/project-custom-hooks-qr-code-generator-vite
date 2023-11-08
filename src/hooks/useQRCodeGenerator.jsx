import QRCode from "qrcode";
import { useState, useEffect } from "react";

// A custom hook named useQRCodeGenerator.
export const useQRCodeGenerator = () => {
  // Reactive State variable to store the input URL.
  const [inputURL, setInputURL] = useState("");

  // Reactive State variable to store the generated QR code data URL.
  const [qrcode, setQrcode] = useState("");

  // Reactive State variable to toggle the visibility of the input element - boolean value.
  const [showQrcode, setShowQrcode] = useState(true);

  // Function to generate a QR code from the input URL.
  const generateQRCode = () => {
    // Import of the qrcode chained to the native method toDataUrl().
    // Converts a URL to a QR code data URL.
    QRCode.toDataURL(
      // Necessary parameters to pass to the QR code generation method. (URL to convert and any styling options.)
      inputURL,
      {
        width: 200,
        margin: 2,
      },
      // Error handling and callback of the QR code generation method, which provides the generated QR code data URL.
      (err, inputURL) => {
        if (err) {
          console.error(err);
        } else {
          console.log(inputURL);
          setQrcode(inputURL);
          setShowQrcode(true);
        }
      }
    );
  };

  // Function to download the generated QR code as a PNG file.
  const downloadQRCode = () => {
    // Filename logic in a separate function.
    const getFileName = () => {
      // Method to prompt the user for input and store the response.
      let fileName = prompt("Enter a filename for the QR code:");
      // Implement a check for an empty filename and utilize recursion to re-prompt the user if necessary.
      if (!fileName) {
        return getFileName(); // Recursively re-prompt if the filename is empty
      }
      // Ensure the function returns the obtained filename.
      return fileName;
    };
    // HINT 5: Call the above function to retrieve a filename and store it in a variable.
    const fileName = getFileName();
    // HINT 6: Format the filename to ensure it is filesystem-friendly.
    const formattedFileName = fileName.replace(/[^a-z0-9]/gi, "_") + ".png";
    // HINT 7: Create an anchor element to facilitate the download.
    const downloadLink = document.createElement("a");
    // HINT 8: Set the necessary attributes on the anchor element to prepare it for download.
    downloadLink.href = qrcode;
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
    setInputURL("");
    setQrcode("");
    setShowQrcode(false);
  };

  return {
    inputURL,
    setInputURL,
    qrcode,
    generateQRCode,
    downloadQRCode,
    repeatAction,
  };
};
