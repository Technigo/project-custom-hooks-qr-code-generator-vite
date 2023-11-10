import { useQRCodeGenerator } from "./hooks/useQRCodeGenerator";
import Lottie from "lottie-react";
import generateAnimation from "./assets/generateAnim.json";
import { SketchPicker } from "react-color";

// Component that renders the QR code generator UI
export const App = () => {
  // Desctructures the custom hook to access the state variables and functions needed to generate and download QR codes as well as to repeat the action
  const {
    url,
    setUrl,
    qr,
    showInput,
    showAnimation,
    generateQRCode,
    downloadQRCode,
    repeatAction,
    // colorLight, // Saving for an other time
    colorDark,
    handleClick,
    handleClose,
    popover,
    cover,
    displayColorPicker,
    handleChangeDarkColor,
    // handleChangeLightColor, // Saving for an other time
  } = useQRCodeGenerator();

  // Defines the styling of the Lottie animation
  const style = {
    height: "10rem",
  };

  // Return the JSX to render the component
  return (
    <section>
      {/* Render the title */}
      <h1>QR Code Generator</h1>

      {/* Conditional rendering of elements */}
      {showAnimation ? (
        // Display a loading spinner while generating the QR code
        <Lottie animationData={generateAnimation} style={style} />
      ) : showInput ? (
        // Renders the input field and generate button if showInput is true
        <>
          <p>Please enter a URL below</p>
          <input
            type="text"
            placeholder="e.g. https://google.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <div className="buttons">
            <div>
              <button className="secondary-btn" onClick={handleClick}>
                Pick QR-color
              </button>
              {displayColorPicker ? (
                <div style={popover}>
                  <div style={cover} onClick={handleClose} />
                  <SketchPicker color={colorDark} onChangeComplete={handleChangeDarkColor} />
                </div>
              ) : null}

              {/* Commented out because I want to save it for later */}
              {/* <button style={{ borderColor: colorLight, color: colorLight }} className="secondary-btn" onClick={handleClick}>
                Pick BG-color
              </button>
              {displayColorPicker ? (
                <div style={popover}>
                  <div style={cover} onClick={handleClose} />
                  <SketchPicker color={colorLight} onChangeComplete={handleChangeLightColor} />
                </div>
              ) : null} */}
            </div>
            <button onClick={generateQRCode}>Generate QR</button>
          </div>
          <div className="chosen-color">
            <p>Chosen color:</p>
            <div style={{ backgroundColor: colorDark, width: 25, height: 25, borderRadius: 25 }} ></div>
          </div>
        </>
      ) : (
        qr && (
          // Renders the QR code, download button, and repeat button if showInput is false
          <>
            <img src={qr} alt="QR Code" />
            <p className="text-lg">Want to go again?</p>
            <div>
              <button onClick={repeatAction}>Start over</button>
              {/* <button > */}
              <a className="secondary-btn" href={qr} onClick={downloadQRCode} download="qrcode.png">
                Download QR Code 👇
              </a>
              {/* </button> */}
            </div>
          </>
        )
      )
      }
    </section >
  );
};
