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
  const GenerateQRCode = () => {
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

  return {inputURL, setInputURL, qrcode, setQrcode, showQrcode, setShowQrcode, GenerateQRCode};
};
