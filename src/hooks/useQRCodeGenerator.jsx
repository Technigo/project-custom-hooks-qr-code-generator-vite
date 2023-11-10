import QRCode from "qrcode";
import { useState } from 'react';

export const useQRCodeGenerator = () => {
  const [url, setUrl] = useState('');
  const [qr, setQr] = useState('');
  const [showInput, setShowInput] = useState(true);

  const isValidUrl = (input) => {
    const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
    return urlPattern.test(input);
  };

  const generateQRCode = async () => {
    try {
      if (!url.trim() || !isValidUrl(url)) {
        alert('Please enter a valid URL (http://www.example.com)');
        return;
      }

      const qrCodeDataUrl = await QRCode.toDataURL(url, {
        width: 500,
        margin: 3,
        color: {
          dark: '#2476dd',
          light: '#fff'
        }
      });

      setQr(qrCodeDataUrl);
      setShowInput(false);
    } catch (err) {
      console.error(err);
    }
  };

  const downloadQRCode = () => {
    const getFileName = () => {
      let filename = prompt('Please enter a file name', 'QRcode');
      if (!filename) {
        filename = getFileName();
      }
      return filename.replace(/[^a-z0-9]/gi, '_').toLowerCase();
    };

    const filename = `${getFileName()}.png`;

    const link = document.createElement('a');
    link.href = qr;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const repeatAction = () => {
    setUrl('');
    setQr('');
    setShowInput(true);
  };

  return {
    url,
    setUrl,
    qr,
    showInput,
    generateQRCode,
    downloadQRCode,
    repeatAction,
  };
};
