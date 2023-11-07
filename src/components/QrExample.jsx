// Component Explanation
// The QrExample component serves as a basic implementation example for generating and displaying QR codes using the QRCode library in a React application. Initially, it manages two pieces of state: url (to store the input URL that will be converted into a QR code) and qr (to store the generated QR code data URL). The component renders a simple UI that allows users to input a URL, generate its corresponding QR code by clicking a "Generate" button, and visually display the generated QR code on the screen. Additionally, it provides a "Download" link, allowing users to download the generated QR code as a PNG file. The GenerateQRCode function is responsible for converting the input URL into a QR code data URL, applying specific styling options, and updating the state with the generated QR code. This component is intended to serve as a starting reference for students to understand the basic implementation of the QRCode library. Moving forward, students should aim to encapsulate the QR code generation logic into a custom hook, enhancing the reusability and maintainability of the code in larger applications.
// Delete once finished, you will work directly wkithin the app ;)
import QRCode from "qrcode";
import { useState } from "react";

export const QrExample = () => {
  const [url, setUrl] = useState("");
  const [qr, setQr] = useState("");


  // function to generate QR code
  const GenerateQRCode = () => {
    // QRCode.toDataUrl is a function that takes in a URL and styling options and returns a data URL of the generated QR code, which can be used to display the QR code on the screen or download it as a PNG file.
    QRCode.toDataURL(
      // url is the input URL that will be converted into a QR code
      url,
      {
        width: 100,
        margin: 2,
        color: {
          dark: "#335383FF",
          light: "#EEEEEEFF",
        },
      },
      // 
      (err, url) => {
        if (err) return console.error(err);

        console.log(url); // prints the generated QR code data URL to the console
        // setQr is a function that updates the qr state with the generated QR code data URL, the QR code data url is saved in the state qr
        setQr(url);
      }
    );
  };

  return (
    <div className="app">
      <h1>QR Generator</h1>
      {/* input field to input URL */}
      <input
        type="text"
        placeholder="e.g. https://google.com"
        value={url} // value is the input URL that will be converted into a QR code
        onChange={(e) => setUrl(e.target.value)} // onChange is a function that updates the url state with the input URL
      />
      {/* button to generate QR code, click invokes the GenerateQRCode function */}
      <button onClick={GenerateQRCode}>Generate</button>
      <>
        {/* img tag to display the generated QR code on the screen */}
        <img src={qr} />
        {/* link to download the generated QR code as a PNG file */}
        {/* // download attribute is used to specify the name of the file that will be downloaded */}
        <a href={qr} download="qrcode.png">
          Download
        </a>
      </>
    </div>
  );
};
