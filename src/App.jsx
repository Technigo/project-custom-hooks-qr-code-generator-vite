import logo from "./assets/technigo-logo.svg";
import { useQRCodeGenerator } from "./hooks/useQRCodeGenerator";

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
              <input
                type='text'
                placeholder="www.mystical-computer-ciphers.netlify.app"
                value={url}
                onChange={(e) => setURL(e.target.value)} />
              <button onClick={generateQRCode}>GENERATE</button>
            </>
          ) : (
            <>
            { qr && (
              <>
                <img src={qr} />
                <button onClick={downloadQRCode}>DOWNLOAD</button>
                <button onClick={repeatAction}>REPEAT</button>
              </>
            )}
            </>
        )}
        </div>
      </div>
    </>
  );
};
