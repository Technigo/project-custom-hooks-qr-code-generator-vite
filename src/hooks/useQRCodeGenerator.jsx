// Import the QRCode library and necessary hooks from React
import QRCode from "qrcode";
import { useState, useRef } from "react";

// Define a custom hook named useQRCodeGenerator
export const useQRCodeGenerator = () => {
  // Create a ref for the download link
  const downloadRef = useRef(null);

  // State variable to store the input URL
  const [inputURL, setInputURL] = useState("");

  // State variable to store the generated QR code data URL
  const [qrData, setQRData] = useState("");

  // State variable to toggle the visibility of the input element - boolean value
  const [inputVisibility, setInputVisibility] = useState(true);

  // Function to generate a QR code from the input URL
  const generateQRCode = async () => {
    try {
      // Generate QR code data URL using the QRCode library
      const qrCreate = await QRCode.toDataURL(inputURL, {
        width: 600,
        margin: 2,
      });

      // Update state with the generated QR code and hide the input
      setQRData(qrCreate);
      setInputVisibility(false);
    } catch (err) {
      console.log("Error: " + err);
    }
  };

  // Function to download the generated QR code as a PNG file
  const downloadQRCode = () => {
    // Function to prompt the user for a filename
    const getFileName = () => {
      let userFileName = prompt("Name the file: ");
      if (userFileName !== "" && userFileName !== null) {
        // Replace invalid characters and format the filename
        userFileName = userFileName.replace(/[\\/:"*?<>|]/g, "");
        userFileName = userFileName.replace(/\s+/g, "_").trim();
        if (userFileName.length > 30) {
          userFileName = userFileName.substring(0, 30);
        }
      }

      return userFileName === "" ? null : userFileName;
    };

    // Call the function to retrieve a filename
    let fileName = getFileName();

    // Format the filename for the download
    const formattedFileName = `${fileName}QR.png`;

    // Set the attributes of the download link using useRef
    let downloadLink = downloadRef.current;
    downloadLink.href = qrData;
    downloadLink.download = formattedFileName;
    downloadLink.click();
  };

  // Function to reset the state and allow generating a new QR code
  const repeatAction = () => {
    setInputURL("");
    setQRData("");
    setInputVisibility(true);
  };

  // Return the state variables and functions to be used in the component
  return {
    qrData,
    generateQRCode,
    inputURL,
    setInputURL,
    repeatAction,
    inputVisibility,
    downloadQRCode,
    downloadRef,
  };
};
