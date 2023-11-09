import QRCode from "qrcode";
import { useState, useRef } from "react";

export const useQRCodeGenerator = () => {
  const downloadRef = useRef(null);
  const downloadController = useRef(new AbortController());

  const [inputURL, setInputURL] = useState("");
  const [qrData, setQRData] = useState("");
  const [inputVisibility, setInputVisibility] = useState(true);

  const generateQRCode = () => {
    // Cancel any ongoing download before generating a new QR code
    downloadController.current.abort();
    downloadController.current = new AbortController();

    QRCode.toDataURL(
      inputURL,
      { width: 200, margin: 2, color: { dark: "#000000FF", light: "#FFFFFFFF" } },
      (err, url) => {
        if (err) {
          console.error("Error generating QR code:", err);
          // Handle error, if any
        } else {
          setQRData(url);
          setInputVisibility(false);
        }
      }
    );
  };

  const downloadQRCode = () => {
    const shouldDownload = window.confirm("Do you want to download the QR code?");
    if (!shouldDownload) {
      // User chose to abort the download
      return;
    }

    const getFileName = () => {
      let fileName = prompt("Enter the filename for the QR code", "qrcode");
      if (!fileName || fileName.trim() === "") {
        return getFileName();
      }
      return fileName;
    };

    const fileName = getFileName();
    if (!fileName) {
      // User canceled the download
      return;
    }

    const formattedFileName = fileName.replace(/\s+/g, "_");

    const downloadLink = document.createElement("a");
    downloadLink.href = qrData;
    downloadLink.download = `${formattedFileName}.png`;
    downloadLink.target = "_blank"; // Open in a new tab to trigger the download

    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const repeatAction = () => {
    setInputURL("");
    setQRData("");
    setInputVisibility(true);
  };

  return {
    inputURL,
    setInputURL,
    qrData,
    inputVisibility,
    generateQRCode,
    downloadQRCode,
    repeatAction,
  };
};
