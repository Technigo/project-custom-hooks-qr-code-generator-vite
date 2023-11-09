import React, { useState, useEffect } from "react";
import QRCode from "qrcode";
import animationData from "./AnimationButterfly.json";
import lottie from "lottie-web";

export const QrExample = () => {
  const [url, setUrl] = useState("");
  const [qr, setQr] = useState("");
  const [qrGenerated, setQrGenerated] = useState(false);

  // State to control whether to display the Lottie animation
  const [showAnimation, setShowAnimation] = useState(true);

  // Reference to the Lottie animation container
  const lottieContainer = React.createRef();

  const GenerateQRCode = () => {
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
        setShowAnimation(false); // Hide the animation after generating QR code

        // Destroy the existing Lottie animation before loading a new one
        lottie.destroy();
      }
    );
  };

  const resetInputField = () => {
    setUrl("");
    setQrGenerated(false);
    setShowAnimation(true);

    // Destroy the existing Lottie animation before loading a new one
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

  return (
    <div className="app">
      <h1>QR Generator</h1>
      <input
        type="text"
        placeholder="e.g. https://google.com"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={GenerateQRCode}>Generate</button>
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
