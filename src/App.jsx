import { useQRCodeGenerator } from "./hooks/useQRCodeGenerator";

export const App = () => {
  const {
    url,
    setURL,
    qrCode,
    isInputVisible,
    generateQRcode,
    downloadQRCode,
    repeatAction,
  } = useQRCodeGenerator();
};