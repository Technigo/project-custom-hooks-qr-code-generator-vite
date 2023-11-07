import QRCode from "qrcode";
import { useQRCodeGenerator } from "./hooks/useQRCodeGenerator";

export const App = () => {
  // Initialize state variables and functions from useQRCodeGenerator
  const {
    url,
    qr,
    generateQRCode,
    setUrl,
  } = useQRCodeGenerator()


  
  return (
    <div className="">
      <h1>QR Generator</h1>
      <input 
        type="text"
        placeholder="e.g. https://google.com"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={generateQRCode}>Generate</button>
      {/* if a qr code is generated */}
      {qr && (
        <>
          <img src={qr} />
          <a href={qr} download="qrcode.png">Download</a>
        </>
      )}

      {/* Conditionally render based on wether the user is inputting an URL to generate a QR Code or the user wnats to downaload the generated QR Code from the url input */}
      {/* {yourReactiveVariableThatTogglesTheDownloadQrCcodeOrInputField ? () : ()} */}
      <h1 className="text-3xl font-bold underline">
      Hello world!
      </h1>

    </div>
    
  );
};
