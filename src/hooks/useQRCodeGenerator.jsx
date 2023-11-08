// Hook Explanation
// This React component, specifically a custom hook named useQRCodeGenerator, is designed to facilitate the generation and downloading of QR codes. Initially, it utilizes the useState hook from React to manage three pieces of state: url (to store the input URL that will be converted into a QR code), qr (to store the generated QR code data URL), and showInput (a boolean to toggle the visibility of an input element in the UI). The hook exposes a method generateQRCode which utilizes the QRCode.toDataURL method to convert the provided URL into a QR code, applying specific styling options, and then updates the state with the generated QR code and hides the input. The downloadQRCode method allows users to download the generated QR code as a PNG file, prompting them to provide a filename and handling the download process via creating an anchor element in the DOM. Lastly, the repeatAction method resets the state to allow users to generate a new QR code. The hook returns an object containing the state variables and methods, enabling them to be utilized in the component where the hook is used.
import { useState } from "react";
import QRCode from "qrcode";

export const useQRCodeGenerator = () => {
  // Reactive State variable to store the input URL
  const [url, setUrl] = useState("");

  // Reactive State variable to store the generated QR code data URL
  const [qr, setQR] = useState("");

  // Reactive State variable to toggle the visibility of the input element - boolean value
  const [showInput, setShowInput] = useState(true);

  // Function to generate a QR code from the input URL
  const generateQRCode = () => {
    if (url) {
      QRCode.toDataURL(url, { type: "image/png" }, (err, dataUrl) => {
        if (err) {
          console.error("Error generating QR code:", err);
        } else {
          setQR(dataUrl);
          setShowInput(false);
        }
      });
    }
  };

  // Function to download the generated QR code as a PNG file
  const downloadQRCode = () => {
    const getFileName = () => {
      let fileName = prompt("Enter a filename for the QR code", "qrcode.png");
      if (!fileName) {
        fileName = "qrcode.png";
      }
      return fileName;
    };

    const fileName = getFileName();
    const a = document.createElement("a");
    a.href = qr;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  // Function to reset the state and allow generating a new QR code
  const repeatAction = () => {
    setUrl("");
    setQR("");
    setShowInput(true);
  };

  return {
    url,
    qr,
    showInput,
    generateQRCode,
    downloadQRCode,
    repeatAction,
  };
};
