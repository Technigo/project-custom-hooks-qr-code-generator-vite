import { useQRCodeGenerator } from "./hooks/useQRCodeGenerator";
import Lottie from 'lottie-react'
import qranimation from './assets/qranimation.json'

const animationStyle = {
  width: '200px',
}

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
    <>
      <div className="main-container">
        <div className="content-wrapper">
          <div className="heading-wrapper">
            <h1>MYSTICAL COMPUTER CIPHERS</h1>
            <h2>QR CODE GENERATOR</h2>
          </div>
          {showInput ?
            (
              <>
                <div className="animation-wrapper">
                  <Lottie animationData={qranimation} style={animationStyle} />
                </div>
                <input
                  type='text'
                  placeholder="www.mystical-computer-ciphers.netlify.app"
                  value={url}
                  onChange={(e) => setURL(e.target.value)} />
                <button onClick={generateQRCode}>GENERATE</button>
              </>
            ) : (
              <>
                {qr && (
                  <>
                    <img src={qr} />
                    <div className="button-container">
                      <button onClick={downloadQRCode}>DOWNLOAD</button>
                      <button onClick={repeatAction}>REPEAT</button>
                    </div>
                  </>
                )}
              </>
            )}
        </div>
      </div>
    </>
  );
};
