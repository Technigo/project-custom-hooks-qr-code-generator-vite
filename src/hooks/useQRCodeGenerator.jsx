import QRCode from "qrcode";
import { useState } from "react";

// The url, setUrl, qr, showInput, generateQRCode, downloadQRCode, and repeatAction variables and functions are derived from the useQRCodeGenerator hook, providing the necessary state and actions to manage the QR code generation process.

// Define a custom hook named useQRCodeGenerator
export const QRgenerator = () => {
  // Reactive State variable to store the input URL
  const [url, setUrl] = useState("");
 

  // Reactive State variable to store the generated QR code data URL
  const [qr, setQr] = useState("");
  // Reactive State variable to toggle the visibility of the input element - boolean value
  const [showInput, setShowInput] = useState(true);
  // Function to generate a QR code from the input URL
  const generateQRCode = () => {
    // HINT 1: Consider encapsulating the QR code generation logic into a separate function.
    const generateQRCode = async (text) => {
  try {
      const url = await QRCode.toDataURL(text);
      setQRCodeURL(url);
    } catch (err) {
      console.error(err);
    }
  };
    // HINT 1: Utilize the qrccode library that converts a URL to a QR code data URL.

    // Use the Import of the qrcode and chain to the native method toDataUrl() much like the example provided and specify the data within the object that you will be passing such as the {url, {width, margin, color:{dark, light}}} which containes the information to generate the qr-code and url. Lastly, this native method toDataUrl() will contain a callback function  that will update the qr variable and will also update the variable toggling the visibility of the input element.
    QRCode.toDataURL(

      // HINT 2: Ensure to pass the necessary parameters to the QR code generation method, such as the URL to convert and any styling options.
      url,
      {
        width: 100,
        margin: 2,
        color: {
          dark: "#335383FF",
          light: "#EEEEEEFF",
        },
      },
      (err, url) => {
        if (err) return console.error(err);

        console.log(url);
        setQr(url);
      }
    );

      

      // HINT 3: Handle the callback of the QR code generation method, which provides the generated QR code data URL.



      // ...
      // HINT 4: Implement error handling to manage any issues that might occur during QR code generation.
      // ...
      // HINT 5: Update the relevant state variables with the generated QR code data URL and adjust the UI accordingly.
      // ...
      // HINT 6: Consider the user experience and how the UI should change once the QR code has been generated.
      // ...
    //

  };

  // Function to download the generated QR code as a PNG file
  const downloadQRCode = () => {

    // HINT 1: Consider encapsulating the filename prompting logic into a separate function.
    const getFileName = () => {


      // HINT 2: Use a method to prompt the user for input and store the response.
      const fileName = prompt("Please enter a file name");
      // HINT 3: Implement a check for an empty filename and utilize recursion to re-prompt the user if necessary.
      if (fileName === "") {
        getFileName();
      }
      // ...
      // HINT 4: Ensure the function returns the obtained filename.
      return fileName;

      // ...
    };

    // HINT 5: Call the above function to retrieve a filename and store it in a variable.
    
    // HINT 6: Format the filename to ensure it is filesystem-friendly.

    // HINT 7: Create an anchor element to facilitate the download.
    const anchor = document.createElement("a");

    // HINT 8: Set the necessary attributes on the anchor element to prepare it for download.
    anchor.setAttribute("href", qr);

    // HINT 9: Append the anchor element to the document to make it interactable.
    document.body.appendChild(anchor);

    // HINT 10: Programmatically trigger a click on the anchor element to initiate the download.
    anchor.click();

    // HINT 11: Remove the anchor element from the document after the download has been initiated.
    document.body.removeChild(anchor);
  };

  // Function to reset the state and allow generating a new QR code

    // Reset the url state to an empty string

    // Reset the qr state to an empty string

    // Show the input element back to true :)

  // Return the state variables and functions to be used in the component

generateQRCode();

downloadQRCode();

return { url, setUrl, qr, showInput, generateQRCode, downloadQRCode, repeatAction };

};

// Export the custom hook
export default QRgenerator;

