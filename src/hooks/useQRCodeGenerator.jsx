
import { useState } from "react";
import QRCode from "qrcode";

// A custom React hook named useQRCodeGenerator
export const useQRCodeGenerator = (inputURL) => {
    // State variable to store the input URL, initialized with inputURL
const [url, setURL] = useState(inputURL);

// State variable to store the generated QR code data URL
const [qrCode, setQrCode] = useState("");

// State variable to control the visibility of the input field, initialized as true
const [isInputVisible, SetIsInputVisible] = useState("true");

// Function to generate a QR code from the current URL state
const generateQRCode = () => {
// Generating a QR code from the 'url' state variable
QRCode.toDataURL(
url, // The URL to convert into a QR code
{
width: 300, // Sets the width of the generated QR code image
margin: 2, // Sets the margin around the QR code
color: {
    dark: "#006600", // Color for the "dark" parts of the QR code
    light: "#FFFFFF", // Background or "light" color of the QR code
},
},
(err, url) => { // Callback function after QR code generation
if (err) return console.error(err); // Logs error to console if any

console.log(url); // Logs the generated QR code URL to the console
setQrCode(url); // Updates the qrCode state with the new QR code URL
}
);
SetIsInputVisible(false); // Hides the input field after generating the QR code
};

    // Function to prompt the user for a filename and download the QR code
    const downloadQRCode = () => {
let cancelDownload = false;

const getFileName = () => {
let fileName = prompt('Enter a file name for your download:');
if (fileName === "") {
    alert('Invalid input, please try again');
    getFileName(); // Recursively calls itself if input is invalid
}

if (fileName === null) {
    cancelDownload = true; // Sets flag to cancel download if user cancels prompt
}

return fileName; // Returns the filename provided by the user
};

const fileName = getFileName(); // Retrieves filename from user

if (cancelDownload) return; // Exits the function if download was cancelled

const friendlyFileName = fileName.replace(/[^\w]/g, "_") + ".png"; // Sanitizes filename

const anchor = document.createElement("a"); // Creates an anchor element for download
anchor.href = qrCode; // Sets href to the QR code data URL
anchor.download = friendlyFileName; // Sets the download attribute to the sanitized filename

document.body.appendChild(anchor); // Adds the anchor to the document
anchor.click(); // Triggers the download
document.body.removeChild(anchor); // Removes the anchor from the document
};

// Function to clear the URL and QR code states and show the input field again
const repeatAction = () => {
setURL(""); // Clears the URL state
setQrCode(""); // Clears the QR code state
SetIsInputVisible(true); // Shows the input field again
};

// The hook returns an object containing state variables and functions
return {
url,
setURL,
qrCode,
isInputVisible,
generateQRCode,
downloadQRCode,
repeatAction,
};
};

