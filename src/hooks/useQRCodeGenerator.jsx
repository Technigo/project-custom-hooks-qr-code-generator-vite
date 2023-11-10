import QRCode from "qrcode";
import { useState } from "react";

export const useQRCodeGenerator = () => {
  // Custom hook to generate a QR code from a URL
  const [url, setUrl] = useState(""); // State variable to store the input URL
  const [qr, setQr] = useState(""); // State variable to store the generated QR code
  const [showInput, setShowInput] = useState(true); // State variable to toggle the visibility of the input element

  // Function to generate a QR code from the input URL
  const generateQRCode = () => {
    // Implement a function to validate the input URL.
    QRCode.toDataURL(
      url, // Ensure to pass the necessary parameters to the QR code generation method, such as the URL to convert and any styling options.
      {
        width: 300, //Sets the width of the QR code
        margin: 2, //sets the margin of the QR code
        color: {
          dark: "#163a70", //Sets the color of the dark squares of the QR code
          light: "#EEEEEEFF", //Sets the color of the light squares of the QR code
        },
      },

      (err, url) => {
        // Implement a callback function to handle the response from the QR code generation method.
        if (err) return console.error(err);
        setQr(url); // Set the qr state to the generated QR code.
        setShowInput(false); // Set the showInput state to false to hide the input element and show the QR code image.
      }
    );
  };

  const downloadQRCode = () => {
    // A function to ask the user to provide a filename for the QR code.
    const getFileName = () => {
      const fileName = prompt("Choose a name for the QR code:", "qrcode.png"); // Prompt the user to provide a filename for the QR code width a default value of "qrcode.png".
      return fileName === "" ? getFileName() : fileName; // If the user cancels the prompt, return an empty string.
    };

    let fileName = getFileName(); // Call the getFileName function to get the filename for the QR code.

    fileName = fileName.replace(/\s/g, "-").toLowerCase(); // Replace any spaces in the filename with hyphens and convert the filename to lowercase - 2 different ways to do this.
    //fileName = fileName.split(" ").join("-").toLowerCase();

    const link = document.createElement("a"); // Creating an anchor element to prepare the QR code for download.

    // Sets the necessary attributes on the anchor element to prepare it for download.
    link.href = qr;
    link.download = `${fileName}.png`;

    document.body.appendChild(link); // Add the anchor element to the document.
    link.click(); // Trigger a click event on the anchor element to download the QR code.
    document.body.removeChild(link); // Remove the anchor element from the document after the download has been initiated.
  };

  // Function to reset the state and allow generating a new QR code
  const repeatAction = () => {
    setUrl(""); // Reset the url state to an empty string
    setQr(""); // Reset the qr state to an empty string
    setShowInput(true); // Show the input element back to true
  };

  // Return the necessary variables and functions from the custom hook
  return {
    url,
    setUrl,
    qr,
    showInput,
    generateQRCode,
    downloadQRCode,
    repeatAction,
  };
};
