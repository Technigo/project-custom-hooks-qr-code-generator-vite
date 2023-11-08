import { ReactNode, createContext, useContext } from "react";
import { useQRCodeGenerator } from "../hooks/useQRCodeGenerator";
import { QrContextType } from "src/types/common";

const QrCodeContext = createContext<QrContextType | undefined>(undefined);

const QrCodeProvider = ({ children }: { children: ReactNode }) => {
  const {
    url,
    setUrl,
    generateQRCode,
    qr,
    color,
    size,
    downloadQRCode,
    repeatAction,
    setIsVisible,
    isVisible,
    setColor,
    setSize,
  } = useQRCodeGenerator();
  return (
    <QrCodeContext.Provider
      value={{
        url,
        setUrl,
        generateQRCode,
        qr,
        color,
        size,
        downloadQRCode,
        repeatAction,
        setIsVisible,
        isVisible,
        setColor,
        setSize,
      }}
    >
      {children}
    </QrCodeContext.Provider>
  );
};

const useQrCode = (): QrContextType => {
  const context = useContext(QrCodeContext);
  if (context === undefined) throw new Error("QrcodeContext was definded outside");
  return context;
};

export { useQrCode, QrCodeProvider };
