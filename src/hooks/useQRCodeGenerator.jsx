import QRCode from "qrcode";
import { useState } from "react";

// Custom hook named useQRCodeGenerator
export const useQRCodeGenerator = () => {
  // State variable to store the input URL
  const [url, setUrl] = useState("");
  // State variable to store the generated QR code data URL
  const [qr, setQr] = useState("");
  // State variable to toggle the visibility of the input element
  const [showInput, setShowInput] = useState(true);
  // State variable to toggle the visibility of the Lottie animation
  const [showAnimation, setShowAnimation] = useState(false);
  const [colorLight, setColorLight] = useState("#ffffffff");
  const [colorDark, setColorDark] = useState("#D0011C");
  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  // Function to handle the color change. setDisplayColorPicker is a function that updates the displayColorPicker state with the opposite of its current value
  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  // Handles the closing of the color picker, sets displayColorPicker to false
  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  // Function to handle the change of the dark color
  const handleChangeDarkColor = (color) => {
    setColorDark(color.hex);
  };

  // Commented out because I want to save the functionality for later
  // Function to handle the change of the light color
  // const handleChangeLightColor = (color) => {
  //   setColorLight(color.hex);
  // };

  // Defines the styling of the color picker popover
  const popover = {
    position: 'absolute',
    zIndex: '2',
  };

  // Defines the styling of the color picker cover
  const cover = {
    position: 'fixed',
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px',
  };

  // Function to generate a QR code from the input URL
  const generateQRCode = () => {
    if (url.trim() === "") {
      // If the input is empty or contains only whitespace, don't show the spinner.
      return;
    }
    // Show the animation
    setShowAnimation(true);

    // QRCode.toDataUrl is a function that takes in a URL and styling options and returns a data URL of the generated QR code, which can be used to display the QR code on the screen or download it as a PNG file.
    QRCode.toDataURL(
      url,
      // Defines the styling of the QR code
      {
        width: 300,
        margin: 2,
        color: {
          dark: colorDark,
          light: colorLight,
        },
      },
      (err, url) => {
        setTimeout(() => {
          setShowAnimation(false); // Hide the animation.
          // Handles any errors that might occur during QR code generation
          if (err) {
            console.error("QR code could not be created: ", err);
            alert("QR code could not be created, please try again");
            return;
          } else {
            // setQr is a function that updates the qr state with the generated QR code data URL, the QR code data url is saved in the state qr
            setQr(url);
            setShowInput(false);
          }
        }, 3000);
      }
    );
  };

  // Function to download the generated QR code as a PNG file
  const downloadQRCode = () => {
    // HINT 1: Consider encapsulating the filename prompting logic into a separate function.
    const getFileName = () => {
      // Asks the user to provide a filename for the QR code
      const fileName = prompt("Please enter a filename for your QR code", "qrcode.png")
      // If the user does not provide a filename, call the function  again to re-prompt the user.
      return fileName === "" ? getFileName() : fileName;
    }

    // Gets the specified filename from the user and stores it in a variable
    const fileName = getFileName();

    // Formats the filename to ensure it is filesystem-friendly (removes spaces, special characters etc).
    const cleanFileName = fileName.split(" ").join("-");
    // Using regex to remove special characters, saved for future reference
    // const cleanFileName = fileName.replace(/\s+/g, "_").replace(/[^a-zA-Z0-9_.-]/g, "");

    // Creates an anchor element in the DOM
    const link = document.createElement("a");

    // Sets the anchor element's href attribute to the generated QR code data URL, and its download attribute to the specified filename
    link.href = qr;
    link.download = `${cleanFileName}.png`;

    // Appends the anchor element to the document body
    document.body.appendChild(link);

    // Creates a click event on the anchor element to initiate the download
    link.click();

    // Removes the anchor element from the document body
    document.body.removeChild(link);
  };

  // Function to reset the state and allow generating a new QR code
  const repeatAction = () => {
    // Resets the state variables to their initial values
    setUrl("");
    setQr("");
    setShowInput(true);
  };

  // Return the state variables and functions to be used in the component
  return {
    url,
    setUrl,
    qr,
    showInput,
    showAnimation,
    generateQRCode,
    downloadQRCode,
    repeatAction,
    colorLight,
    colorDark,
    setColorLight,
    setColorDark,
    handleClick,
    handleClose,
    popover,
    cover,
    displayColorPicker,
    handleChangeDarkColor,
    // handleChangeLightColor,
  };
};
