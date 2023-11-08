import React, { useState } from 'react';
import { useQRCodeGenerator } from "./hooks/useQRCodeGenerator";


export const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const {
    url,
    qr,
    showInput,
    setUrl,
    generateQRCode,
    downloadQRCode,
    repeatAction,
    error,
  } = useQRCodeGenerator();


  return (

    <div className={`flex justify-center items-center h-screen ${darkMode ? 'bg-gray-900' : 'bg-indigo-200'}`}>


      <div className={`mx-3 text-center text-xl p-10 w-96 h-96 mx-auto rounded-3xl border-4 ${darkMode ? 'border-white' : 'border-blue-900'} ${darkMode ? 'text-white' : 'text-blue-900'} transition-all duration-500`}>

        <button
          className={`text-xs border-4 border-blue-900 rounded-full pt-6 pb-6 px-1 ${darkMode ? 'bg-black hover:bg-white hover:text-black' : 'bg-indigo-200 hover:bg-blue-900 hover:text-indigo-200'} transition-all duration-500 absolute top-2 right-2`}
          onClick={toggleDarkMode}
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>

        <h1 className={`text-3xl ${darkMode ? 'text-white' : 'text-blue-900'}`}>
          QR Code Generator
        </h1>
        <h2 className={`text-2xl mt-5 mb-3 ${darkMode ? 'text-white' : 'text-blue-900'}`}>
          Enter your URL:
        </h2>

        {showInput ? (
          <div>
            <input
              className={`border-solid border-2 ${darkMode ? 'border-white text-black' : 'border-black'}`}
              type="text"
              placeholder="Enter a URL to generate a QR code"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            {error && <p className={`text-red-500 ${darkMode ? 'text-white' : 'text-red-500'}`}>{error}</p>}
            <button
              className={`border-4 border-blue-900 rounded-3xl p-2 m-5 ${darkMode ? 'bg-black hover:bg-white hover:text-black' : 'bg-indigo-200 hover:bg-blue-900 hover:text-indigo-200'} transition-all duration-500`}
              onClick={() => generateQRCode(url, darkMode)}
            >
              Generate
            </button>
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
              className={`transition-opacity duration-8000 transition-all duration-500 ${showInput ? 'opacity-0' : 'opacity-100'}`}
            />
            <button
              className={`border-4 border-blue-900 rounded-3xl p-2 m-3 ${darkMode ? 'bg-black hover:bg-white hover:text-black' : 'bg-indigo-200 hover:bg-blue-900 hover:text-indigo-200'} transition-all duration-500`}
              onClick={downloadQRCode}
            >
              Download
            </button>
            <button
              className={`border-4 border-blue-900 rounded-3xl p-2 m-3 ${darkMode ? 'bg-black hover:bg-white hover:text-black' : 'bg-indigo-200 hover:bg-blue-900 hover:text-indigo-200'} transition-all duration-500`}
              onClick={repeatAction}
            >
              Repeat
            </button>
          </div>
        )}
      </div>
    </div>
  );
};