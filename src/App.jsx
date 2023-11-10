import { useQRCodeGenerator } from "./hooks/useQRCodeGenerator"
import Lottie from 'lottie-react'
import animationData from "../QR-animation.json"

export const App = () => {

  const { 
    qr, 
    url, 
    setUrl, 
    showInput, 
    generateQRCode, 
    downloadQRCode, 
    repeatAction 
  } = useQRCodeGenerator()
  
  return (
    <div className="the-app">
      <h1>QR Code Generator</h1>

      { showInput ?
        <>
          <Lottie  animationData={animationData} />
          <input 
            required
            type="text" 
            placeholder="https://google.com" 
            value={url} 
            onChange={event => setUrl(event.target.value)} />
          <button 
            onClick={generateQRCode}>
              Generate
          </button>
        </>

        :
        <>
          <img src={qr} />
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
