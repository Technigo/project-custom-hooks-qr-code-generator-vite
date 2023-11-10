import { useQRCodeGenerator } from "./hooks/useQRCodeGenerator";
import Lottie from "lottie-react";
import animationData from "./assets/animations/animation.json";

export const App = () => {
  const {
    url,
    setUrl,
    qr,
    showInput,
    generateQRCode,
    downloadQRCode,
    repeatAction,
  } = useQRCodeGenerator();

  return (
    <div className="app-body">
      <h1>Easy QR Code Generator</h1>
      <Lottie className="lottie-animation" animationData={animationData} />
      {showInput ? (
        <>
          <input
            type="text"
            placeholder="e.g. https://google.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button onClick={generateQRCode}>Generate</button>
        </>
      ) : (
        <>
          {/* Render QR code image, "Download," and "Repeat" buttons when showInput is false */}
          {qr && (
            <>
              <img src={qr} />
              <div className="button-container">
                <button onClick={downloadQRCode}>Download</button>
                <button onClick={repeatAction}>New code</button>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};
