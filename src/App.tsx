import "tailwindcss/tailwind.css";
import { useState, useEffect, useRef } from "react";
import { useQRCodeGenerator } from "./hooks/useQRCodeGenerator";
import { useGifs } from "./hooks/useGifs";
import { useTypeText } from "./hooks/useTypeText";
import { ScrollAnimated } from "./components/ScrollAnimated";
import { BoxAnimated } from "./components/BoxAnimated";
import CanvasComp from "./components/Three/CanvasComp";
import Box from "./components/Three/Box";
import Circle from "./components/Three/Circle";
import { Welcome } from "./components/Welcome";
import { Form } from "./components/Form";
import { AudioButton } from "./components/AudioButton";
import { ThreeFrame } from "./components/ThreeFrame";
import { QrCode } from "./components/QrCode";
import { useQrCode } from "./context/QrcodeContext";

export const App = () => {
  const [isStart, setIsStart] = useState<boolean>(true);
  const { data, isLoading, error } = useGifs();

  const { qr } = useQrCode();

  return (
    <>
      {!isLoading && !error && (
        <div className="h-screen bg-sky-900 text-stone-100 overflow-hidden bottom-0">
          {isStart ? (
            <Welcome onStart={setIsStart} />
          ) : (
            <>
              <ScrollAnimated>
                <div className="flex flex-col items-center gap-4 h-screen pt-32 relative overflow-hidden">
                  <AudioButton />
                  {/* <ThreeFrame shape="box" style=" top-80  left-40 " />
                  <ThreeFrame shape="box" style=" top-80  left-20" /> */}
                  <h1
                    onClick={() => setIsStart(true)}
                    className="font-bold text-3xl mb-4 font-poppins cursor-pointer"
                  >
                    SaQR Code Generator
                  </h1>
                  <Form />
                  {qr && <QrCode />}
                  <BoxAnimated maxHeight={200} position="-bottom-10" />
                </div>
              </ScrollAnimated>
            </>
          )}
        </div>
      )}
    </>
  );
};
