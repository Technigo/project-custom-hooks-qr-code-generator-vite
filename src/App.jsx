import { useQRCodeGenerator } from "./hooks/useQRCodegenerator";
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

  // Make sure to return some JSX here for your component to render
  return (

<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
{/* Conditional rendering based on qrCode state */}
{qrCode ? (
// Display QR code if it exists
<div className="w-48 h-48">
<img src={qrCode} alt="QR Code" className="w-full h-full" />
</div>
) : (
// Display the Lottie animation if qrCode does not exist
<Lottie animationData={QrAnimation} loop autoplay style={{ width: 400, height: 400 }} />
)}

{/* Input field and button for generating QR code */}
{isInputVisible && (
<div className="flex flex-col items-center gap-4">
<input
  type="text"
  value={url}
  onChange={(e) => setURL(e.target.value)}
  placeholder="Enter URL here"
  className="mt-4 p-2 border-2 border-gray-300 focus:border-customGreen rounded-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
/>
<button
  className="bg-customGreen hover:bg-customYellow text-white font-bold py-2 px-4 rounded transition duration-300 w-full sm:w-auto"
  onClick={generateQRCode} // Ensure this matches the function name
>
  Generate QR Code
</button>
</div>
)}

{/* Button for downloading the QR code, shown only if the QR code exists */}
{qrCode && (
  
<button
className="bg-customGreen hover:bg-customYellow text-white font-bold py-2 px-4 rounded transition duration-300 w-full sm:w-auto"
onClick={downloadQRCode}
>
Download QR Code
</button>
)}

{/* Button to reset and generate another QR code, shown only if the QR code exists */}
{qrCode && (
<button
className="bg-customGreen hover:bg-customYellow text-white font-bold py-2 px-4 rounded transition duration-300 w-full sm:w-auto"
onClick={repeatAction}
>
Generate New QR Code
</button>
)}
</div>
);
};

export default App;
