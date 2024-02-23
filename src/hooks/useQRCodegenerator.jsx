import { useState } from "react";
import QRCode from "qrcode";

export const useQRCodeGenerator = inputURL => {

    // Reactive State variable to store the input URL
    const [url, setURL] =(inputURL);

    const [qrCode, setQrCode] = useState(inputURL);

    const [isInputVisible, SetIsInputVisible] = useState("true");


 const generateQRCode = () => {
    // Use the 'QRCode.toDataURL' method to generate a QR code from the input URL.
    QRCode.toDataURL(
      url, // Input URL
      {
        width: 300, // Width of the QR code image
        margin: 2, // Margin around the QR code
        color: {
          dark: "#335383FF", // Dark color of the QR code
          light: "#EEEEEEFF", // Light color of the QR code
        },
      },
      // Callback function that runs after the QR code is generated.
      (err, url) => {
        if (err) return console.error(err);

        // Log the generated QR code image URL to the console.
        console.log(url);
        // Set the 'qr' state variable to store the generated QR code image URL.
        setQrCode(url);
      }
    );
    SetIsInputVisible(false);
 }
};

const downloadQRCode = () => {

 let cancelDownload = false;
 
 const getFileName () => {

    let fileName = prompt('enter a file name to your download');
    cancelDownload = false;

    if (fileName === "") {
        alert('Invalid input, please try again')
        getFileName();
    }
 }
 
}
//Evelyn jag är här nu