import QRCode from "qrcode";
import { useState } from "react";

export const useQRCodeGenerator = () => {
  //State variable to store the input URL
  const [url, setUrl] = useState();
  //State variable to store the generated QR code data URL
  const [qrCode, setQrCode] = useState();
  //State variable to toggle the visibility of the input element - boolean value
  const [showInput, setShowInput] = useState(true);
  //Function to generate a QR code from the input URL
  const generateQRCode = () => {
    // This is a call to the toDataURL function from the QRCode library, which bases a QR code based on parameters.
    QRCode.toDataURL(
      url,
      {
        width: 500,
        margin: 2,
        color: {
          dark: "#2D3D31",
          light: "#EEEEEEFF",
        },
      }, (err, url) => {
        console.log("error ", err);
        if (err) {
          console.error("QR code could not be created, please try again", err)
          alert("QR code could not be created, please try again");
          return;
        } else {
          console.log("The Qr Code url is:", url);
          setQrCode(url);
          setShowInput(false)
        }
      }
    );
  };

  // Function to download the generated QR code as a PNG file
  const downloadQRCode = () => {
    const getFileName = () => {
      // Use a method to prompt the user for input and store the response.
      let fileName = prompt("Please enter a name for your QR code:", "name your QR code")

      //Implement a check for an empty filename and utilize recursion to re - prompt the user if necessary.
      if (!fileName || fileName === "") {
        return getFileName();
      }
      return fileName;
    };
    // Call the above function to retrieve a filename and store it in a variable.
    const fileName = getFileName();

    //Format the filename to ensure it is filesystem-friendly.
    const cleanFileName = fileName.replace(/\s+/g, "_").replace(/[^a-zA-Z0-9_.-]/g, "");
    console.log("The clean filename is: ", cleanFileName);

    // Create an anchor element to facilitate the download.
    const aElement = document.createElement('a');
    aElement.href = qrCode;
    aElement.download = `${cleanFileName}.png`
    document.body.appendChild(aElement);
    aElement.click();
    document.body.removeChild(aElement)
  };

  // Function to reset the state and allow generating a new QR code
  const repeatAction = () => {
    setUrl("");
    setQrCode("");
    setShowInput(true)

  };
  // Return the state variables and functions to be used in the component
  return {
    url,
    setUrl,
    qrCode,
    generateQRCode,
    showInput,
    downloadQRCode,
    repeatAction,

  }
};


