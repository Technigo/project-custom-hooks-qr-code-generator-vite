import { useQRCodeGenerator } from "./hooks/useQRCodeGenerator";

// Define the App component
export const App = () => {
   const { 
    url, 
    setUrl, 
    showInput, 
    qrCode, 
    generateQRCode, 
    downloadQRCode, 
    repeatAction 
  } = useQRCodeGenerator();
  
  return (
  
    <div className="app">
      <header>
          <h1>QR Code Generator</h1>
      </header>
      
      {showInput ? ( 
          <>
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)} 
              placeholder="Enter your URL here.."
            />
            <button 
            className="text-button" 
            onClick={generateQRCode}>Generate</button>
          </> ) : ( 
          <> 
            {qrCode && 
              <div className="generated-wrapper">

                <h2>Qr code for {url}</h2>

                <div className="qr-container">

                  <img src={qrCode} alt="Generated QR Code" />
                  
                  <div className="qrCode-btn-container">
                    <button className="Btn"
                    onClick={downloadQRCode}>
                    <svg className="svgIcon" viewBox="0 0 384 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path></svg>
                    <span className="icon2"></span>
                    <span className="tooltip">Download</span>
                    </button>
                    
                    <button 
                    className="text-button" 
                    onClick={repeatAction}>Create one more</button>
                  </div>

                </div>
              </div>
            }
          </> 
        )}

    </div>
);

};
