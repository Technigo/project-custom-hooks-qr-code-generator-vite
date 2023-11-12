import QRCode from "qrcode";
import { useState, useEffect } from "react";
import reactCSS from "reactcss";

// A custom hook named useQRCodeGenerator.
export const useQRCodeGenerator = () => {
  const [inputURL, setInputURL] = useState(""); // Reactive State variable to store the input URL.
  const [qrcode, setQrcode] = useState(""); // Reactive State variable to store the generated QR code data URL.
  const [showQrcode, setShowQrcode] = useState(true); // Reactive State variable to toggle the visibility of the input element - boolean value.
  const [showSpinner, setShowSpinner] = useState(false); // Reactive State variable for the visibility of a loading spinner.
  const [color, setColor] = useState("#000000");
  const [showColorPicker, setShowColorPicker] = useState(false);

  // Function to generate a QR code from the input URL.
  const generateQRCode = () => {
    if (inputURL.trim() === "") {
      // If the input is empty or contains only whitespace, don't show the spinner.
      return;
    }

    setShowSpinner(true); // Display loading spinner.

    // Import of the qrcode chained to the native method toDataUrl().
    // Converts a URL to a QR code data URL.
    QRCode.toDataURL(
      // Necessary parameters to pass to the QR code generation method. (URL to convert and any styling options.)
      inputURL,
      {
        margin: 2,
        color: {
          dark: color,
          light: "#ffffff"
        }
      },
      // Error handling and callback of the QR code generation method, which provides the generated QR code data URL.
      (err, inputURL) => {
        setTimeout(() => {
          setShowSpinner(false); // Hide the spinner.
          if (err) {
            console.error(err);
          } else {
            console.log(inputURL);
            setQrcode(inputURL);
            setShowQrcode(true);
          }
        }, 2000);
      }
    );
  };

  // Function to download the generated QR code as a PNG file.
  const downloadQRCode = () => {
    // Filename logic in a separate function.
    const getFileName = () => {
      // Method to prompt the user for input and store the response.
  let fileName = prompt("Enter a filename for the QR code.");
  
  // Check if the user clicked Cancel
  if (fileName === null) {
    return null; // User canceled, return null
  }

  // Implement a check for an empty filename and utilize recursion to re-prompt the user if necessary.
  if (!fileName.trim()) {
    alert("Filename cannot be empty. Please try again.");
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

  // Function to reset the state and allow generating a new QR code.
  const repeatAction = () => {
    setInputURL("");
    setQrcode("");
    setShowQrcode(false);
    setColor("#000000");
    setQrSize(200);
    setShowColorPicker(false);
  };

  return {
    inputURL,
    setInputURL,
    qrcode,
    generateQRCode,
    downloadQRCode,
    repeatAction,
    showSpinner,
    color,
    setColor,
    showColorPicker,
    setShowColorPicker,
  };
};
