import { useState } from 'react';
import QRCode from 'qrcode';

export const useQRCodeGenerator = () => {
  const [url, setUrl] = useState('http://');
  const [qr, setQr] = useState('');
  const [showInput, setShowInput] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const isValidUrl = (input) => {
    try {
      new URL(input);
      return true;
    } catch (error) {
      return false;
    }
  };

  const generateQRCode = async () => {

    try {
      let formattedUrl = url.trim();
      if (!formattedUrl.startsWith('http://') && !formattedUrl.startsWith('https://')) {
        formattedUrl = `http://${formattedUrl}`;
      }

      if (!isValidUrl(formattedUrl)) {
        setErrorMessage('Please enter a valid URL.');
        return;
      }

      if (!isValidUrl(url)) {
        setErrorMessage('Please enter a valid URL.');
        return;
      }

      const qrCodeDataURL = await QRCode.toDataURL(formattedUrl, {
        width: 200,
        margin: 1,
        color: {
          dark: '#333333',
          light: '#fefefa',
        },
      });

      setQr(qrCodeDataURL);
      setShowInput(false);
      setErrorMessage('');
    } catch (error) {
      console.error('Error generating QR Code: ', error);
      setErrorMessage('Error generating QR Code.');
    }
  };

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


      let fileName = prompt('Please enter a filename for the QR code:', 'QRCode');
      if (!fileName) {
        fileName = 'QRCode';
      }
      fileName = fileName.split(" ").join("-");


      const link = document.createElement("a");
      link.href = qrCodeDataURLForDownload;
      link.download = `${fileName}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error generating QR Code for download: ', error);
      setErrorMessage('Error generating QR Code for download.');
    }
  };



  const repeatAction = () => {
    setUrl('http://');
    setQr('');
    setShowInput(true);
    setErrorMessage('');
  };


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