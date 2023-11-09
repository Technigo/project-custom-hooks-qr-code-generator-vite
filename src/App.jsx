// App Component Explanation
// The App component serves as a user interface for generating and downloading QR codes, utilizing the custom hook useQRCodeGenerator which encapsulates the logic for QR code generation and management. When rendered, the component displays a title ("Technigo QR Code Generator") and conditionally renders either an input field and a "Generate" button or a generated QR code image, a "Download" button, and a "Repeat" button, based on the showInput state variable. If showInput is true, users can input a URL and generate a QR code by clicking the "Generate" button. Once generated, the input field and "Generate" button are replaced by the QR code image and additional buttons. The "Download" button triggers a download of the QR code image, and the "Repeat" button resets the UI to allow for generating a new QR code. The url, setUrl, qr, showInput, generateQRCode, downloadQRCode, and repeatAction variables and functions are derived from the useQRCodeGenerator hook, providing the necessary state and actions to manage the QR code generation process.
//import logo from "./assets/technigo-logo.svg";
import { useQRCodeGenerator } from "./hooks/useQRCodeGenerator";

// Import the custom hook useQRCodeGenerator
//import { QrExample } from "./components/QrExample";

// Define the App component
export const App = () => {
  // Destructure variables, properties and methods from the useQRCodeGenerator hook that you imported above here :)

  // export const CustomHookComponent = () => {

  const {
    url,
    setUrl,
    qr,
    showInput,
    generateQRCode,
    downloadQRCode,
    repeatAction,
  } = useQRCodeGenerator();

  // Return the JSX to render the component

  return (
    <>
      <h1>Easy QR Code Generator</h1>

      {showInput ? (
        <div>
          {/* Render input field and "Generate" button when showInput is true */}
          <input
            required
            type="text"
            placeholder="e.g. https://google.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button onClick={generateQRCode}>Generate</button>
        </div>
      ) : (
        <>
          {qr && (
            <>
              {/* Render QR code image, "Download," and "Repeat" buttons when showInput is false */}
              <img src={qr} alt="QR Code" />
              <button onClick={downloadQRCode}>Download</button>
              <button onClick={repeatAction}>Repeat</button>
            </>
          )}
        </>
      )}
    </>
  );
};

/* export const CustonHookComp = () => {
return {
  <>
    <h2>Custom hook in action</h2> 
    {showInput ? () : ()}
   <input type="text" placeholder="e.g. https://google.com" 
   value={url} 
   onChange={(e) => setUrl(e.target.value)} />
  </>
  <button onClick={generateQRCode}>Generate</button>

}
} */
