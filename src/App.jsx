import logo from "./assets/technigo-logo.svg";
import { useQRCodeGenerator } from "./hooks/useQRCodeGenerator";

export const App = () => {
  const {
    url,
    qrcode,
    showInput,
    setUrl,
    generateQRCode,
    downloadQRCode,
    repeatAction,
  } = useQRCodeGenerator();

  return (
    <div className="app">
      <img className="logo" src={logo} alt="" />
      <h1>Technigo QR Code Generator</h1>
      <p>Start Here</p>
      {showInput ? (
        <>
          <input
            type="text"
            placeholder="e.g. https://google.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)} // Call setUrl to update the 'url' state
          />
          {/* Call generateQRCode to generate the QR code */}
          <button onClick={generateQRCode} className="btn">
            Generate
          </button>
        </>
      ) : (
        <>
          {qrcode && (
            <>
              <img src={qrcode} />
              <a href={qrcode} download="qrcode.png" onClick={downloadQRCode}>
                Download
              </a>
            </>
          )}
          {/* Call repeatAction to reset the UI */}
          <button onClick={repeatAction} className="repeatBtn">
            Repeat
          </button>
        </>
      )}
    </div>
  );
};
