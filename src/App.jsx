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
    <section className="h-screen flex justify-center items-center text-center">
      <div className="flex flex-col gap-4">
        {/* Render the title */}
        <h1 className="text-3xl font-bold">QR Code Generator</h1>

        {/* Conditionall rendering of elements */}
        {showInput ? (
          // Renders the input field and generate button if showInput is true
          <>
            <p className="text-base">Please enter a URL below</p>
            <input
              className="bg-gray-100 p-2 rounded"
              type="text"
              placeholder="e.g. https://google.com"
              value={url} // value is the input URL that will be converted into a QR code
              onChange={(e) => setUrl(e.target.value)} // onChange is a function that updates the url state with the input URL
            />
            <button className="border-pink-200 border-2 bg-pink-200 hover:bg-pink-400 hover:border-pink-400 hover:text-white rounded-full p-2 text-pink-700" onClick={generateQRCode}>Generate QR</button>
          </>
        ) : (
          // Renders the QR code, download button, and repeat button if showInput is false
          <>
            <img src={qr} />
            <p className="text-lg">Want to go again?</p>
            <div className="flex gap-2 justify-center items-center"><button className="border-pink-200 border-2 bg-pink-200 hover:bg-pink-400 hover:border-pink-400 hover:text-white rounded-full p-2 text-pink-700" onClick={repeatAction}>Start over</button>
              <a className="border-pink-200 border-2 hover:underline focus:border-pink-700 rounded-full p-2 text-pink-700" href={qr} onClick={downloadQRCode} download="qrcode.png">
                Download QR Code 👇
              </a></div>

          </>
        )}
      </div>
    </section>
  );
};