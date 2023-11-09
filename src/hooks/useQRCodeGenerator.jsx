import QRCode from "qrcode";
import { useState } from "react";

export const useQRCodeGenerator = (patternColor, setPatternColor, backgroundColor, setBackgroundColor) => {
  // State for the URL input
  const [url, setUrl] = useState("");

  // State for the generated QR code
  const [qr, setQr] = useState("");

  // State to control the visibility of the input field
  const [inputVisible, setInputVisible] = useState(true);

  // State to hold error messages
  const [errorMessage, setErrorMessage] = useState("");

  // Function to generate the QR code
  const generateQRCode = () => {
    console.log(patternColor)
    // Regular expression to validate the URL format.  This regular expression is designed to validate URLs with optional protocols.  It's a broad but effective pattern for checking basic URL formats.
    const validUrlRegex =
      /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;

    // Check if the input URL matches the valid format
    if (validUrlRegex.test(url)) {
      // Generate QR code using the input URL
      QRCode.toDataURL(
        
        url,
        {
          width: 400,
          margin: 2,
          color: {
            dark: `${patternColor}`,
            light: `${backgroundColor}`,
          },
        },
        (err, url) => {
          if (err) {
            // Handle error during QR code generation
            console.error(err);
            setErrorMessage("Error generating QR code");
          } else {
            // Set the generated QR code and hide the input field
            setQr(url);
            setInputVisible(false);
          }
        }
      );
    } else {
      // Set an error message if the input URL is invalid
      setErrorMessage("Oops, enter a valid web address! Hint..");
    }
  };

  // Function to download the generated QR code
  const downloadQRCode = () => {
    // Prompt the user to enter a name for the QR code file
    const getFileName = () => {
      const userInput = prompt("Please enter a name for your QR code");
      // Check if the user entered an empty string as the file name
      if (userInput === "") {
        // If the user entered an empty string, recursively call the getFileName function again
        // This ensures that the user is prompted until a non-empty name is provided
        return getFileName();
      } else {
        // If the user entered a non-empty name, return that name
        return userInput;
      }
    };

    // Get and format the file name
    //Since the value of userEnteredFileName may change each time the user is prompted, it is declared with let.
    let userEnteredFileName = getFileName();
    let formattedFileName = userEnteredFileName.split(" ").join("-");

    // Create a link element to trigger the download

    //a) This line creates a new HTML anchor (<a>) element and assigns it to the constant variable link. This anchor element is used to create a link that triggers the download.
    const link = document.createElement("a");

    //b)  This line sets the href attribute of the anchor element (link) to the value of the qr variable. In the context of a download link, the href attribute typically points to the file or resource that should be downloaded. In this case, it's the QR code image generated earlier
    link.href = qr;

    //c) This line sets the download attribute of the anchor element (link). The download attribute specifies the default file name that the downloaded file should have. In this case, it's set to the formatted file name followed by the .png extension.
    link.download = `${formattedFileName}.png`;

    // Append the link to the document, trigger a click, and remove the link
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Function to reset the state and allow generating a new QR code
  const repeatAction = () => {
    setUrl("");
    setQr("");
    setInputVisible(true);
    setErrorMessage("");
  };

  // Return the state variables and functions to be used in the component
  return {
    url,
    setUrl,
    qr,
    inputVisible,
    generateQRCode,
    repeatAction,
    downloadQRCode,
    errorMessage,
    patternColor, 
    setPatternColor,
    backgroundColor, 
    setBackgroundColor
  };
};
