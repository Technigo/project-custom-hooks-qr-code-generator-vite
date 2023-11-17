import { Theme } from "./components/Theme";
import { useQRCodeGenerator } from "./hooks/useQRCodeGenerator";
import Lottie from "lottie-react";
import animationData from "./assets/animationData.json"

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
    <>
      <div className="app">

        <h1>QR Code Generator by Klaudia Wróblewksa </h1>

        <div className="wrapper">
          {showInput ?

            <>
              <Lottie className="lottie-animation" animationData={animationData} />
              <div className="inputWrapper">
                <input
                  type="text"
                  placeholder="e.g. https://google.com"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
                <div className="buttonWrapperInput">
                  <button onClick={generateQRCode}>Generate</button>
                  <Theme />
                </div>
              </div>
            </>
            :
            <>
              <div className="qrWrapper">
                <img src={qrCode} />
                <div className="buttonWrapperQr">
                  <button onClick={downloadQRCode}>
                    Download
                  </button>
                  <button onClick={repeatAction}>
                    Restart
                  </button> <Theme />
                </div>
              </div>
            </>
          }

        </div>


      </div>
    </>
  );
};
