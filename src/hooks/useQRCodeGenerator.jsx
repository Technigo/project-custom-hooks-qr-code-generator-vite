// Hook Explanation
// This React component, specifically a custom hook named useQRCodeGenerator, is designed to facilitate the generation and downloading of QR codes. Initially, it utilizes the useState hook from React to manage three pieces of state: url (to store the input URL that will be converted into a QR code), qr (to store the generated QR code data URL), and showInput (a boolean to toggle the visibility of an input element in the UI). The hook exposes a method generateQRCode which utilizes the QRCode.toDataURL method to convert the provided URL into a QR code, applying specific styling options, and then updates the state with the generated QR code and hides the input. The downloadQRCode method allows users to download the generated QR code as a PNG file, prompting them to provide a filename and handling the download process via creating an anchor element in the DOM. Lastly, the repeatAction method resets the state to allow users to generate a new QR code. The hook returns an object containing the state variables and methods, enabling them to be utilized in the component where the hook is used.
import QRCode from "qrcode";
import { useState } from "react";

export const useQrCodeGenerator = () => {
    const [qr, setQr] = useState(null);
    const [error, setError] = useState(false);

    const generateQrCode = (url) => {
        QRCode.toDataURL(
            url,
            {
                width: 300,
                margin: 2,
                color: {
                    dark: "#000000",
                    light: "#FFFFFF",
                },
            },
            (errorInformation, generatedQrCode) => {
                if (errorInformation) {
                    console.error(errorInformation);
                    setError(true);
                } else {
                    setError(false);
                    setQr(generatedQrCode);
                }
            }
        );
    };

    // Function to download the generated QR code as a PNG file
    const downloadQrCode = () => {
        const getFileName = (messageToUser = "Enter a filename for your QR code.") => {
            const fileNameEnteredByUser = prompt(messageToUser);
            if (fileNameEnteredByUser === null) {
                return null;
            }

            if (fileNameEnteredByUser === "") {
                return getFileName("The filename cannot be empty, enter a filename for your QR code.");
            }

            return fileNameEnteredByUser;
        };

        const fileName = getFileName();
        if (fileName === null) {
            return;
        }

        const link = document.createElement("a");

        link.href = qr;
        link.download = `${fileName}.png`;

        // Append to html link element page
        document.body.appendChild(link);

        // Start download
        link.click();

        // Clean up and remove the link
        link.parentNode.removeChild(link);
    };

    // Function to reset the state and allow generating a new QR code
    const reset = () => {
        setQr(null);
        setError(false);
    };

    return {
        qr,
        error,
        reset,
        generateQrCode,
        downloadQrCode,
    };
};
