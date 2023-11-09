import "tailwindcss/tailwind.css";
import { useState, useEffect, useRef } from "react";
import { useGifs } from "./hooks/useGifs";
import { ScrollAnimated } from "./components/ScrollAnimated";
import { BoxAnimated } from "./components/BoxAnimated";
import { Welcome } from "./components/Welcome";
import { Form } from "./components/Form";
import { AudioButton } from "./components/AudioButton";
import { QrCode } from "./components/QrCode";
import { useQrCode } from "./context/QrcodeContext";
import { useTheme } from "./context/ThemeContext";
import { themeData } from "./statics/theme";
import { ThemeButton } from "./components/ThemeButton";
import { ThreeFrame } from "./components/ThreeFrame";

export const App = () => {
  const [isStart, setIsStart] = useState<boolean>(true);
  const { data, isLoading, error } = useGifs();
  const { qr } = useQrCode();
  const { theme } = useTheme();
  return (
    <>
      {!isLoading && !error && (
        <div
          className={`h-screen bg-gradient-to-r  ${themeData[theme].bg} text-stone-100 overflow-hidden bottom-0`}
        >
          {isStart ? (
            <Welcome onStart={setIsStart} gifs={data.data[0].embed_url} />
          ) : (
            <>
              <ScrollAnimated>
                <div className="flex flex-col items-center gap-4 h-screen pt-32 relative overflow-hidden">
                  <AudioButton />
                  <ThemeButton />
                  <ThreeFrame shape="box" style=" top-80  left-40 " />
                  <ThreeFrame shape="box" style=" top-80  left-20" />
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
