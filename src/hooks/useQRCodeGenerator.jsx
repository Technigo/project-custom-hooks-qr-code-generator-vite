// Hook Explanation
// This React component, specifically a custom hook named useQRCodeGenerator, is designed to facilitate the generation and downloading of QR codes. Initially, it utilizes the useState hook from React to manage three pieces of state: url (to store the input URL that will be converted into a QR code), qr (to store the generated QR code data URL), and showInput (a boolean to toggle the visibility of an input element in the UI). The hook exposes a method generateQRCode which utilizes the QRCode.toDataURL method to convert the provided URL into a QR code, applying specific styling options, and then updates the state with the generated QR code and hides the input. The downloadQRCode method allows users to download the generated QR code as a PNG file, prompting them to provide a filename and handling the download process via creating an anchor element in the DOM. Lastly, the repeatAction method resets the state to allow users to generate a new QR code. The hook returns an object containing the state variables and methods, enabling them to be utilized in the component where the hook is used.
import QRCode from "qrcode";
import { useState, useRef } from "react";

// Custom hook for a QR Code Generator
export const useQRCodeGenerator = () => {

  const [url, setUrl] = useState(""); // State variable to store the input URL
  const [qr, setQr] = useState("");   // State variable to store the generated QR code data URL
  const [isInputVisible, setIsInputVisible] = useState(true); // State variable to toggle the visibility of the input element

  const inputRef = useRef(null);  // Ref used to interact with the input element

  const DEFAULT_FILE_FORMAT = "png"; // Default file format. Can be changed to other formats if needed.


  // Function to focus on the input element
  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  // Function to generate a QR code from the input URL
  const generateQRCode = () => {

    if (url.trim() === "") {
      alert("Please enter a valid input.");

    } else {

      // const screenWidth = window.innerWidth;
      // const qrCodeWidth = screenWidth > 768 ? 300 : 200;  //adjust width depending on device

      QRCode.toDataURL(
        url,  // The data to be encoded as a QR code (e.g., a URL)
        {
          // width: qrCodeWidth,  // Width of the QR code
          margin: 2,   // Margin around the QR code. Increasing this shrinks the QR code and increases the size of the background of the image in order to fit within the width. Keep this small.
          color: {
            dark: "#0C090D",   // The darker colorr in the QR code image
            light: "#EEEEEEFF",  // Color of the background in the QR code
          },
        },
        (error, url) => {
          if (error) {
            console.error(error);
          } else {
            console.log(url);
            setQr(url);
            setIsInputVisible(false);
          }
        }
      );
    }
  };

  // Function to prompt the user for a filename
  const getFileName = () => {
    const fileName = prompt('Enter a filename for the QR code:');

    if (fileName === null) {
      // User canceled the action. The value returned is null. If I use return; here, something like "let fileName = getFileName();" will fail since there's no value to assign. For chrome this leads to an undefined file being downloaded. return null; dosn't tell the program what to do if the fileName is null. What type of action the program needs to take is defined in if (fileName === null) {return;}, in this specific case. 
      return null;
      // fileName.trim() === "" checks if the trimmed version of the filename is an empty string. If the filename consists only of spaces, tabs, or newline characters, the trim() method will remove them, and the condition will evaluate to true, indicating that the filename is empty.
    } else if (fileName.trim() === "") {
      // No filename provided, retry
      alert("Please enter a valid filename.");
      return getFileName();
    } else {
      return fileName;
    }
  };


  // Function to download the generated QR code as a PNG file
  const downloadQRCode = () => {
    let fileName = getFileName();

    // if the fileName, which is from getFileName(), is null, then do nothing (return;) If I have return null here, I move the problem to the next part where downloadQRCode() is used, which is the button. That is not what I want so the action needs to be defined here.
    if (fileName === null) {
      return;
    }
    const fileFormat = DEFAULT_FILE_FORMAT;
    // removes a blank space before the name, and makes sure that all spaces between words are replaced by -
    fileName = fileName.trim().split(" ").join("-");
    let formattedFileName = `${fileName}.${fileFormat}`;

    // Check if qr contains a valid data URL
    if (qr) {
      // Create the download link after the QR code data URL is available
      const downloadLink = document.createElement("a");

      // Set the href attribute to the actual QR code data URL
      downloadLink.href = qr;
      downloadLink.download = formattedFileName;

      // Append the anchor element to the document to make it interactable
      document.body.appendChild(downloadLink);

      // Programmatically trigger a click on the anchor element to initiate the download
      downloadLink.click();

      // Remove the anchor element from the document after the download has been initiated
      document.body.removeChild(downloadLink);
    } else {
      console.error("QR code data is not available.");
      alert("Error generating QR code. Please try again.");
    }
  };

  // Function to reset the state and allow generating a new QR code
  const repeatAction = () => {
    setUrl("");
    setQr("");
    setIsInputVisible(true);
    focusInput(); // Focus on the input element after repeating action
  };

  // Return the state variables and functions to be used in the component
  return {
    url,
    setUrl,
    qr,
    isInputVisible,
    generateQRCode,
    downloadQRCode,
    repeatAction,
    inputRef
  };
};