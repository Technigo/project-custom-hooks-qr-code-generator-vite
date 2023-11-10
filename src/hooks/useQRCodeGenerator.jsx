// Hook Explanation
// This React component, specifically a custom hook named useQRCodeGenerator, is designed to facilitate the generation and downloading of QR codes. Initially, it utilizes the useState hook from React to manage three pieces of state: url (to store the input URL that will be converted into a QR code), qr (to store the generated QR code data URL), and showInput (a boolean to toggle the visibility of an input element in the UI). The hook exposes a method generateQRCode which utilizes the QRCode.toDataURL method to convert the provided URL into a QR code, applying specific styling options, and then updates the state with the generated QR code and hides the input. The downloadQRCode method allows users to download the generated QR code as a PNG file, prompting them to provide a filename and handling the download process via creating an anchor element in the DOM. Lastly, the repeatAction method resets the state to allow users to generate a new QR code. The hook returns an object containing the state variables and methods, enabling them to be utilized in the component where the hook is used.
import QRCode from "qrcode";
import { useState } from "react";

export const useQRCodeGenerator = () => {
  // State variable to store the input URL
  const [url, setUrl] = useState("");

  // State variable to store the generated QR code data URL
  const [qr, setQr] = useState("");

  // State variable to toggle the visibility of the input element (optional)
  const [showInput, setShowInput] = useState(true);

  // Function to generate a QR code from the input URL
  const generateQRCode = () => {
    // Use the QRCode library to convert the URL to a QR code data URL
    QRCode.toDataURL(
      url,
      {
        width: 300,
        margin: 2,
        color: {
          dark: "#34495EFF",
          light: "#EEEEEEFF",
        },
      },
      (err, generatedQr) => {
        if (err) {
          console.error(err);
          // Handle errors if necessary
        } else {
          // Update the QR code state
          setQr(generatedQr);
          // Hide the input element (optional)
          setShowInput(false);
        }
      }
    );
  };

  // Function to download the generated QR code as a PNG file
  const downloadQRCode = () => {
    if (!qr) {
      console.error("QR code not generated yet.");
      return;
    }

    // const getFileName = () => {

    //   const fileName = prompt(
    //     "Please enter a name for the download:",
    //     "Enter a name for your QR Code"
    //   );

    //   return fileName === "" ? getFileName() : fileName;
    // };

    // HINT 5: Call the above function to retrieve a filename and store it in a variable.
    //  let fileName = getFileName();

    // HINT 6: Format the filename to ensure it is filesystem-friendly.
    // fileName = fileName.split(" ").join("-");

    // // HINT 7: Create an anchor element to facilitate the download.
    // const link = document.createElement("a");
    // // HINT 8: Set the necessary attributes on the anchor element to prepare it for download.
    // link.href = qr;
    // link.download = `${fileName}.png`;
    // // HINT 9: Append the anchor element to the document to make it interactable.
    // document.body.appendChild(link);
    // // HINT 10: Programmatically trigger a click on the anchor element to initiate the download.
    // link.click();
    // // HINT 11: Remove the anchor element from the document after the download has been initiated.
    // document.body.removeChild(link);
    // };

    //----------------------TRYING OUT THIS WAY----------------------
    // Formats the filename to ensure it is filesystem-friendly
    const formattedFileName = "qrcode.png";

    // a Blob from the QR code data URL,  (Binary Large Object) is a data type that represents raw binary data. It can be used to store and manipulate binary data, such as images, audio, or other file types
    const blob = new Blob([qr], { type: "image/png" });

    // Create an object URL from the Blob
    const objectURL = URL.createObjectURL(blob);

    // Create an anchor element for download
    const downloadLink = document.createElement("a");

    // Set attributes on the anchor element for download
    downloadLink.href = objectURL;
    downloadLink.download = formattedFileName;

    // Programmatically trigger a click on the anchor element to initiate the download
    downloadLink.click();

    // Revoke the object URL to release resources
    URL.revokeObjectURL(objectURL);
  };

  // Function to reset the state and allow generating a new QR code
  const repeatAction = () => {
    setUrl(""); // Reset the URL
    setQr(""); // Reset the QR code
    setShowInput(true); // Show the input element
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
