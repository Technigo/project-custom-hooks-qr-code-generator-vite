// Hook Explanation
// This React component, specifically a custom hook named useQRCodeGenerator, is designed to facilitate the generation and downloading of QR codes. Initially, it utilizes the useState hook from React to manage three pieces of state: url (to store the input URL that will be converted into a QR code), qr (to store the generated QR code data URL), and showInput (a boolean to toggle the visibility of an input element in the UI). The hook exposes a method generateQRCode which utilizes the QRCode.toDataURL method to convert the provided URL into a QR code, applying specific styling options, and then updates the state with the generated QR code and hides the input. The downloadQRCode method allows users to download the generated QR code as a PNG file, prompting them to provide a filename and handling the download process via creating an anchor element in the DOM. Lastly, the repeatAction method resets the state to allow users to generate a new QR code. The hook returns an object containing the state variables and methods, enabling them to be utilized in the component where the hook is used.
import QRCode from "qrcode";
import { useState, useRef, useEffect } from "react";

// Define a custom hook named useQRCodeGenerator
export const useQRCodeGenerator = () => {
  // Reactive State variable to store the input URL
  const [url, setUrl] = useState("");

  // Reactive State variable to store the generated QR code data URL
  const [qrCode, setQrCode] = useState("");

  // Reactive State variable to toggle the visibility of the input element - boolean value
  const [isInputVisible, setIsInputVisible] = useState(true);

  //Ref for bettr UI when component is mounted
  const inputRef = useRef(null);


  // Create two link elements for light and dark scheme icons
  const lightSchemeIcon = document.createElement('link');
  lightSchemeIcon.rel = 'icon';
  lightSchemeIcon.href = '/dark-qr.svg';
  lightSchemeIcon.id = 'light-scheme-icon';

  const darkSchemeIcon = document.createElement('link');
  darkSchemeIcon.rel = 'icon';
  darkSchemeIcon.href = '/light-qr.svg';
  darkSchemeIcon.id = 'dark-scheme-icon';

  // Append the light scheme icon by default
  document.head.appendChild(lightSchemeIcon);

  // Create a CSS media matcher
  const matcher = window.matchMedia('(prefers-color-scheme: dark)');
  matcher.addListener(onUpdate);

  // Handle the initial update
  onUpdate();

  // Function to handle updates based on color scheme changes
  function onUpdate() {
    if (matcher.matches) {
      lightSchemeIcon.remove();
      document.head.appendChild(darkSchemeIcon);
    } else {
      darkSchemeIcon.remove();
      document.head.appendChild(lightSchemeIcon);
    }
  }

  // This effect runs once after the component mounts.
  useEffect(() => {
    // Focus the input field as soon as the component is mounted.
    inputRef.current.focus();
    // Change the value of the input field to "I love Ikea".
    inputRef.current.placeholder = "e.g. https://google.com";
  }, []); // Empty dependency array means this effect will run only once after mount.

  // Function to generate a QR code from the input URL
  const generateQRCode = () => {
    // HINT 1: Utilize the qrccode library that converts a URL to a QR code data URL.
    // Use the Import of the qrcode and chain to the native method toDataUrl() much like the example provided and specify the data within the object that you will be passing such as the {url, {width, margin, color:{dark, light}}} which containes the information to generate the qr-code and url. Lastly, this native method toDataUrl() will contain a callback function  that will update the qr variable and will also update the variable toggling the visibility of the input element.
    QRCode.toDataURL(
      // HINT 2: Ensure to pass the necessary parameters to the QR code generation method, such as the URL to convert and any styling options.
      url,
      {
        width: 302,
        margin: 2,
        color: {
          dark: "#1F1F1F",
          light: "#FFFFFF",
        },
      },
      // HINT 3: Handle the callback of the QR code generation method, which provides the generated QR code data URL.
      (err, url) => {
        if (err) {
          // HINT 4: Implement error handling to manage any issues that might occur during QR code generation.
          console.error(err);
          // HINT 5: Update the relevant state variables with the generated QR code data URL and adjust the UI accordingly.
        } else {
          console.log(url);
          setQrCode(url);
          // HINT 6: Consider the user experience and how the UI should change once the QR code has been generated.
          setIsInputVisible(false);
        }
      }
    );
  };


  // Function to download the generated QR code as a PNG file
  const downloadQRCode = () => {

    // HINT 1: Consider encapsulating the filename prompting logic into a separate function.
    const getFileName = () => {
      // HINT 2: Use a method to prompt the user for input and store the response.
      // Asks the user to provide a filename for the QR code
      let fileName = prompt("Please enter a filename for your QR code", "qrcode.png");

      // Check if the user clicked "Cancel"
      if (fileName === null) {
        // User canceled, no download
        return "";
      }
      // HINT 3: Implement a check for an empty filename and utilize recursion to re-prompt the user if necessary.
      else if (fileName.trim() === "") {
        alert('Filename cannot be empty. Please enter a valid filename.');
        // HINT 4: Ensure the function returns the obtained filename.
        return getFileName();
      } else {
        const correctedFileName = fileName.replace(/[/\\?%*:|"<> ]/g, '-');
        return correctedFileName;
      }
    };

    // HINT 5: Call the above function to retrieve a filename and store it in a variable.
    const fileName = getFileName();

    if (fileName === "") {
      return; // Do not proceed with the download if the user canceled or entered an empty filename
    }

    // HINT 6: Format the filename to ensure it is filesystem-friendly.

    // HINT 7: Create an anchor element to facilitate the download.
    const downloadLink = document.createElement("a");
    downloadLink.href = qrCode;
    downloadLink.download = fileName; // Use the obtained filename here

    // HINT 8: Set the necessary attributes on the anchor element to prepare it for download.
    document.body.appendChild(downloadLink);

    // HINT 9: Append the anchor element to the document to make it interactable.

    // HINT 10: Programmatically trigger a click on the anchor element to initiate the download.
    downloadLink.click();

    // HINT 11: Remove the anchor element from the document after the download has been initiated.
    document.body.removeChild(downloadLink);
  };


  // Function to reset the state and allow generating a new QR code
  const repeatAction = () => {
    setUrl(""); // Reset the url state to an empty string
    setQrCode(""); // Reset the qr state to an empty string
    setIsInputVisible(true); // Show the input element back by setting isInputVisible to true
  };

  // Return the state variables and functions to be used in the component
  return {
    url,
    setUrl,
    qrCode,
    inputRef,
    isInputVisible,
    generateQRCode,
    downloadQRCode,
    repeatAction
  };
};
