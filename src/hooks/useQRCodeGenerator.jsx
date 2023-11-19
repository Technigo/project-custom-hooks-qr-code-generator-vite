// Hook Explanation
// This React component, specifically a custom hook named useQRCodeGenerator, is designed to facilitate the generation and downloading of QR codes. Initially, it utilizes the useState hook from React to manage three pieces of state: url (to store the input URL that will be converted into a QR code), qr (to store the generated QR code data URL), and showInput (a boolean to toggle the visibility of an input element in the UI). The hook exposes a method generateQRCode which utilizes the QRCode.toDataURL method to convert the provided URL into a QR code, applying specific styling options, and then updates the state with the generated QR code and hides the input. The downloadQRCode method allows users to download the generated QR code as a PNG file, prompting them to provide a filename and handling the download process via creating an anchor element in the DOM. Lastly, the repeatAction method resets the state to allow users to generate a new QR code. The hook returns an object containing the state variables and methods, enabling them to be utilized in the component where the hook is used.
import QRCode from "qrcode";
import { useState } from "react";

// Define a custom hook named useQRCodeGenerator
export const useQRCodeGenerator = (inputURL) => {
  // Reactive State variable to store the input URL
  const [url, setUrl] = useState(inputURL);

  // Reactive State variable to store the generated QR code data URL
  const [qrCode, setQrCode] = useState("");

  // Reactive State variable to toggle the visibility of the input element - boolean value
  const [isInputVisible, SetIsInputVisible] = useState("true");

  // Function to generate a QR code from the input URL
  const generateQRCode = () => {
    // HINT 1: Utilize the qrcode library that converts a URL to a QR code data URL.
    // Use the Import of the qrcode and chain to the native method toDataUrl() much like the example provided and specify the data within the object that you will be passing such as the {url, {width, margin, color:{dark, light}}} which contains the information to generate the qr-code and url. Lastly, this native method toDataUrl() will contain a callback function  that will update the qr variable and will also update the variable toggling the visibility of the input element.
    QRCode.toDataURL(
      // console.log("Delete This Line OR Comment Out")
      // HINT 2: Ensure to pass the necessary parameters to the QR code generation method, such as the URL to convert and any styling options.
      url,
      {
        width: 300,
        margin: 2,
        color: {
          dark: "#335383FF",
          light: "#EEEEEEFF",
        },
      },
      // HINT 3: Handle the callback of the QR code generation method, which provides the generated QR code data URL.
      (error, url) => {
        // HINT 4: Implement error handling to manage any issues that might occur during QR code generation.
        if (error) return console.error(error);
        // HINT 5: Update the relevant state variables with the generated QR code data URL and adjust the UI accordingly.
        setQrCode(url);
      }
      // HINT 6: Consider the user experience and how the UI should change once the QR code has been generated.
    );
    SetIsInputVisible(false);
  };

  // Function to download the generated QR code as a PNG file
  const downloadQRCode = () => {
    // HINT 1: Consider encapsulating the filename prompting logic into a separate function.
    let cancelDownload = false;

    const getFileName = () => {
      // HINT 2: Use a method to prompt the user for input and store the response.
      let fileName = prompt(`Enter a file name to your download:`);
      cancelDownload = false;
      // HINT 3: Implement a check for an empty filename and utilize recursion to re-prompt the user if necessary.
      if (fileName === "") {
        alert(`Invalid input, please try again`);
        getFileName();
      }

      //debugging file downloading even when clicking cancel on prompt
      if (fileName === null) {
        cancelDownload = true;
      }
      // HINT 4: Ensure the function returns the obtained filename.
      return fileName;
    };

    // HINT 5: Call the above function to retrieve a filename and store it in a variable.
    const fileName = getFileName();

    // HINT 6: Format the filename to ensure it is filesystem-friendly.
    const friendlyFileName = fileName.replace(/[^\w]/g, "_") + ".png";

    // HINT 7: Create an anchor element to facilitate the download.
    const anchor = document.createElement("a");

    // HINT 8: Set the necessary attributes on the anchor element to prepare it for download.
    anchor.href = qrCode;
    anchor.download = friendlyFileName;

    // HINT 9: Append the anchor element to the document to make it interactable.
    document.body.appendChild(anchor);

    // HINT 10: Programmatically trigger a click on the anchor element to initiate the download.
    if (cancelDownload == false) {
      anchor.click();
    }

    // HINT 11: Remove the anchor element from the document after the download has been initiated.
    document.body.removeChild(anchor);
  };

  // Function to reset the state and allow generating a new QR code
  const repeatAction = () => {
    setUrl(""); // Reset the url state to an empty string
    setQrCode(""); // Reset the qr state to an empty string
    SetIsInputVisible(true); // Show the input element back to true :)
  };

  // Return the state variables and functions to be used in the component
  return {
    url,
    setUrl,
    qrCode,
    isInputVisible,
    generateQRCode,
    downloadQRCode,
    repeatAction,
  };
};
