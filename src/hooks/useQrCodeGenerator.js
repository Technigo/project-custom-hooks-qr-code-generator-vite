import QRCode from "qrcode";
import { useState } from "react";

export const useQrCodeGenerator = () => {
    const [qr, setQr] = useState(null); // State to store generated QR code
    const [error, setError] = useState(false); // State to track if there's an error

    const generateQrCode = (url) => {
        // Function to generate QR code from a URL
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
                    setError(true); // Set error state if there's an error generating QR code
                } else {
                    setError(false);
                    setQr(generatedQrCode); // Set generated QR code to state
                }
            }
        );
    };

    const downloadQrCode = () => {
        // Function to download the generated QR code as a PNG file
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

        link.href = qr; // Set the URL of the generated QR code
        link.download = `${fileName}.png`; // Set the filename for the downloaded file

        // Append to html link element page
        document.body.appendChild(link);

        // Start download
        link.click();

        // Clean up and remove the link
        link.parentNode.removeChild(link);
    };

    const reset = () => {
        // Function to reset the state and allow generating a new QR code
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
