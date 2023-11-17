import QRCode from "qrcode";
import { useState } from "react";

// Define a custom hook named useQRCodeGenerator
export const useQRCodeGenerator = () => {
    // Reactive State variable to store the input URL
    const [url, setUrl] = useState("");
    // Reactive State variable to store the generated QR code data URL
    const [qr, setQr] = useState("");
    // Reactive State variable to toggle the visibility of the input element - boolean value
    const [showInput, setShowInput] = useState(true);
    //Reactive State variable to change QR code color
    const [color, setColor] = useState("#020617");
    //Reactive State variable to show loading spinner
    const [isLoading, setIsLoading] = useState(false);

    // Function to generate a QR code from the input URL
    const generateQRCode = () => {

      setIsLoading(true);

        QRCode.toDataURL(
            url,
            {
                width: 200,
                margin: 2,
                color: {
                    dark: color,
                    light: "#fdf4ff",
                },
            },
            (err, url) => {
                setTimeout(() => {
                  setIsLoading(false);
                  if (err) {return console.error(err);}
                  else {
                    console.log("Generated QR for:",url);
                    setQr(url);
                    setShowInput(false);
                    console.log(color);
                  }
                }, 3000);
            }
        );
    };

    // Function to download the generated QR code as a PNG file
    const downloadQRCode = () => {
        const getFileName = () => {
            const fileName = prompt(
                "Enter a name for your QR code to be downloaded!"
            );
            return fileName === "" ? getFileName() : fileName;
        };

        let fileName = getFileName();
        fileName = fileName.split(" ").join("-");
        const downloadLink = document.createElement("a");
        downloadLink.href = qr;
        downloadLink.download = `${fileName}.png`;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };

    // Function to reset the state and allow generating a new QR code
    const repeatAction = () => {
        setUrl("");
        setQr("");
        setShowInput(true);
        setColor("#020617")
    };

    // Return the state variables and functions to be used in the component
    return {
        setUrl,
        url,
        setQr,
        qr,
        setShowInput,
        showInput,
        downloadQRCode,
        generateQRCode,
        repeatAction,
        setColor,
        color,
        isLoading,
    };
};
