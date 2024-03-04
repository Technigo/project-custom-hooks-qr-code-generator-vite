// src/hooks/useQRCodeGenerator.js
import QRCode from "qrcode";
import { useState } from "react";

export const useQRCodeGenerator = () => {
  const [url, setUrl] = useState("");
  const [qr, setQr] = useState("");
  const [color, setColor] = useState("#000000"); // Default QR code color: black
  const [showInput, setShowInput] = useState(true);

  const generateQRCode = async () => {
    if (!url) {
      alert("Please provide a URL");
      return;
    }
    try {
      const qrCodeDataURL = await QRCode.toDataURL(url, {
        width: 500,
        margin: 2,
        color: {
          dark: color, // Use the selected color for the QR code
          light: "#ffffff", // Background color of the QR code
        },
      });
      setQr(qrCodeDataURL);
      setShowInput(false);
    } catch (error) {
      console.error("Error generating QR code:", error);
      alert("Failed to generate QR code. Please try again.");
    }
  };

  const downloadQRCode = () => {
    const filename = prompt("Please enter a filename for your QR code:", "QRCode");
    if (filename === null) { // User clicked cancel
      return; // Exit the function without downloading
    }
    const sanitizedFilename = (filename.trim() ? filename : "QRCode").replace(/[^a-zA-Z0-9_-]/g, '_') + ".png"; // Sanitize and ensure a default name

    const element = document.createElement("a");
    element.setAttribute("href", qr);
    element.setAttribute("download", sanitizedFilename);
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const repeatAction = () => {
    setUrl("");
    setQr("");
    setShowInput(true);
  };

  return {
    url, setUrl, qr, color, setColor, showInput, generateQRCode, downloadQRCode, repeatAction,
  };
};
