import QRCode from "qrcode";
import { useState } from 'react'

// Define a custom hook named useQRCodeGenerator
export const useQRCodeGenerator = () => {
  // Reactive State variable to store the input URL
  const [url, setURL] = useState('')

  // Reactive State variable to store the generated QR code data URL
  const [qr, setQR] = useState('')

  // Reactive State variable to toggle the visibility of the input element - boolean value
  const [showInput, setShowInput] = useState(true)

  // Function to generate a QR code from the input URL
  const generateQRCode = () => {
    QRCode.toDataURL(
      url,
      {
        width: 200,
        margin: 2,
        color: {
          dark: "#461a74",
          light: "#f2e6ff",
        },
      },
      (err, url) => {
        if (err) return console.error(err);

        console.log(url);
        setQR(url);

        setShowInput(false)
      }
    );
  };

  // Function to download the generated QR code as a PNG file
  const downloadQRCode = () => {

    const getFileName = () => {
      const fileName = prompt('Give a name to your mystical cipher...')

      return fileName === '' ? getFileName() : fileName

    };

    let formatFileName = getFileName()
    let fileName = formatFileName.split(" ").join("-")
    
    const link = document.createElement('a')

    link.href = qr
    link.download = `${fileName}.png`

    document.body.appendChild(link)
    
    link.click()
    
    document.removeChild(link)
  };

  // Function to reset the state and allow generating a new QR code
  const repeatAction = () => {
    setURL('')
    setQR('')
    setShowInput(true)
  };

  return {
    url,
    setURL,
    qr,
    showInput,
    generateQRCode,
    downloadQRCode,
    repeatAction
  };
};
