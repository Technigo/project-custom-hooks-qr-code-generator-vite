import { useQRCodeGenerator } from "./hooks/useQRCodeGenerator";

export const App = () => {
  const { url, setUrl, qr, showInput, generateQRCode, downloadQRCode, repeatAction } = useQRCodeGenerator();

  return (
    <div className="app">
      <h1>QR Code Generator</h1>

      {showInput ? (
        <div className='input-wrapper'>
          <input
            id="urlInput"
            name="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter URL"
          />
          <button onClick={generateQRCode}>Generate</button>
        </div>
      ) : (
        <div>
          <img src={qr} alt="Generated QR Code" />
          <div className="button-wrapper">
            <button onClick={downloadQRCode}>Download</button>
            <button onClick={repeatAction}>Restart</button>
          </div>
        </div>
      )}
    </div>
  );
};
