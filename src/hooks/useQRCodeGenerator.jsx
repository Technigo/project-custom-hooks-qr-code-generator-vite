

import QRCode from "qrcode";
import { useState } from "react";

// Define a custom hook named useQRCodeGenerator
export const useQRCodeGenerator = () => {



  // Reactive State variable to store the input URL
  const [url, setUrl] = useState("");

  // Reactive State variable to store the generated QR code data URL
  const [qr, setQr] = useState("");

  // Reactive State variable to toggle the visibility of the input element - boolean value
  const [hasQrCode, setHasQrCode] = useState(false);



  // Function to generate a QR code from the input URL
  const generateQRCode = () => {
   
    QRCode.toDataURL(
      url,
      {
        width: 300,
        margin: 2,
        color: {
          dark: "#bb2c73",
          light: "#d5e7fa",
        },
      },
      (err, url) => {
        if (err) return console.error(err);

        console.log(url);
        setQr(url);
        setHasQrCode(true)
      }
    
     
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
  
  };

  // Return the state variables and functions to be used in the component
  return {generateQRCode, downloadQRCode, repeatAction, hasQrCode, url, setUrl, qr};
};
