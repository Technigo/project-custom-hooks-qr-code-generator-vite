import QRCode from "qrcode";
import { useState } from "react";

// Custom hook named useQRCodeGenerator
export const useQRCodeGenerator = () => {
  // State variable to store the input URL
  const [url, setUrl] = useState("");

  // State variable to store the generated QR code data URL
  const [qr, setQr] = useState("");

  // State variable to toggle the visibility of the input element
  const [showInput, setShowInput] = useState(true);

  // Function to generate a QR code from the input URL
  const generateQRCode = () => {
    // QRCode.toDataUrl is a function that takes in a URL and styling options and returns a data URL of the generated QR code, which can be used to display the QR code on the screen or download it as a PNG file.
    QRCode.toDataURL(
      url,
      // Defines the styling of the QR code
      {
        width: 300,
        margin: 4,
        color: {
          dark: "#edabd0",
          light: "#ffffffff"
        },
      },
      (err, url) => {
        // Handles any errors that might occur during QR code generation
        if (err) {
          console.error("QR code could not be created: ", err);
          alert("QR code could not be created, please try again");
          return;
        } else {
          // Logs the generated QR code data URL to the console
          console.log("The Qr Code url is: ", url);
          // setQr is a function that updates the qr state with the generated QR code data URL, the QR code data url is saved in the state qr
          setQr(url);
          setShowInput(false);
        }
      }
    );
  };

  // ------

  // The downloadQRCode method allows users to download the generated QR code as a PNG file, prompting them to provide a filename and handling the download process via creating an anchor element in the DOM. 

  // ------

  // Function to download the generated QR code as a PNG file
  const downloadQRCode = () => {
    // HINT 1: Consider encapsulating the filename prompting logic into a separate function.
    const getFileName = () => {
      // Asks the user to provide a filename for the QR code
      let fileName = prompt("Please enter a filename for your QR code", "qrcode.png")
      // If the user does not provide a filename, call the function  again to re-prompt the user.
      if (!fileName || fileName === "") {
        return getFileName();
      }
      console.log("The filename is: ", fileName);
      // If the user provides a filename, return the filename.
      return fileName;
    };

    // Gets the specified filename from the user and stores it in a variable
    const fileName = getFileName();

    // Formats the filename to ensure it is filesystem-friendly (removes spaces, special characters etc).
    const cleanFileName = fileName.replace(/\s+/g, "_").replace(/[^a-zA-Z0-9_.-]/g, "");
    console.log("The clean filename is: ", cleanFileName);

    // HINT 7: Create an anchor element to facilitate the download.
    // ...

    // HINT 8: Set the necessary attributes on the anchor element to prepare it for download.
    // ...

    // HINT 9: Append the anchor element to the document to make it interactable.
    // ...

    // HINT 10: Programmatically trigger a click on the anchor element to initiate the download.
    // ...

    // HINT 11: Remove the anchor element from the document after the download has been initiated.
    // ...
  };

  // Function to reset the state and allow generating a new QR code
  const repeatAction = () => {
    // Resets the state variables to their initial values
    setUrl("");
    setQr("");
    setShowInput(true);
    console.log(showInput);
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
