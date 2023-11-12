// Hook Explanation
// This React component, specifically a custom hook named useQRCodeGenerator, is designed to facilitate the generation and downloading of QR codes. Initially, it utilizes the useState hook from React to manage three pieces of state: url (to store the input URL that will be converted into a QR code), qr (to store the generated QR code data URL), and showInput (a boolean to toggle the visibility of an input element in the UI). The hook exposes a method generateQRCode which utilizes the QRCode.toDataURL method to convert the provided URL into a QR code, applying specific styling options, and then updates the state with the generated QR code and hides the input. The downloadQRCode method allows users to download the generated QR code as a PNG file, prompting them to provide a filename and handling the download process via creating an anchor element in the DOM. Lastly, the repeatAction method resets the state to allow users to generate a new QR code. The hook returns an object containing the state variables and methods, enabling them to be utilized in the component where the hook is used.
import QRCode from "qrcode";
import { useState, useRef } from "react";

// Define a custom hook named useQRCodeGenerator
export const useQRCodeGenerator = () => {
  const downloadRef = useRef(null);

  // Reactive State variable to store the input URL
  //   const ...
  const [inputURL, setInputURL] = useState("");

  // Reactive State variable to store the generated QR code data URL
  //   const ...
  const [qrData, setQRData] = useState("");

  // Reactive State variable to toggle the visibility of the input element - boolean value
  //   const ...
  const [inputVisibility, setInputVisibility] = useState(true);

  // Function to generate a QR code from the input URL
  const generateQRCode = async () => {
    // HINT 1: Utilize the qrccode library that converts a URL to a QR code data URL.
    // Use the Import of the qrcode and chain to the native method toDataUrl() much like the example provided and specify the data within the object that you will be passing such as the {url, {width, margin, color:{dark, light}}} which containes the information to generate the qr-code and url. Lastly, this native method toDataUrl() will contain a callback function  that will update the qr variable and will also update the variable toggling the visibility of the input element.
    try {
      const qrCreate = await QRCode.toDataURL(inputURL, {
        width: 600,
        margin: 2,
      });

      setQRData(qrCreate);
      setInputVisibility(false);
    } catch (err) {
      console.log("Error: " + err);
    }
  };

  // HINT 2: Ensure to pass the necessary parameters to the QR code generation method, such as the URL to convert and any styling options.
  // ...
  // HINT 3: Handle the callback of the QR code generation method, which provides the generated QR code data URL.
  // ...
  // HINT 4: Implement error handling to manage any issues that might occur during QR code generation.
  // ...
  // HINT 5: Update the relevant state variables with the generated QR code data URL and adjust the UI accordingly.
  // ...
  // HINT 6: Consider the user experience and how the UI should change once the QR code has been generated.
  // ...

  // Function to download the generated QR code as a PNG file
  const downloadQRCode = () => {
    // HINT 1: Consider encapsulating the filename prompting logic into a separate function.
    const getFileName = () => {
      // HINT 2: Use a method to prompt the user for input and store the response.
      // ...
      let userFileName = prompt("Name the file: ");
      if (userFileName !== "" && userFileName !== null) {
        userFileName = userFileName.replace(/[\\/:"*?<>|]/g, "");

        // Replace spaces with underscores and remove leading/trailing spaces
        userFileName = userFileName.replace(/\s+/g, "_").trim();

        // Limit the fileName length
        if (userFileName.length > 30) {
          userFileName = userFileName.substring(0, 30);
        }
      }
      // HINT 3: Implement a check for an empty filename and utilize recursion to re-prompt the user if necessary.
      // ...
      // HINT 4: Ensure the function returns the obtained filename.
      // ...

      // if (userFileName === "") {
      //   alert("You need to provide a filename", "qr.png");
      //   return getFileName();
      // } else {
      //   return userFileName;
      // }

      return userFileName === "" ? getFileName() : userFileName;
    };

    // HINT 5: Call the above function to retrieve a filename and store it in a variable.
    // ...
    let fileName = getFileName();

    const formattedFileName = `${fileName}QR.png`;

    //Using useRef
    let downloadLink = downloadRef.current;
    downloadLink.href = qrData;
    downloadLink.download = formattedFileName;
    downloadLink.click();

    //Using vanillaJS
    // let downloadLink = document.createElement("a");
    // downloadLink.href = qrData;
    // downloadLink.download = formattedFileName;
    // document.body.appendChild(downloadLink);
    // downloadLink.click();

    // Remove the anchor element from the document (optional)
    // document.body.removeChild(downloadLink);

    // <a href={qrData} download={`${formattedFileName}QR.png`}>
    //   Download image
    // </a>;

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
    setInputURL("");
    // Reset the qr state to an empty string
    setQRData("");
    // Show the input element back to true :)
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
