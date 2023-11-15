
import { useState } from 'react';
import QRCode from 'qrcode'; //QRCode for generating QR codes (see package.json)

export const useQRCodeGenerator = () => {
  // state variables
  const [url, setUrl] = useState('http://'); // stores the URL for the QR code
  const [qr, setQr] = useState(''); // stores the generated QR code data URL
  const [showInput, setShowInput] = useState(true); // controls whether to show the input field or the QR code
  const [errorMessage, setErrorMessage] = useState(''); // stores any error message


  // checks if a URL is valid
  const isValidUrl = (input) => {
    try {
      // basic validation with URL constructor
      new URL(input);

      // enhanced validation with regex. ensures a certain level of correctness in the format of URLs entered by users
      const pattern = new RegExp('^(https?:\\/\\/)?' +
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
        '((\\d{1,3}\\.){3}\\d{1,3}))' +
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
        '(\\?[;&a-z\\d%_.~+=-]*)?' +
        '(\\#[-a-z\\d_]*)?$', 'i');

      return pattern.test(input);
    } catch (error) {
      return false; // if error: the URL is invalid
    }
  };

  const generateQRCode = async () => {
    try {
      let formattedUrl = url.trim();
      if (!formattedUrl.startsWith('http://') && !formattedUrl.startsWith('https://')) {
        formattedUrl = `http://${formattedUrl}`;
      }

      // check if the URL is valid, show error message if not
      if (!isValidUrl(formattedUrl)) {
        setErrorMessage('Please enter a valid URL.');
        return;
      }

      // generates the QR code data URL for download, it downloads in pure black and no background
      const qrCodeDataURL = await QRCode.toDataURL(formattedUrl, {
        width: 200,
        margin: 1,
        color: {
          dark: '#333333',
          light: '#FFFFFF00',
        },
      });

      setQr(qrCodeDataURL); // updates the QR code state
      setShowInput(false); // hides the input field
      setErrorMessage(''); // clears any error message
    } catch (error) {
      console.error('Error generating QR Code: ', error);
      setErrorMessage('Error generating QR Code.');
    }
  };

  // function to download the QR code as an image
  const downloadQRCode = async () => {
    try {
      const qrCodeDataURLForDownload = await QRCode.toDataURL(url, {
        width: 200,
        margin: 1,
        color: {
          dark: '#000000',
          light: '#FFFFFF00'
        },
      });

      // ask user for a filename for downloading and formats it
      let fileName = prompt('Please enter a filename for the QR code:', 'QRCode');

      // If the user presses 'Cancel', fileName will be null; in that case, stop the function
      if (fileName === null) {
        return; // exit the function if 'Cancel' is pressed
      }

      if (!fileName.trim()) {
        fileName = 'QRCode';
      }

      // replaces spaces with hyphens for a more filesystem-friendly filename
      fileName = fileName.split(" ").join("-");

      // Creates a link and triggers the download
      const link = document.createElement("a");
      link.href = qrCodeDataURLForDownload; // Sets the href to the QR code data URL
      link.download = `${fileName}.png`; // sets the filename for the download
      document.body.appendChild(link); // adds the link to the document
      link.click();
      document.body.removeChild(link); // removes the link from the document
    } catch (error) {
      console.error('Error generating QR Code for download: ', error);
      setErrorMessage('Error generating QR Code for download.');
    }
  };

  // to reset the state and start over
  const repeatAction = () => {
    setUrl('http://'); // resets URL
    setQr(''); // clears the QR code
    setShowInput(true); // shows the input field
    setErrorMessage(''); // clears any error message
  };

  // returning all the states and functions so they can be used in other components (see app.jsx)
  return {
    url,
    setUrl,
    qr,
    showInput,
    errorMessage,
    setErrorMessage,
    generateQRCode,
    downloadQRCode,
    repeatAction,
  };
};
