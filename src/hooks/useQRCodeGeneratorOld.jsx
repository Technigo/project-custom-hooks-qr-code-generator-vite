import QRCode from "qrcode";
import { useState } from "react";

// Custom hook named useQRCodeGenerator
export const useQRCodeGenerator = () => {
  // Reactive State variable to store the input URL
  const [url, setUrl] = useState("");

  // Reactive State variable to store the generated QR code data URL
  const [qr, setQr] = useState("");

  // Reactive State variable to toggle the visibility of the input element - boolean value
  const [qrIsVisible, setQrIsVisible] = useState(false);

  const [color, setColor] = useState("#000000");

  const [inputValue, setInputValue] = useState({
    url: "",
    color: "#000000",
  })

  // Function to generate a QR code from the input URL
  const generateQRCode = () => {
    // HINT 1: Utilize the qrccode library that converts a URL to a QR code data URL.
    // Use the Import of the qrcode and chain to the native method toDataUrl() much like the example provided and specify the data within the object that you will be passing such as the {url, {width, margin, color:{dark, light}}} which containes the information to generate the qr-code and url. Lastly, this native method toDataUrl() will contain a callback function  that will update the qr variable and will also update the variable toggling the visibility of the input element.
    QRCode.toDataURL(
      // HINT 2: Ensure to pass the necessary parameters to the QR code generation method, such as the URL to convert and any styling options.
      url,
      color,
      {
        width: 200,
        margin: 2,
      },
      // HINT 3: Handle the callback of the QR code generation method, which provides the generated QR code data URL.
      // HINT 4: Implement error handling to manage any issues that might occur during QR code generation.
      (err, url) => {
        if (err) {
          console.error(err);
        } else {
          console.log(url);
          setQr(url);
          // HINT 5: Update the relevant state variables with the generated QR code data URL and adjust the UI accordingly.
          setQrIsVisible(true); // Update the state to indicate that the QR code is generated
        }
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
    setUrl(""); // Reset the url state to an empty string
    setQr(""); // Reset the qr state to an empty string
    setQrIsVisible(false); // Update the state to indicate that the QR code is not generated
    setColor("#000000")
    // Show the input element back to true :)
  };

  // Return the state variables and functions to be used in the component
  return { url, setUrl, qr, color, inputValue, setInputValue, setColor, generateQRCode, downloadQRCode, repeatAction };
};
