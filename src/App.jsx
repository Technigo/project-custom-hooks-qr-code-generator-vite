
import { useState } from "react";
import QRCode from "qrcode";


const App = () => {
  // State variables using the 'useState' hook.
  const [url, setUrl] = useState(""); // Keeps track of the input URL.
  const [qr, setQr] = useState(""); // Stores the generated QR code image URL.

  // Function to generate a QR code when the "Generate" button is clicked.
  const generateQRCode = () => {
    // Use the 'QRCode.toDataURL' method to generate a QR code from the input URL.
    QRCode.toDataURL(
      url, // Input URL
      {
        width: 800, // Width of the QR code image
        margin: 2, // Margin around the QR code
        color: {
          dark: "#335383FF", // Dark color of the QR code
          light: "#EEEEEEFF", // Light color of the QR code
        },
      },
      // Callback function that runs after the QR code is generated.
      (err, url) => {
        if (err) return console.error(err);

        // Log the generated QR code image URL to the console.
        console.log(url);
        // Set the 'qr' state variable to store the generated QR code image URL.
        setQr(url);
      }
    );
  };

  // Function to download the generated QR code as a PNG file.
  const downloadQRCode = () => {
    // Create a download link element using the 'document.createElement' method.
    const downloadLink = document.createElement("a");
    // Set the 'href' attribute of the link to the generated QR code image URL.
    downloadLink.href = qr;
    // Set the 'download' attribute to specify the name of the downloaded file.
    downloadLink.download = "qrcode.png";
    // Append the link to the document body.
    document.body.appendChild(downloadLink);
    // Simulate a click on the link to trigger the download.
    downloadLink.click();
    // Remove the link from the document after the download is initiated.
    document.body.removeChild(downloadLink);
  };

  // Function to reset the state variables and allow generating a new QR code.
  const repeatAction = () => {
    // Reset the 'url' state to an empty string.
    setUrl("");
    // Reset the 'qr' state to an empty string.
    setQr("");
  };

  // JSX to render the UI of the component.
  return (
    <div className="">
      <div className="app">
        <h1>QR Generator</h1>
        <input
          type="text"
          placeholder="e.g. https://google.com"
          value={url}
          // Update the 'url' state when the input value changes.
          onChange={(e) => setUrl(e.target.value)}
        />
        {/* Render the "Generate" button only if no QR code is generated. */}
        {!qr && <button onClick={generateQRCode}>Generate</button>}
        {/* Render the QR code image and buttons if a QR code is generated. */}
        {qr && (
          <>
            {/* Display the generated QR code image. */}
            <img src={qr} alt="QR Code" />
            {/* Button to download the generated QR code. */}
            <button onClick={downloadQRCode}>Download</button>
            {/* Button to repeat the QR code generation process. */}
            <button onClick={repeatAction}>Repeat</button>
          </>
        )}
      </div>
    </div>
  );
};


export default App;



