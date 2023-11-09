// import logo from "./assets/technigo-logo.svg";
// import {FiDownload} from 'react-icons/fa'
import { useQRCodeGenerator } from "./hooks/useQRCodeGenerator";

// Define the App component
export const App = () => {
   const { url, setUrl, showInput, qrCode, generateQRCode, downloadQRCode, repeatAction } = useQRCodeGenerator();
  // Destructure variables, properties and methods from the useQRCodeGenerator hook that you imported above here :)

  // Return the JSX to render the component
  return (
  
  <div className="app">
    {/* Render the title */}
    {/* <img className="logo" src={logo} alt="" /> */}
    <h1>QR Code Generator</h1>
    <p>Start Here</p>

   
     <div className="input-container">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)} 
          placeholder="Enter URL e.g. https://google.com"
        />
        <button className="generate-btn" onClick={generateQRCode}>Generate</button>
      </div>
   
      <div className="qrCode-container">
       {qrCode && <> <img src={qrCode} alt="Generated QR Code" />
        <button className="download-btn" onClick={downloadQRCode}>Download QR code</button>
        <button className="repeat-btn" onClick={repeatAction}>One more!</button>
        </>}
      </div>
    
  </div>
);

};
