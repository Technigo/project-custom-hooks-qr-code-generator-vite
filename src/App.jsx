// App Component Explanation
// The App component serves as a user interface for generating and downloading QR codes, utilizing the custom hook useQRCodeGenerator which encapsulates the logic for QR code generation and management. When rendered, the component displays a title ("Technigo QR Code Generator") and conditionally renders either an input field and a "Generate" button or a generated QR code image, a "Download" button, and a "Repeat" button, based on the showInput state variable. If showInput is true, users can input a URL and generate a QR code by clicking the "Generate" button. Once generated, the input field and "Generate" button are replaced by the QR code image and additional buttons. The "Download" button triggers a download of the QR code image, and the "Repeat" button resets the UI to allow for generating a new QR code. The url, setUrl, qr, showInput, generateQRCode, downloadQRCode, and repeatAction variables and functions are derived from the useQRCodeGenerator hook, providing the necessary state and actions to manage the QR code generation process.

// Define the App component
// App.jsx

import React, { useState, useEffect, useRef } from "react";
import QRCode from "qrcode";
import lottie from "lottie-web";
import animationData from "./components/AnimationButterfly.json";
import "./index.css";

const useQRCodeGenerator = () => {
  const [url, setUrl] = useState("");
  const [qr, setQr] = useState("");
  const [qrGenerated, setQrGenerated] = useState(false);
  const [showAnimation, setShowAnimation] = useState(true);

  const lottieContainer = useRef();

  const generateQRCode = () => {
    QRCode.toDataURL(
      url,
      {
        width: 100,
        margin: 2,
        color: {
          dark: "#0e5c63",
          light: "#EEEEEEFF",
        },
      },
      (err, url) => {
        if (err) return console.error(err);

        console.log(url);
        setQr(url);
        setQrGenerated(true);
        setShowAnimation(false);
        lottie.destroy();
      }
    );
  };

  const resetInputField = () => {
    setUrl("");
    setQrGenerated(false);
    setShowAnimation(true);
    lottie.destroy();
  };

  useEffect(() => {
    // Load the Lottie animation on component mount
    lottie.loadAnimation({
      container: lottieContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData,
    });

    // Cleanup: Destroy the Lottie animation when the component unmounts
    return () => {
      lottie.destroy();
    };
  }, []); // Empty dependency array ensures this effect runs only on mount and unmount

  return {
    url,
    setUrl,
    qr,
    qrGenerated,
    showAnimation,
    lottieContainer,
    generateQRCode,
    resetInputField,
  };
};

export const App = () => {
  const {
    url,
    setUrl,
    qr,
    qrGenerated,
    showAnimation,
    lottieContainer,
    generateQRCode,
    resetInputField,
  } = useQRCodeGenerator();

  return (
    <div className="app">
      <h1>QR Generator</h1>
      <input
        type="text"
        placeholder="e.g. https://google.com"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={generateQRCode}>Generate</button>
      {showAnimation && (
        <div className="animation-container" ref={lottieContainer}></div>
      )}
      {qrGenerated && (
        <>
          <img src={qr} alt="QR Code" />
          <a href={qr} download="qrcode.png">
            <button>Download</button>
          </a>
          <button onClick={resetInputField}>Create new QR code</button>
        </>
      )}
    </div>
  );
};

export default App;
