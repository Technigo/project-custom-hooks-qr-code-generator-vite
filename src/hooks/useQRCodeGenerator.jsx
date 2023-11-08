// Hook Explanation
// This React component, specifically a custom hook named useQRCodeGenerator, is designed to facilitate the generation and downloading of QR codes. Initially, it utilizes the useState hook from React to manage three pieces of state: url (to store the input URL that will be converted into a QR code), qr (to store the generated QR code data URL), and showInput (a boolean to toggle the visibility of an input element in the UI). The hook exposes a method generateQRCode which utilizes the QRCode.toDataURL method to convert the provided URL into a QR code, applying specific styling options, and then updates the state with the generated QR code and hides the input. The downloadQRCode method allows users to download the generated QR code as a PNG file, prompting them to provide a filename and handling the download process via creating an anchor element in the DOM. Lastly, the repeatAction method resets the state to allow users to generate a new QR code. The hook returns an object containing the state variables and methods, enabling them to be utilized in the component where the hook is used.
import QRCode from "qrcode";
import { useState } from "react";

// Define a custom hook named useQRCodeGenerator
export const useQRCodeGenerator = () => {
  // variable to store the input URL
  const [url, setUrl] = useState("");
  // variable to store the generated QR code data URL
  const [qr, setQr] = useState("");

  //variable to toggle the visibility of the input element - boolean value
  const [hideButtons, setHideButtons] = useState(true);

  // Function to generate a QR code from the input URL
  const generateQRCode = () => {
    setHideButtons(false);
    // HINT 1: Utilize the qrccode library that converts a URL to a QR code data URL.
    // Use the Import of the qrcode and chain to the native method toDataUrl() much like the example provided and specify the data within the object that you will be passing such as the {url, {width, margin, color:{dark, light}}} which containes the information to generate the qr-code and url. Lastly, this native method toDataUrl() will contain a callback function  that will update the qr variable and will also update the variable toggling the visibility of the input element.
    QRCode.toDataURL(
      url,
      {
        width: 200,
        margin: 2,
        color: {
          dark: "#335383FF",
          light: "#EEEEEEFF",
        },
      },
      (err, url) => {
        if (err) return console.error(err);
        setQr(url);
        console.log(`qr is:`, qr);
      }
    );
  };

  // HINT 6: Consider the user experience and how the UI should change once the QR code has been generated.
  // ...

  // Function to download the generated QR code as a PNG file
  const downloadQRCode = () => {
    // HINT 1: Consider encapsulating the filename prompting logic into a separate function.
    const getFileName = () => {
      // HINT 2: Use a method to prompt the user for input and store the response.
      function askForFileName() {
        return prompt("Please enter a file name.");
      }
      const userFileName = askForFileName();
      // HINT 3: Implement a check for an empty filename and utilize recursion to re-prompt the user if necessary.

      if (!userFileName) {
        getFileName();
        return;
      }
      // HINT 4: Ensure the function returns the obtained filename.
      return userFileName;
    };

    // HINT 5: Call the above function to retrieve a filename and store it in a variable.
    const userFileName = getFileName();

    // HINT 6: Format the filename to ensure it is filesystem-friendly.
    const formattedFileName = userFileName + ".png";
    console.log(`the formatted file name is: `, formattedFileName);

    // HINT 7: Create an anchor element to facilitate the download.
    const anchor = document.createElement("a");

    // HINT 8: Set the necessary attributes on the anchor element to prepare it for download.
    anchor.href = qr;
    anchor.download = formattedFileName;
    // HINT 9: Append the anchor element to the document to make it interactable.

    // HINT 10: Programmatically trigger a click on the anchor element to initiate the download.

    anchor.textContent = "get QRcode";
    document
      .querySelector("#insertHere")
      ?.insertAdjacentElement("beforeend", anchor);
    anchor.addEventListener("click", () => {
      anchor.remove();
      repeatAction();
    });
    // HINT 11: Remove the anchor element from the document after the download has been initiated.
  };

  // Function to reset the state and allow generating a new QR code
  const repeatAction = () => {
    // Reset the url state to an empty string
    setUrl("");
    // Reset the qr state to an empty string
    setQr("");
    // Show the input element back to true :)
    setHideButtons(true);
  };

  // Return the state variables and functions to be used in the component
  return {
    url,
    setUrl,
    generateQRCode,
    qr,
    downloadQRCode,
    repeatAction,
    hideButtons,
    setHideButtons,
  };
};
