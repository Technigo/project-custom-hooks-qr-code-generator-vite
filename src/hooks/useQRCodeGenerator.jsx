import QRCode from "qrcode";
import { useState, useRef } from "react";


export const useQRCodeGenerator = () => {
  const [url, setUrl] = useState("");
  const [qr, setQr] = useState("");
  const inputVisible = useRef(true);

  const toggleInputVisibility = () => {
    inputVisible.current = !inputVisible.current;
  };

  
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
      (err, generatedQRCode) => {
        if (err) return console.error(err);

        console.log(generatedQRCode);
        setQr(generatedQRCode);
     }
     );
    };

 
  const downloadQRCode = () => {
    const fileName = prompt("Enter filename for the QR code image:", "qrcode");
         if (fileName === null) {
            return;
          } else if (fileName.trim() === "") {
          alert("Please enter a valid filename");
          return downloadQRCode();
        }

const formattedFileName = fileName.replace(/\s/g, "_") + ".png";
const downloadLink = document.createElement("a");
downloadLink.href = qr;
downloadLink.download = formattedFileName;

document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    };


   

    

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
  

  // Function to reset the state and allow generating a new QR code
  const repeatAction = () => {
    setUrl("");
    setQr("");
    // Show the input element back to true :)
  };

  // Return the state variables and functions to be used in the component
  return {
   url, 
   setUrl,
   qr,
   generateQRCode,
   downloadQRCode,
   repeatAction,
  };
};
     

      