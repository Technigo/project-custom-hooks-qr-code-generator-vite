// Component Explanation
// The QrExample component serves as a basic implementation example for generating and displaying QR codes using the QRCode library in a React application. Initially, it manages two pieces of state: url (to store the input URL that will be converted into a QR code) and qr (to store the generated QR code data URL). The component renders a simple UI that allows users to input a URL, generate its corresponding QR code by clicking a "Generate" button, and visually display the generated QR code on the screen. Additionally, it provides a "Download" link, allowing users to download the generated QR code as a PNG file. The GenerateQRCode function is responsible for converting the input URL into a QR code data URL, applying specific styling options, and updating the state with the generated QR code. This component is intended to serve as a starting reference for students to understand the basic implementation of the QRCode library. Moving forward, students should aim to encapsulate the QR code generation logic into a custom hook, enhancing the reusability and maintainability of the code in larger applications.
// Delete once finished, you will work directly wkithin the app ;)
import QRCode, { toDataURL } from "qrcode";
import { useState } from "react";
export const QrExample = () => {
  const [url, setUrl] = useState(""); // Stores the input URL that will be converted into a QR code.
  const [qr, setQr] = useState(""); // Stores the generated QR code data URL.
  
//The GenerateQRCode function is responsible for generating the QR code when the "Generate" button is clicked.
  const GenerateQRCode = () => {
    console.log(QRCode.toDataURL)
    //It uses the QRCode.toDataURL function to convert the url into a QR code.
    QRCode.toDataURL(
      //QRCode.toDataURL function takes several options, e.g. the input URL to be converted into a QR code: 
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
        setQr(url); //After generating the QR code data URL, it sets the qr state variable with the generated URL.
      }
    );

    console.log(url)
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
      {qr && <>
        <img src={qr} />
        {/*A "Download" link that allows users to download the generated QR code as a PNG file. The href attribute of this link is set to the qr data URL, and the download attribute specifies the filename for the downloaded file. */}
        <a href={qr} download="qrcode.png">
          Download
        </a>
      </>}
      
    </div>
  );
};
