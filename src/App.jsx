import { useQRCodeGenerator } from "./hooks/useQRCodeGenerator"; // Custom hook for QR code generation
import animationData from './Animation-QR.json'; // Animation file 
import Lottie from 'lottie-react'; // Library to handle animations

export const App = () => {

  // destructuring various functions and variables from our QR code generator hook
  const {
    url, // the URL that will turn into a QR code
    setUrl, // function to update the URL
    qr, // the actual QR code image
    showInput, // determines whether to show the input box or the QR code
    errorMessage, // any error mssage that might come up
    setErrorMessage, // function to update the error message
    generateQRCode, // function to create the QR code
    downloadQRCode, // function to download the QR code
    repeatAction, // function to reset and make another QR code
  } = useQRCodeGenerator();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // app displayed on screen
  return (
    <div className="wrapper">
      <nav className="navbar">
        <h1>QR CODE GENERATOR</h1>
        <p>Create Your Custom QR Code: Seamless Integration on Any Background!</p>
      </nav>
      <div className="mainPageWrapper">
        {/* show either the input box or the QR code based on 'showInput' */}
        {showInput ? (
          <>
            <div className="contentWrapper">
              <Lottie
                animationData={animationData}
                loop
                autoplay
                className="lottie-animation"
              />
            </div>
            {/* input for URL */}
            <input
              type="text"
              value={url}
              onChange={(e) => {
                setUrl(e.target.value);  // preset 'http://' what can be edited
                if (errorMessage) setErrorMessage(''); // clears any error message when the user starts typing
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  generateQRCode(); // generate QR code by pressing Enter for convenience
                }
              }}
            />
            {errorMessage && <p style={{ color: '#800000', marginTop: '5px' }}>{errorMessage}</p>}
            <button onClick={() => {
              generateQRCode();
              scrollToTop();
            }} aria-label="Generate QR Code">
              Generate
            </button>
            <footer className="foot">
              <p>2023 by Elba Cacan | All Rights Reserved</p>
            </footer>
          </>
        ) : (
          <>
            <div className="contentWrapper">
              {/* show the QR code image enaerated */}
              <img src={qr} alt="QR Code" className="qr-image" />
            </div>
            <button onClick={downloadQRCode} aria-label="Download QR Code">
              Download
            </button>
            {/* restart and make a new QR code */}
            <button onClick={() => {
              repeatAction();
              scrollToTop();
            }} aria-label="Repeat Action">
              Repeat
            </button>
            <footer className="foot">
              <p>2023 by Elba Cacan | All Rights Reserved</p>
            </footer>
          </>
        )}
      </div>
    </div>);
};
