import { useQRCodeGenerator } from "./hooks/useQRCodeGenerator"
import { useState } from "react";

import SketchBackgroundColor from "./components/SketchBackgroundColor"
import SketchPatternColor from "./components/SketchPatternColor"
 
import {BsQrCode} from 'react-icons/bs'


export const App = () => {
// State variables for patternColor and backgroundColor
  const [patternColor, setPatternColor] = useState("#e91e63")
  const [backgroundColor, setBackgroundColor] = useState("#ffcdd2")
  
  // Destructuring the variables, properties and methods from the useQRCodeGenerator hook
  const {
    url,
    setUrl,
    qr,
    inputVisible,
    generateQRCode,
    repeatAction,
    downloadQRCode,
    errorMessage
  } = useQRCodeGenerator(patternColor, setPatternColor, backgroundColor, setBackgroundColor);

// Event handler for changing the pattern color
  const handlePatternColorChange = (color) => {
    // Update patternColor state in the App component
    setPatternColor(color);
  };

  // Event handler for changing the background color
  const handleBackgroundColorChange = (color) => {
    // Update backgroundColor state in the App component
    setBackgroundColor(color);
  };

  //Function to enable enter key when generating QR code
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      // Prevent the default form submission behavior
      e.preventDefault();
      // Call the generateQRCode function
      generateQRCode();
    }
  };

  //JSX to render the component
  return (
    <section className="app">
      <h1>QR Generator</h1>
      
      {inputVisible ? (
        <>
        
        <div className="color-picker-wrapper">
        <label>Background <br></br>colour
        <SketchBackgroundColor onColorChange={handleBackgroundColorChange} />
        </label>
        <label>Pattern <br></br>colour 
        <SketchPatternColor onColorChange={handlePatternColorChange}/>
        </label>
        </div>
        <BsQrCode style={{color: `${patternColor}`, backgroundColor: `${backgroundColor}`}} className="qr-code"/>
  
        <form>
          <input
            type="text"
            placeholder="Enter your URL link"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button onClick={ (e) => { e.preventDefault(); generateQRCode()}}>Generate QR code</button>
          </form>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </>
      ) : (
          // Display generated QR code and buttons for repeat and download
        qr && (
          <>
            <img src={qr} />
            <div className="button-wrapper">
            <button onClick={repeatAction}>Repeat</button>
            <button onClick={downloadQRCode}>Download</button>
            </div>
          </>
        )
      )}
    </section>
  );
};
