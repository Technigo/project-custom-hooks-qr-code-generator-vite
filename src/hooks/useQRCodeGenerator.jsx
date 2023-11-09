// Hook Explanation
// This React component, specifically a custom hook named useQRCodeGenerator, is designed to facilitate the generation and downloading of QR codes. Initially, it utilizes the useState hook from React to manage three pieces of state: url (to store the input URL that will be converted into a QR code), qr (to store the generated QR code data URL), and showInput (a boolean to toggle the visibility of an input element in the UI). The hook exposes a method generateQRCode which utilizes the QRCode.toDataURL method to convert the provided URL into a QR code, applying specific styling options, and then updates the state with the generated QR code and hides the input. The downloadQRCode method allows users to download the generated QR code as a PNG file, prompting them to provide a filename and handling the download process via creating an anchor element in the DOM. Lastly, the repeatAction method resets the state to allow users to generate a new QR code. The hook returns an object containing the state variables and methods, enabling them to be utilized in the component where the hook is used.


import QRCode from "qrcode";
import { useEffect, useState } from "react";

// Define a custom hook named useQRCodeGenerator
export const useQRCodeGenerator = () => {



  // Reactive State variable to store the input URL
  const [url, setUrl] = useState("");

  // Reactive State variable to store the generated QR code data URL
  const [qr, setQr] = useState("");

  // Reactive State variable to toggle the visibility of the input element - boolean value
  const [hasQrCode, setHasQrCode] = useState(false);

  useEffect(() => {

  }, [])

  // Function to generate a QR code from the input URL
  const generateQRCode = () => {
    // HINT 1: Utilize the qrccode library that converts a URL to a QR code data URL.
    // Use the Import of the qrcode and chain to the native method toDataUrl() much like the example provided and specify the data within the object that you will be passing such as the {url, {width, margin, color:{dark, light}}} which containes the information to generate the qr-code and url. Lastly, this native method toDataUrl() will contain a callback function  that will update the qr variable and will also update the variable toggling the visibility of the input element.
    QRCode.toDataURL(
      url,
      {
        width: 300,
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
        setHasQrCode(true)
      }
    
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
    );
  };

  // Function to download the generated QR code as a PNG file
  const downloadQRCode = () => {
    // HINT 1: Consider encapsulating the filename prompting logic into a separate function.
    const getFileName = () => {
      let fileName = prompt("please give a name to the file:")
      if(!fileName && fileName != null){
          alert("the file name is required.")
          getFileName()
          return;
      }
      return fileName;
    };

    let fileName = getFileName();
    if(fileName === null){
      return;
    }
    fileName = fileName.toLowerCase().trim();
    var download = document.createElement('a')
    download.download = `${fileName}.png`
    download.href = qr
    download.target = '_blank'
    download.click();
    download.remove()
  };

  // Function to reset the state and allow generating a new QR code
  const repeatAction = () => {
    setUrl("");
    setQr("")
    setHasQrCode(false)
    // Reset the url state to an empty string
    // Reset the qr state to an empty string
    // Show the input element back to true :)
  };

  // Return the state variables and functions to be used in the component
  return {generateQRCode, downloadQRCode, repeatAction, hasQrCode, url, setUrl, qr};
};
