import { useQRCodeGenerator } from "./hooks/useQRCodeGenerator"
import Lottie from 'lottie-react'
import animationData from "../QR-animation.json"

export const App = () => {

  const { 
    qr, 
    url, 
    setUrl, 
    showInput, 
    loading,
    setLoading,
    generateQRCode, 
    downloadQRCode, 
    repeatAction 
  } = useQRCodeGenerator()

  const handleChange = (event) => {
    setUrl(event.target.value)
    if (event.code === "Enter") {generateCode()}
  }

  const generateCode = () => {
    setTimeout(() => {
      setLoading(loading => !loading)
      generateQRCode()
    }, 2000)
    setLoading(true);
  }
  
  return (
    <div className="the-app">
      <h1>QR Code Generator</h1>

      { showInput && !loading &&
        <>
          <input 
            required
            type="text" 
            placeholder="https://google.com" 
            value={url} 
            onChange={handleChange}
            onKeyDown={handleChange} />
          <button 
            onClick={generateCode}>
              Generate
          </button>
        </>}
        {showInput && loading && <Lottie  animationData={animationData} />}
        {!showInput &&
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
