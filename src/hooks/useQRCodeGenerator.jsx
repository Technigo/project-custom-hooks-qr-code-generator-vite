import QRCode from "qrcode";
import { useState } from "react";

export const QRgenerator = () => {
  const [url, setUrl] = useState("");
  const [qr, setQr] = useState("");
  const [showInput, setShowInput] = useState(true);

  const generateQRCode = async () => {
    try {
      const dataUrl = await QRCode.toDataURL(url);
      setQr(dataUrl);
    } catch (err) {
      console.error(err);
    }
  };

  const downloadQRCode = () => {
    const anchor = document.createElement("a");
    anchor.setAttribute("href", qr);
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    filename();
  };

  const filename = prompt("Please enter the filename", "defaultFilename");
  return { url, setUrl, qr, showInput, setShowInput, generateQRCode, downloadQRCode };
};




