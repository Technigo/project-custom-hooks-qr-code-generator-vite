/*
This is a custom hook named useQRCodeGenerator. It generates QR codes and downloads them. 

It utilizes the useState hook from React to manage three pieces of state: 
  - url (to store the input URL that will be converted into a QR code)
  - qr (to store the generated QR code data URL)
  - showInput (a boolean to toggle the visibility of an input element in the UI).

The hook has three methods:
- generateQRCode: It converts the provided URL into a QR code, it sets some styling options, it updates the state qr with the generated QR code url and it changes the state showInput to false. It manages this by utilizing the QRCode.toDataURL method.

- downloadQRCode: It allows users to download the generated QR code as a PNG file. The user choses a filename and the download process is handled by creating an anchor element in the DOM.

- repeatAction: Resets the states to allow users to generate a new QR code.

The hook returns an object containing the state variables and methods.
*/

import QRCode from "qrcode";
import { useState } from "react";

export const useQRCodeGenerator = () => {

  const [ url, setUrl ] = useState("")
  const [ qr, setQr ] = useState("")
  const [ showInput, setShowInput ] = useState(true)

  //Calls the toDataURL-function from the QRCode-library. Stores the QRCode-URL in the qr-state. Changes the state showInput
  const generateQRCode = () => {

    QRCode.toDataURL(
      url,
      {
        width: 500,
        margin: 1,
        color: {
          dark: "#335383FF",
          light: "#EEEEEEFF"
        }
      }
    )
      .then(url => {
        setQr(url)
        setShowInput(false)
      })
      .catch(err => console.error(err))
  }

  //Downloads the QRCode as a png with the name the user chooses
  const downloadQRCode = () => {

    const getFileName = () => {
      let fileName = prompt("Chose a file name for the download:")

      if (fileName == "") 
        {fileName = prompt("You didn't enter a file name, please do so:")}

      return fileName
    }

    let theFileName = getFileName()
    if (theFileName) {
      theFileName = theFileName.replace(/\s+/g, '-').toLowerCase()
    
      //Creates an anchortag which is used to download the image
      const anchorElement = document.createElement('a')
      anchorElement.href = qr
      anchorElement.download = `${theFileName}.png`
      document.body.appendChild(anchorElement)

      anchorElement.click()
      document.body.removeChild(anchorElement)
    }
  };

  // Method to reset the states to allow user to generate a new QR code
  const repeatAction = () => {
    setUrl(() => "")
    setQr(() => "")
    setShowInput(true)
  };

  // Return the state variables and functions to be used in the component
  return { 
    url, 
    setUrl, 
    qr, 
    showInput, 
    generateQRCode, 
    downloadQRCode, 
    repeatAction
  };
};
