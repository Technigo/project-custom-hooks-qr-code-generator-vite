import { useState } from "react";
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
          {isStart && !isLoading ? (
            <Welcome onStart={setIsStart} gifs={data.data[0].embed_url} />
          ) : (
            <>
              <ScrollAnimated>
                <div className="flex flex-col items-center gap-4 min-h-screen h-fit pt-40 relative overflow-hidden">
                  <AudioButton />
                  <ThemeButton />
                  <ThreeFrame
                    shape="box"
                    style="  bottom-[40px] left-[-90px]  sm:bottom-[20%] sm:left-[-10%] md:bottom-[30%]  md:left-[4%] "
                  />
                  <ThreeFrame
                    shape="box"
                    style=" bottom-[20px] right-[-120px]  sm:bottom-[50%] sm:right-[-10%] md:bottom-[50%]  md:right-[4%]"
                  />

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
