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
        setQR(url);

        setShowInput(false)
      }
    );
  };

  // Function to download the generated QR code as a PNG file
  const downloadQRCode = () => {

    const getFileName = () => {
      const fileName = prompt('Name your QR code!')

      return fileName === '' ? getFileName() : fileName

    };

    let fileName = getFileName()

    fileName = fileName.split(' ').join('-')
    
    const link = document.createElement('a')

    link.href = qr
    link.download = `${fileName.png}`

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
