import logo from "./assets/technigo-logo.svg";
import { useQRCodeGenerator } from "./hooks/useQRCodeGenerator";
import { QrExample } from "./components/QrExample";

export const App = () => {
  const {
    url,
    setURL,
    qr,
    showInput,
    generateQRCode,
    downloadQRCode,
    repeatAction
  } = useQRCodeGenerator()

  return (
    <div className="">
      <img className="logo" src={logo} alt="" />
      <h1>Technigo QR Code Generator</h1>
      <input
        type='text'
        placeholder="www.mystical-computer-ciphers.netlify.app"
        value={url}
        onChange={(e) => setURL(e.target.value)} />
      
      <button onClick={generateQRCode}>Generate</button>

      {/* Conditionally render based on wether the user is inputting an URL to generate a QR Code or the user wnats to downaload the generated QR Code from the url input */}
      {/* {yourReactiveVariableThatTogglesTheDownloadQrCcodeOrInputField ? () : ()} */}
    </div>
  );
};
