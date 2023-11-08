import QRCode from "qrcode";
import { useState } from "react";

// Define a custom hook named useQRCodeGenerator
export const useQRCodeGenerator = () => {
  const [url, setUrl] = useState("");
  const [qrCode, setQrCode] = useState("");
  const [visibility, setVisibility] = useState(true);
  const [qrCodeColor, setQRCodeColor] = useState("#000000ff");
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [size, setSize] = useState(300);
  // Check if all input fields are filled. Trimming removes leading and trailing spaces from the input, so it ensures that users are not just checking for inputs with only spaces.
  const isUrlEmpty = url.trim() === "";
  // Function to generate a QR code from the input URL
  const generateQRCode = () => {
    QRCode.toDataURL(
      url,
      {
        width: size,
        margin: 2,
        color: {
          dark: qrCodeColor,
          light: "#ffffffff",
        },
      },
      (err, url) => {
        if (err) {
          console.error(err);
        }

        // console.log(url);
        setQrCode(url);
      }
    );
    setVisibility(false);
  };

  // Function to download the generated QR code as a PNG file
  const downloadQRCode = () => {
    const getFileName = () => {
      const inputFileName = prompt("Enter a filename for the QR code");
      if (!inputFileName) {
        return getFileName();
      }
      return inputFileName;
    };

    const fileName = getFileName();
    const formattedFileName = fileName
      .replace(/[^a-z0-9]/gi, "_")
      .toLowerCase();

    const link = document.createElement("a");
    link.href = qrCode;
    link.download = formattedFileName + ".png";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Function to reset the state and allow generating a new QR code
  const repeatAction = () => {
    setUrl("");
    setQrCode("");
    setQRCodeColor("#000000ff");
    setSize(300);
    setDisplayColorPicker(false);
    setVisibility(true);
  };

  // Return the state variables and functions to be used in the component
  return {
    url,
    setUrl,
    qrCode,
    visibility,
    generateQRCode,
    downloadQRCode,
    repeatAction,
    setVisibility,
    qrCodeColor,
    setQRCodeColor,
    size,
    setSize,
    displayColorPicker,
    setDisplayColorPicker,
    isUrlEmpty,
  };
};
