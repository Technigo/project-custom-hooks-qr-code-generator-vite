import React, { useState } from 'react';
import { useQRCodeGenerator } from './hooks/useQRCodeGenerator';

// Reusable button component. Just to get use to the thinking, i know it doesnt really make sense in this scale of work:) 
const Button = ({ onClick, text, darkMode, className = '' }) => {
  return (
    <button
      className={`border-4 border-blue-900 rounded-3xl p-2 m-3 ${darkMode
        ? 'bg-black hover:bg-white hover:text-black'
        : 'bg-indigo-200 hover:bg-blue-900 hover:text-indigo-200'
        } transition-all duration-500 ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

//State variable for dark mode, modal visability, filename, and modal callback.
export const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [filename, setFilename] = useState('');
  const [modalCallback, setModalCallback] = useState(null);

  //function to toggle dark/light mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  //function to open the modal and set the callback function
  const openModal = (callback) => {
    setModalCallback(() => callback);
    setShowModal(true);
  };

  //function to close the modal
  const closeModal = () => {
    setShowModal(false);
    setModalCallback(null);
  };

  //destructed values from the custom hook useQRGenerator
  const {
    url,
    qr,
    showInput,
    setUrl,
    generateQRCode,
    repeatAction,
    error,
  } = useQRCodeGenerator();

  //function to download the qr code
  const downloadQRCode = () => {
    if (!qr) {
      console.error('QR code not generated yet.');
      return;
    }

    //open the modal to get the filename from the user 
    openModal((fileName) => {
      //format the file name 
      if (fileName) {
        const formattedFileName = `${fileName}.png`;

        // Convert the base64-encoded image data to a byte array
        const byteCharacters = atob(qr.split(',')[1]);
        const byteNumbers = new Array(byteCharacters.length);

        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }

        const byteArray = new Uint8Array(byteNumbers);

        // Create a Blob from the byte array with MIME type 'image/png'
        const blob = new Blob([byteArray], { type: 'image/png' });
        const objectURL = URL.createObjectURL(blob);

        // Create a download link element
        const downloadLink = document.createElement('a');
        downloadLink.href = objectURL;
        downloadLink.download = formattedFileName;

        // Trigger a click event on the download link to initiate the download
        downloadLink.click();

        // Revoke the object URL to free up resources
        URL.revokeObjectURL(objectURL);
      }
    });
  };
  // Function to handle saving the filename entered by the user
  const handleSaveFilename = () => {
    if (filename) {
      closeModal();
      modalCallback(filename);
    }
  };

  return (
    <div className={`flex justify-center items-center h-screen ${darkMode ? 'bg-gray-900' : 'bg-indigo-200'}`}>
      <div
        className={`mx-5 lg:mx-2 text-center text-xl p-10 w-96 h-auto mx-auto rounded-3xl border-4 ${darkMode ? 'border-white' : 'border-blue-900'
          } ${darkMode ? 'text-white' : 'text-blue-900'} transition-all duration-500`} >

        <Button onClick={toggleDarkMode} text={darkMode ? 'Light Mode' : 'Dark Mode'} className="absolute top-2 right-2" />

        <h1 className={`text-3xl ${darkMode ? 'text-white' : 'text-blue-900'}`}>QR Code Generator</h1>
        <h2 className={`text-2xl mt-5 mb-3 ${darkMode ? 'text-white' : 'text-blue-900'}`}>Enter your URL:</h2>

        {showInput ? (
          <div>
            <input
              className={`border-solid border-2 ${darkMode ? 'border-white text-black' : 'border-black'}`}
              type="text"
              placeholder="Enter a URL"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            {error && <p className={`text-red-500 ${darkMode ? 'text-white' : 'text-red-500'}`}>{error}</p>}
            <Button onClick={() => generateQRCode(url, darkMode)} text="Generate" darkMode={darkMode} className="" />
          </div>
        ) : (
          <div>
            <img
              src={qr}
              alt="Generated QR Code"
              style={{
                display: 'block',
                margin: '0 auto',
              }}
              className={`transition-opacity duration-8000 transition-all duration-500 ${showInput ? 'opacity-0' : 'opacity-100'
                }`}
            />
            <Button onClick={downloadQRCode} text="Download" darkMode={darkMode} className="" />
            <Button onClick={repeatAction} text="Repeat" darkMode={darkMode} className="" />
          </div>
        )}

        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80">
            <div className={`rounded-3xl p-8 ${darkMode ? 'bg-gray-900 border-white' : 'bg-indigo-200 border-blue-900'}`} >
              <label className="block mb-4">
                Enter the filename:
                <input
                  placeholder='myQrcode'
                  type="text"
                  value={filename}
                  onChange={(e) => setFilename(e.target.value)}
                  className="border border-gray-300 p-2 w-full"
                />
              </label>
              <div className="flex justify-end">
                <Button onClick={handleSaveFilename} text="Save" darkMode={darkMode} className="mr-2" />
                <Button onClick={closeModal} text="Cancel" darkMode={darkMode} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
