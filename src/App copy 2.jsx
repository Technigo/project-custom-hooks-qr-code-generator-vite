// applying QrExample jsx

import QRCode from "qrcode";
import logo from "./assets/technigo-logo.svg";
import { useState } from "react";
export const App = () => {
  // Destructure variables, properties and methods from the useQRCodeGenerator hook that you imported above here :)
  // Define state variables for URL and QR code
  const [url, setUrl] = useState("")
  const [qr, setQr] = useState("")

  // Define a function to generate the QR code
  const generateQRCode = () => {
    QRCode.toDataURL(
      url,
      {
        width: 100,
        margin: 2,
        color: {
          dark: "#335383FF",
          light: "#EEEEEEFF",
        },
      },
      (err, url) => {
        if (err) return console.error(err)
        console.log(url)
        setQr(url)
      }
    )
  }
  
  return (
    <div className="">
      {/* Render the title */}
      {/* <img className="logo" src={logo} alt="" /> */}
      {/* <h1>Technigo QR Code Generator</h1> */}
      {/* <p>Start Here</p> */}
      {/* <QrExample /> */}
      <h1>QR Generator</h1>
      <input 
        type="text"
        placeholder="e.g. https://google.com"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={generateQRCode}>Generate</button>
      {/* if a qr code is generated */}
      {qr && (
        <>
          <img src={qr} />
          <a href={qr} download="qrcode.png">Download</a>
        </>
      )}

      {/* Conditionally render based on wether the user is inputting an URL to generate a QR Code or the user wnats to downaload the generated QR Code from the url input */}
      {/* {yourReactiveVariableThatTogglesTheDownloadQrCcodeOrInputField ? () : ()} */}
    </div>
  );
};
