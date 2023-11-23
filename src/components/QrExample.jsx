// Component Explanation
// The QrExample component serves as a basic implementation example for generating and displaying QR codes using the QRCode library in a React application. Initially, it manages two pieces of state: url (to store the input URL that will be converted into a QR code) and qr (to store the generated QR code data URL). The component renders a simple UI that allows users to input a URL, generate its corresponding QR code by clicking a "Generate" button, and visually display the generated QR code on the screen. Additionally, it provides a "Download" link, allowing users to download the generated QR code as a PNG file. The GenerateQRCode function is responsible for converting the input URL into a QR code data URL, applying specific styling options, and updating the state with the generated QR code. This component is intended to serve as a starting reference for students to understand the basic implementation of the QRCode library. Moving forward, students should aim to encapsulate the QR code generation logic into a custom hook, enhancing the reusability and maintainability of the code in larger applications.
// Delete once finished, you will work directly wkithin the app ;)
/*import QRCode from "qrcode";
import { useState } from "react";
export const QrExample = () => {
  const [url, setUrl] = useState("");
  const [qr, setQr] = useState("");

  const GenerateQRCode = () => {
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
        if (err) return console.error(err);

        console.log(url);
        setQr(url);
      }
    );
  };

  return (
    <div className="app">
      <h1>QR Generator</h1>
      <input
        type="text"
        placeholder="e.g. https://google.com"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={GenerateQRCode}>Generate</button>
      <>
        <img src={qr} />
        <a href={qr} download="qrcode.png">
          Download
        </a>
      </>
    </div>
  );
};*/
