// imports the useQRCodeGenerator custom hook
import { useQRCodeGenerator } from "./hooks/useQRCodeGenerator";

// Component that renders the QR code generator UI
export const App = () => {
  // Desctructures the custom hook to access the state variables and functions needed to generate and download QR codes as well as to repeat the action
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
    <section>
      <div>
        {/* Render the title */}
        <h1>QR Code Generator</h1>

        {/* Conditional rendering of elements */}
        {showInput ? (
          // Renders the input field and generate button if showInput is true
          <>
            <p>Please enter a URL below</p>
            <input
              type="text"
              placeholder="e.g. https://google.com"
              value={url} // value is the input URL that will be converted into a QR code
              onChange={(e) => setUrl(e.target.value)} // onChange is a function that updates the url state with the input URL
            />
            <button onClick={generateQRCode}>Generate QR</button>
          </>
        ) : (
          // Renders the QR code, download button, and repeat button if showInput is false
          <>
            {qr && (
              <>
                <img src={qr} />
                <p className="text-lg">Want to go again?</p>
                <div>
                  <button onClick={repeatAction}>Start over</button>
                  <button className="secondary-btn">
                    <a href={qr} onClick={downloadQRCode} download="qrcode.png">
                      Download QR Code 👇
                    </a>
                  </button>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </section>
  );
};