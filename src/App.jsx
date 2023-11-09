import logo from "./assets/technigo-logo.svg";
import { useQRCodeGenerator } from "./hooks/useQRCodeGenerator";

export const App = () => {
  // Destructure variables, properties, and methods from the useQRCodeGenerator hook
  const {
    inputURL,
    setInputURL,
    qrData,
    inputVisibility,
    generateQRCode,
    downloadQRCode,
    repeatAction,
  } = useQRCodeGenerator();

  // Return the JSX to render the component
  return (
    <div className="app">

      <div className="header">
        <img className="qrcode" src="/qrcode.gif" alt="qr code gif" />  {/* I wanted to use lottie here but could not install it */}
        <h1>Technigo QR Code Generator</h1>
        <p>Effortlessly generate and download QR codes for seamless digital sharing with our user-friendly QR Code Generator. Simplify your online interactions with speed and style.</p>
      </div>



      {inputVisibility ? (
        // Render input field and generate button
        <div className="generator">
          <input
            placeholder="example: http://google.com/"
            type="text"
            value={inputURL}
            onChange={(e) => setInputURL(e.target.value)}
          />
          <button onClick={generateQRCode}>Generate</button>
        </div>
      ) : (
        // Render generated QR code, download button, and repeat button
        <div className="generator">
          <img src={qrData} alt="Generated QR Code" />
          <div className="buttons">
            <button onClick={downloadQRCode}>Download</button>
            <button onClick={repeatAction}>Repeat</button>
          </div>
        </div>

      )}

      <div className="footer">
        <img className="logo" src={logo} alt="" />
        <p><a href="http://github.com/lisawh0/" target="_blanc">Github</a>:
          <a href="https://www.linkedin.com/in/lisa-dahlkar-401183174/">LinkedIn</a></p>
      </div>

    </div >
  );
};
