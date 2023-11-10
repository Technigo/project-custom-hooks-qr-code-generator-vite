// Hook Explanation
// This React component, specifically a custom hook named useQRCodeGenerator, is designed to facilitate the generation and downloading of QR codes. Initially, it utilizes the useState hook from React to manage three pieces of state: url (to store the input URL that will be converted into a QR code), qr (to store the generated QR code data URL), and showInput (a boolean to toggle the visibility of an input element in the UI). The hook exposes a method generateQRCode which utilizes the QRCode.toDataURL method to convert the provided URL into a QR code, applying specific styling options, and then updates the state with the generated QR code and hides the input. The downloadQRCode method allows users to download the generated QR code as a PNG file, prompting them to provide a filename and handling the download process via creating an anchor element in the DOM. Lastly, the repeatAction method resets the state to allow users to generate a new QR code. The hook returns an object containing the state variables and methods, enabling them to be utilized in the component where the hook is used.
import QRCode from "qrcode";
import { useState } from "react";

// Define a custom hook named useQRCodeGenerator
export const useQRCodeGenerator = () => {
  // Reactive State variable to store the input URL
  const [url, setUrl] = useState("");

  // Reactive State variable to store the generated QR code data URL
  const [qr, setQR] = useState("");

  // Reactive State variable to toggle the visibility of the input element - boolean value
  const [showInput, setShowInput] = useState(true);

  // Function to generate a QR code from the input URL
  const generateQRCode = () => {
    // HINT 1: Utilize the qrccode library that converts a URL to a QR code data URL.
    // Use the Import of the qrcode and chain to the native method toDataUrl() much like the example provided and specify the data within the object that you will be passing such as the {url, {width, margin, color:{dark, light}}} which containes the information to generate the qr-code and url. Lastly, this native method toDataUrl() will contain a callback function  that will update the qr variable and will also update the variable toggling the visibility of the input element.
    QRCode.toDataURL(
      url,
      { width: 200, margin: 2, color: { dark: "#000000", light: "#ffffff" } },
      (err, dataURL) => {
        if (err) {
          console.log("Error generating QR code:", err);
        } else {
          setQR(dataURL);
          setShowInput(false);
        }
      }
    );
  };

  // Function to download the generated QR code as a PNG file
  const downloadQRCode = () => {
    // HINT 1: Consider encapsulating the filename prompting logic into a separate function.
    const getFileName = () => {
      let fileName = prompt("Enter a filename for the QR code", "qrcode");

      while (!fileName.trim()) {
        fileName = prompt(
          "Filename cannot be empty. Please enter a valid filename.",
          "qrcode"
        );
      }

      return fileName;
      // HINT 2: Use a method to prompt the user for input and store the response.
      // ...
      // HINT 3: Implement a check for an empty filename and utilize recursion to re-prompt the user if necessary.
      // ...
      // HINT 4: Ensure the function returns the obtained filename.
      // ...
    };

    // HINT 5: Call the above function to retrieve a filename and store it in a variable.
    const fileName = getFileName();

    // HINT 6: Format the filename to ensure it is filesystem-friendly.
    const formattedFileName = fileName.replace(/\s+/g, "_").toLowerCase();

    // HINT 7: Create an anchor element to facilitate the download.
    const anchorElement = document.createElement("a");

    // HINT 8: Set the necessary attributes on the anchor element to prepare it for download.
    anchorElement.href = qr;
    anchorElement.download = formattedFileName + ".png";

    // HINT 9: Append the anchor element to the document to make it interactable.
    document.body.appendChild(anchorElement);

    // HINT 10: Programmatically trigger a click on the anchor element to initiate the download.
    anchorElement.click();

    // HINT 11: Remove the anchor element from the document after the download has been initiated.
    document.body.removeChild(anchorElement);
  };

  // Function to reset the state and allow generating a new QR code
  const repeatAction = () => {
    // Reset the url state to an empty string
    setUrl("");

    // Reset the qr state to an empty string
    setQR("");

    // Show the input element back to true :)
    setShowInput(true);
  };

  // Return the state variables and functions to be used in the component
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
