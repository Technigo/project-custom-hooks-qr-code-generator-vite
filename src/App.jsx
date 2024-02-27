import { useQRCodeGenerator } from "./hooks/useQRCodeGenerator";
import Lottie from "lottie-react";
import QrAnimation from "./assets/lottieanimation/QrAnimation.json"
import "./index.css";



const App = () => {
  const {
    url,
    setURL,
    qrCode,
    isInputVisible,
    generateQRCode,
    downloadQRCode,
    repeatAction,
  } = useQRCodeGenerator();

 
  return (

<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
  {/* Container for QR code or animation with a responsive size */}
  <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto flex justify-center items-center">
    {qrCode ? (
      // Display QR code if it exists
      <img src={qrCode} alt="QR Code" className="w-48 h-48" />
    ) : (
      // Adjust the Lottie animation size for better visibility on mobile
      // The style here is adjusted to increase the size on smaller screens
      <div style={{ width: '100%', maxWidth: '500px', height: 'auto' }}>
        <Lottie animationData={QrAnimation} loop autoplay style={{ width: '100%', height: '100%' }} />
      </div>
    )}
  </div>

  {/* Adjusted the margin-top (mt-4, mt-6, etc.) to control the gap between the animation and the buttons */}
  {isInputVisible && (
    <div className="flex flex-col items-center gap-2 md:gap-4 lg:gap-4 mt-1 inline-block"> {/* Adjust 'mt-6' to increase or decrease the gap */}
      <input
        type="text"
        value={url}
        onChange={(e) => setURL(e.target.value)}
        placeholder="Enter URL here"
        className="p-2 border-2 border-gray-300 focus:border-customGreen focus:outline-none rounded-lg w-full"
      />
      <button
        className="bg-customGreen hover:bg-customYellow text-white font-bold py-2 px-4 rounded transition duration-300 w-full sm:w-auto"
        onClick={generateQRCode}
      >
        Generate QR Code
      </button>
    </div>
  )}

  {/* Buttons for downloading the QR code and generating a new one, shown only if the QR code exists */}
  {qrCode && (
  <div className="flex flex-col items-center gap-2 md:gap-4 lg:gap-6 mt-6">
    <button
      className="bg-customGreen hover:bg-customYellow text-white font-bold py-2 px-4 rounded transition duration-300 w-full sm:w-auto"
      onClick={downloadQRCode}
    >
      Download QR Code
    </button>
    <button
      className="bg-customGreen hover:bg-customYellow text-white font-bold py-2 px-4 rounded transition duration-300 w-full sm:w-auto"
      onClick={repeatAction}
    >
    New QR Code
    </button>
  </div>
)}

</div>


);
};

export default App;
