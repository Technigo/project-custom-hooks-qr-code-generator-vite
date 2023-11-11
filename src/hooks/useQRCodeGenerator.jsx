import { useState } from "react";
import QRCode from "qrcode";

// Defines a custom hook named useQRCodeGenerator.
export const useQRCodeGenerator = () => {
  // Reactive State variables to store the input URL, the generated QR code data URL and the error message.
  const [url, setUrl] = useState("");
  const [qr, setQr] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  // Reactive State variable to toggle the visibility of the input element.
  const [showInput, setShowInput] = useState(true);

  // Function to generate a QR code from the input URL.
  const generateQRCode = () => {
    // Displays an error message if the input is empty or only contains whitespace.
    if (url.trim() === "") {
      setErrorMessage("Please enter a valid URL.");
    } else {
      // Clears any previous error messages.
      setErrorMessage("");
      // Utilizes the QR code library that converts a URL to a QR code data URL.
      QRCode.toDataURL(
        // Passes the necessary parameters to the QR code generation method.
        url,
        {
          width: 250,
          margin: 2,
          color: {
            dark: "#7b3848FF",
            light: "#FFFFFFFF",
          },
        },
        // Handles the callback of the QR code generation method, which provides the generated QR code data URL.
        (err, url) => {
          // Implements error handling to manage any issues that might occur during QR code generation.
          if (err) return console.error(err);
          // Updates the relevant state variables with the generated QR code data URL and adjusts the UI accordingly.
          setQr(url);
          // Considers the user experience and how the UI should change once the QR code has been generated.
          setShowInput(false);
        }
      );
    }
  };
  // Function to download the generated QR code as a PNG file.
  const downloadQRCode = () => {
    // Encapsulates the filename prompting logic into a separate function.
    const getFileName = () => {
      // Uses a method to prompt the user for input and store the response.
      // Prompts the user for a filename.
      const fileName = prompt("Please enter a name for the downloaded file");
      // Implements a check for an empty filename and utilizes recursion to re-prompt the user if necessary.
      // Ensures the function returns the obtained filename.
      return fileName === "" ? getFileName() : fileName;
    };
    // Calls the above function to retrieve a filename and stores it in a variable.
    let fileName = getFileName();
    // Formats the filename to ensure it is filesystem-friendly.
    fileName = fileName.split(" ").join("-");
    // Creates an anchor element to facilitate the download.
    const link = document.createElement("a");
    // Sets the necessary attributes on the anchor element to prepare it for download.
    link.href = qr;
    link.download = `${fileName}.png`;
    // Appends the anchor element to the document to make it interactable.
    document.body.appendChild(link);
    // Programmatically triggers a click on the anchor element to initiate the download.
    link.click();
    // Removes the anchor element from the document after the download has been initiated.
    document.body.removeChild(link);
  };

  // Function to reset the state and allows generating a new QR code.
  const repeatAction = () => {
    // Resets the URL state to an empty string.
    setUrl("");
    // Resets the QR state to an empty string.
    setQr("");
    // Shows the input element back to true.
    setShowInput(true);
  };

  // Returns the state variables and functions to be used in the component.
  return {
    url,
    setUrl,
    qr,
    errorMessage,
    setErrorMessage,
    showInput,
    generateQRCode,
    downloadQRCode,
    repeatAction,
  };
};
