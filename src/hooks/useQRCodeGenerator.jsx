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

  const repeatAction = () => {
    setUrl("");
    setQr("");
    
  };

 
  return {
   url, 
   setUrl,
   qr,
   generateQRCode,
   downloadQRCode,
   repeatAction,
  };
};
     

      