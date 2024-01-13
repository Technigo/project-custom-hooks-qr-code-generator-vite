import { useQRCodeGenerator } from "./hooks/useQRCodeGenerator";
import logo from "./assets/imageqr.jpg";

export const App = () => {
  const {
    url,
    qrcode,
    showInput,
    formattedFileName,
    setUrl,
    generateQRCode,
    downloadQRCode,
    repeatAction,
  } = useQRCodeGenerator(); //Calling the custom hook

  // Return the JSX to render the component
  return (
    <div className="generator-body">
      <img className="logo" src={logo} alt="QRlogo" />
      <h1>Turn any website into a QR-code</h1>
      {showInput ? (
        <>
          <p>Fill out adress below and click Generate to get the QR-code</p>
          <input
            type="text"
            placeholder="e.g https://google.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button onClick={generateQRCode} className="btn">
            Generate ✨
          </button>
        </>
      ) : (
        <>
          {qrcode && (
            <>
              <img src={qrcode} />
              <a
                href={qrcode}
                download={formattedFileName}
                onClick={downloadQRCode}
              >
                <button className="downloadBtn">Download</button>
              </a>
            </>
          )}
          <button onClick={repeatAction} className="repeatBtn">
            Generate QR-code again
          </button>
        </>
      )}
    </div>
  );
};
