import QRCode from "qrcode";
import { useState } from "react";

export const useQRCodeGenerator = () => {
  const [url, setUrl] = useState("")
  const [qr, setQr] = useState("")
  const [showInput, setShowInput] = useState(true)
  const generateQRCode = () => {
    QRCode.toDataURL(
      url,
      {
        width: 100,
        margin: 2,
        color: {
          dark: "#335383FF",
          light: "#EEEEEEFF",
        },
      },
      (err, generateQRCode) => {
        if (err) {
          console.error(err)
        } else {
          setQr(generateQRCode)
        }
      },
    );
  };

  // Function to download the generated QR code as a PNG file
  const downloadQRCode = () => {
    // HINT 1: Consider encapsulating the filename prompting logic into a separate function.
    const getFileName = () => {
      // HINT 2: Use a method to prompt the user for input and store the response.
      // ...
      // HINT 3: Implement a check for an empty filename and utilize recursion to re-prompt the user if necessary.
      // ...
      // HINT 4: Ensure the function returns the obtained filename.
      // ...
    };

    // HINT 5: Call the above function to retrieve a filename and store it in a variable.
    // ...

    // HINT 6: Format the filename to ensure it is filesystem-friendly.
    // ...

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
    // Reset the url state to an empty string
    setUrl('')
    // Reset the qr state to an empty string
    setQr('')
    // Show the input element back to true :)
    setShowInput(true)
  };

  // Return the state variables and functions to be used in the component
  return {
    url,
    qr,
    showInput,
    generateQRCode,
    setUrl,
    repeatAction,
  };
};
