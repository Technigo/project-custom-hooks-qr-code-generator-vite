import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  createRef,
  useState,
} from "react";
import { useQRCodeGenerator } from "../hooks/useQRCodeGenerator";
import { QrContextType } from "src/types/common";
const QrCodeContext = createContext<QrContextType | undefined>(undefined);
const anchorRef = createRef<HTMLDivElement | null>();

const QrCodeProvider = ({ children }: { children: ReactNode }) => {
  const [elementRef, setElementRef] = useState<HTMLDivElement | null>(null);

  const {
    error,
    setError,
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
  } = useQRCodeGenerator(elementRef);

  return (
    <QrCodeContext.Provider
      value={{
        setElementRef,
        anchorRef,
        setError,
        error,
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
