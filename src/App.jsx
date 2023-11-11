import React, { useState, useLayoutEffect, useRef } from "react";
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
  };

  useLayoutEffect(() => {
    // Load the Lottie animation on component mount
    const animation = lottie.loadAnimation({
      container: lottieContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData,
    });
  });

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
          <p>Great! Here's your very own QR code!</p>
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
