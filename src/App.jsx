import React, { useState } from 'react';
import { useQRCodeGenerator } from "./hooks/useQRCodeGenerator";

//Reuseble component
const Button = ({ onClick, text, darkMode, className = '' }) => {
  return (
    <button
      className={`border-4 border-blue-900 rounded-3xl p-2 m-3 ${darkMode ? 'bg-black hover:bg-white hover:text-black' : 'bg-indigo-200 hover:bg-blue-900 hover:text-indigo-200'} transition-all duration-500 ${className}`}
      onClick={onClick} >{text}</button>
  );
};

export const App = () => {
  // State variable to track whether the application is in dark mode
  const [darkMode, setDarkMode] = useState(false);

  // Function to toggle between dark and light mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Destructuring values and functions from a QR code generator hook
  const {
    url,              // Holds the current URL
    qr,               // Represents the generated QR code
    showInput,        // Controls the visibility of the input field
    setUrl,           // Function to update the URL
    generateQRCode,   // Function to generate the QR code
    downloadQRCode,   // Function to download the QR code
    repeatAction,     // Function to reset and repeat the action
    error,            // Holds error messages, if any
  } = useQRCodeGenerator();


  return (

    //sets background 
    <div className={`flex justify-center items-center h-screen ${darkMode ? 'bg-gray-900' : 'bg-indigo-200'}`}>

      {/*sets box */}
      <div className={`mx-5 lg:mx-2 text-center text-xl p-10 w-96 h-auto mx-auto rounded-3xl border-4 ${darkMode ? 'border-white' : 'border-blue-900'} ${darkMode ? 'text-white' : 'text-blue-900'} transition-all duration-500`}>

        {/*button to toggle light/dark mode*/}
        <Button onClick={toggleDarkMode} text={darkMode ? 'Light Mode' : 'Dark Mode'} className="absolute top-2 right-2" />


        <h1 className={`text-3xl ${darkMode ? 'text-white' : 'text-blue-900'}`}>
          QR Code Generator
        </h1>
        <h2 className={`text-2xl mt-5 mb-3 ${darkMode ? 'text-white' : 'text-blue-900'}`}>
          Enter your URL:
        </h2>

        {/*show input field*/}
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
            <Button onClick={() => generateQRCode(url, darkMode)} text="Generate" darkMode={darkMode} className="" />
          </div>
        ) : (

          <div>
            {/*if else show img*/}
            <img
              src={qr}
              alt="Generated QR Code"
              style={{
                display: 'block',
                margin: '0 auto',
              }}
              className={`transition-opacity duration-8000 transition-all duration-500 ${showInput ? 'opacity-0' : 'opacity-100'}`}
            />
            {/*download and repeat button*/}
            <Button onClick={downloadQRCode} text="Download" darkMode={darkMode} className="" />
            <Button onClick={repeatAction} text="Repeat" darkMode={darkMode} className="" />
          </div>
        )}
      </div>
    </div>
  );
};
