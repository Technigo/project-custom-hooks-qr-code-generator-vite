import { useQRCodeGenerator } from "./hooks/useQRCodeGenerator";

export const App = () => {

  const {  url, setUrl, qr, generateQRCode, downloadQRCode, getFileName, repeatAction } = useQRCodeGenerator();
    
  return (
    <div className="app">
      <h1>QR Generator</h1>
      {qr ? (
        <>
        <img src={qr} alt="Generated QR Code" />
          <a href={qr} download="qrcode.png">
          </a>
          <button onClick={() => downloadQRCode()}>Download</button>
          <button onClick={repeatAction}>Repeat</button>
        </>
      ) : (
        <>
        <input 
        type="text"
        placeholder="e.g. https://google.com"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={generateQRCode}>Generate</button>
      </>
    )}
   </div>  
    );
  }; 

    

