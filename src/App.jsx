import { useQRCodeGenerator } from "./hooks/useQRCodeGenerator";


// Define the App component
export const App = () => {
  // Destructure variables, properties and methods from the useQRCodeGenerator hook that you imported above here :)
  const {
    url,
    setUrl,
    qrCode,
    generateQRCode,
    downloadQRCode,
    showInput,
    repeatAction,
  } = useQRCodeGenerator();


  // Return the JSX to render the component
  return (
    <div className="app">
      {/* Render the title */}
      <h1>QR Code Generator by Klaudia Wróblewksa </h1>

      {showInput ?
        
<>
       <input
        type="text"
        placeholder="e.g. https://google.com"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={generateQRCode}>Generate</button>
          
        </>
        :
        <>
        <img src={qrCode} />
           <button onClick={downloadQRCode}>
          Download
          </button>
          <button onClick={repeatAction}>
          Restart
        </button>
        </>
}
 
      
        
    </div>

  );
};
