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
    generateQRcode,
    downloadQRCode,
    repeatAction,
  } = useQRCodeGenerator();

  // Make sure to return some JSX here for your component to render
  return (
    <div>
      {/* Display the Lottie animation */}
      <Lottie animationData={QrAnimation} loop autoplay style={{ width: 200, height: 200 }} />

      {/* Additional UI elements like input fields, buttons, QR Code display, etc., go here */}
    </div>
  );
};

export default App;
