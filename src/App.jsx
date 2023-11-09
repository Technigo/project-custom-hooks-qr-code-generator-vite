import QRCode from "qrcode";
import { useQRCodeGenerator } from "./hooks/useQRCodeGenerator";

export const App = () => {
  // Initialize state variables and functions from useQRCodeGenerator
  const {
    url,
    qr,
    generateQRCode,
    setUrl,
    repeatAction,
  } = useQRCodeGenerator()


  
  return (
    <div className="container mx-auto p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-4 text-blue-800">QR Generator</h1>
      <div className="flex flex-col items-center">
      <input 
        className="form-input mt-1 block w-full px-3 py-2 text-center border"
        type="text"
        placeholder="e.g. https://google.com"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button 
        className="mt-4 px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700"
        onClick={generateQRCode}
      >
        Generate
      </button>
      {/* if a qr code is generated */}
      {qr && (
        <div className="flex flex-col items-center mt-4">
          <img className="max-w-xs border p-2" src={qr} />
          <a 
            href={qr} 
            download="qrcode.png" 
            className="mt-2 inline-block px-4 py-2 bg-green-500 text-white font-bold rounded hover:bg-green-700"
          >
            Download
          </a>
          <button 
            onClick={repeatAction}
            className="mt-4 px-4 py-2 bg-red-500 text-white font-bold rounded hover:bg-red-700"
          >
            Repeat
          </button>
        </div>
      )}
      </div>
    </div>    
  );
};
