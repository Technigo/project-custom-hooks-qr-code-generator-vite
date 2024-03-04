// src/App.jsx
import React from "react";
import { useQRCodeGenerator } from "./hooks/useQRCodeGenerator";
import { CirclePicker } from 'react-color';

export const App = () => {
  const {
    url, setUrl, qr, color, setColor, showInput, generateQRCode, downloadQRCode, repeatAction,
  } = useQRCodeGenerator();

  const handleUrlChange = (event) => setUrl(event.target.value);
  const handleColorChange = (color) => {
    setColor(color.hex); 
  };

  return (
    <>
      <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-rose-200 via-violet-200 to-emerald-200 text-black">
        <h1 className="text-black m-8 font-bold text-center text-5xl">A Very Colorful QR Code Generator</h1>
        {showInput ? (
          <div className="flex flex-col items-center">
            <input
              className="rounded-full p-3 m-5 bg-white w-full text-center text-black"
              type="text"
              placeholder="Enter a URL or search term"
              value={url}
              onChange={handleUrlChange}
            />
            {/* Descriptive text for the color picker */}
            <p className="text-lg text-black mt-4 mb-2">Pick a color for the QR code</p>
            <CirclePicker 
              color={color}
              onChangeComplete={handleColorChange}
            />
            <button onClick={generateQRCode} className="bg-white text-black hover:bg-black hover:text-white transition-all duration-300 ease-in-out rounded-full p-3 mt-5">Generate QR Code</button>
          </div>
        ) : (
          <div className="animate-fadeIn flex flex-col items-center">
            <img src={qr} alt="Generated QR Code" />
            <div className="flex flex-row m-8 justify-between gap-5">
              <button onClick={downloadQRCode} className="bg-white hover:bg-black hover:text-white rounded-full transition-all duration-300 ease-in-out p-3">Download QR Code</button>
              <button onClick={repeatAction} className="bg-white hover:bg-black hover:text-white rounded-full transition-all duration-300 ease-in-out p-3">Generate New QR Code</button>
            </div>
          </div>
          )}
      </section>
    </>
  );
};
