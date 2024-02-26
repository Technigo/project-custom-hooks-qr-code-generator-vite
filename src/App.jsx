import { useQRCodeGenerator } from "./hooks/useQRCodegenerator";

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
      {/* Your component's JSX goes here */}
    </div>
  );
};

export default App;
