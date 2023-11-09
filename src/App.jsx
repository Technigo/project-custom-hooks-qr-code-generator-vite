import { useQRCodeGenerator } from "./hooks/useQRCodeGenerator";
import { useState } from "react";

import Sketch from "./components/SketchPatternColor";
import SketchBackgroundColor from "./components/SketchBackgroundColor";
import SketchPatternColor from "./components/SketchPatternColor";
 
import {BsQrCode} from 'react-icons/bs'


export const App = () => {

  const [patternColor, setPatternColor] = useState("#064353")
  const [backgroundColor, setBackgroundColor] = useState("#e3f0fc")

  console.log(patternColor)
  
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


  const handlePatternColorChange = (color) => {
    // Update patternColor state in the App component
    setPatternColor(color);
   
  };

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

  // Returning the JSX to render the component
  return (
    <section className="app">
      <h1>QR Generator</h1>
      
      {inputVisible ? (
        <>
        <div className="wrapper">
        <div className="color-picker-wrapper">
        <p>Background colour: </p>
        <SketchBackgroundColor onColorChange={handleBackgroundColorChange} />
        <p>Pattern colour: </p>
        <SketchPatternColor onColorChange={handlePatternColorChange}/>
        </div>
        <BsQrCode style={{color: `${patternColor}`, backgroundColor: `${backgroundColor}`}} className="qr-code"/>
        </div>
          <input
            type="text"
            placeholder="e.g. https://google.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button onClick={generateQRCode}>Generate</button>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </>
      ) : (
        qr && (
          <>
            <img src={qr} />
            <button onClick={repeatAction}>Repeat</button>
            <button onClick={downloadQRCode}>Download</button>
          </>
        )
      )}
    </section>
  );
};
