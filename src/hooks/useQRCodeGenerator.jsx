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
// Function to generate a QR code from the input URL with custom styling options
const generateQRCode = () => {
  if (url) {

    const qrOptions = {
      type: "image/png",
      color: {
        dark: "#000",
        light: "#FFF",
      },
      width: 300,
      margin: 2,
    };

    QRCode.toDataURL(url, qrOptions, (err, dataUrl) => {

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
      let fileName = prompt("Enter a filename for the QR code", "QR-code.png");
      if (!fileName) {
        fileName = "qrcode.png";
      }
      return fileName;
    };

    const fileName = getFileName();
    const a = document.createElement("a");
    a.href = qr;
    a.download = `${fileName}.png`

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
    setUrl,
    qr,
    showInput,
    generateQRCode,
    downloadQRCode,
    repeatAction,
  };
};
