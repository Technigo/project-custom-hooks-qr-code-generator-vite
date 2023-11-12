import QRCode from "qrcode";
import { useState } from "react";

// A custom hook named useQRCodeGenerator.
export const useQRCodeGenerator = () => {
  const [inputURL, setInputURL] = useState(""); // Reactive State variable to store the input URL.
  const [qrcode, setQrcode] = useState(""); // Reactive State variable to store the generated QR code data URL.
  const [showQrcode, setShowQrcode] = useState(true); // Reactive State variable to toggle the visibility of the input element - boolean value.
  const [showSpinner, setShowSpinner] = useState(false); // Reactive State variable for the visibility of a loading spinner.
  const [color, setColor] = useState("#000000"); // Reactive State variable to store the color for the QR code.
  const [showColorPicker, setShowColorPicker] = useState(false); // Reactive State variable to toggle the visibility of the color picker.

  // Function to generate a QR code from the input URL.
  const generateQRCode = () => {
    if (inputURL.trim() === "") {
      // If the input is empty or contains only whitespace, don't show the spinner.
      return;
    }

    // Display loading spinner.
    setShowSpinner(true);

    // Generate QR code using the qrcode library.
    QRCode.toDataURL(
      // URL to convert to a QR code.
      inputURL,
      {
        width: 300,
        margin: 2,
        color: {
          dark: color,
          light: "#ffffff",
        },
      },
      // Callback for handling errors and getting the generated QR code data URL.
      (err, inputURL) => {
        // Simulate a delay of 2000 milliseconds (2 seconds).
        setTimeout(() => {
          setShowSpinner(false); // Hide the spinner.
          if (err) {
            console.error(err);
          } else {
            console.log(inputURL); // Log the generated QR code data URL.
            setQrcode(inputURL); // Set the QR code data URL to the state.
            setShowQrcode(true); // Show the QR code.
          }
        }, 2000);
      }
    );
  };

  // Function to download the generated QR code as a PNG file.
  const downloadQRCode = () => {
    // Function to prompt the user for a filename and handle the input.
    const getFileName = () => {
      let fileName = prompt("Enter a filename for the QR code.");

      // If the user clicked Cancel, return null.
      if (fileName === null) {
        return null;
      }

      // If the filename is empty, alert the user and re-prompt.
      if (!fileName.trim()) {
        alert("Filename cannot be empty. Please try again.");
        return getFileName();
      }

      // Return the obtained filename.
      return fileName;
    };

    // Call the function to retrieve a filename.
    const fileName = getFileName();

    // Format the filename to ensure it is filesystem-friendly.
    const formattedFileName = fileName.replace(/[^a-z0-9]/gi, "_") + ".png";

    // Create an anchor element for the download.
    const downloadLink = document.createElement("a");

    // Set attributes on the anchor element for the download.
    downloadLink.href = qrcode;
    downloadLink.download = formattedFileName;

    // Append the anchor element to the document.
    document.body.appendChild(downloadLink);
    // Programmatically trigger a click on the anchor element to initiate the download.
    downloadLink.click();
    // Remove the anchor element from the document after the download has been initiated.
    document.body.removeChild(downloadLink);
  };

  // Function to reset the state and allow generating a new QR code.
  const repeatAction = () => {
    setInputURL("");
    setQrcode("");
    setShowQrcode(false);
    setColor("#000000");
    setShowColorPicker(false);
  };

  // Return the necessary variables and functions as an object.
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
