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

export const App = () => {
  const [isStart, setIsStart] = useState<boolean>(true);
  const { data, isLoading, error } = useGifs();
  // const textRef = useRef("SaQR Code Generator");

  // const currentText = useTypeText(textRef.current);

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
    <>
      {!isLoading && !error && (
        <div className="h-screen bg-sky-900 text-stone-100 overflow-hidden bottom-0">
          {isStart ? (
            <Welcome onStart={setIsStart} />
          ) : (
            <>
              <ScrollAnimated>
                <div className="flex flex-col items-center gap-4 h-screen pt-32 relative overflow-hidden">
                  <span className="absolute top-80  left-40 w-11">
                    <CanvasComp>
                      <Box />
                    </CanvasComp>
                  </span>
                  <span className="absolute top-80  left-20 w-11">
                    <CanvasComp>
                      <Circle />
                    </CanvasComp>
                  </span>
                  <h1
                    onClick={() => setIsStart(true)}
                    className="font-bold text-3xl mb-4 font-poppins cursor-pointer"
                  >
                    SaQR Code Generator
                  </h1>

                  <div className="flex flex-col  bg-orange py-8 px-10 rounded shadow-md">
                    <p className="text-start m-0 text-stone-900 text-sm font-bold">URL Please</p>
                    <input
                      type="text"
                      placeholder="e.g. https://google.com"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      className="w-80 px-6 py-2 text-lg focus:outline-sky-500 focus:outline-offset-2 focus:outline-4 text-stone-600 rounded-sm shadow-sm  "
                    />
                    <div className="text-stone-900">
                      <p>Option</p>
                      <select
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        className="rounded-sm mr-3 cursor-pointer  focus:outline-sky-500 focus:outline-offset-2 focus:outline-4 text-stone-600 "
                      >
                        <option disabled={true} value="">
                          Color
                        </option>
                        <option value="#05c46b">Green</option>
                        <option value="#335383FF">Gray</option>
                        <option value="#3c40c6">Sky</option>
                        <option value="#f53b57">Rose</option>
                        <option value="#ffa801">Orange</option>
                      </select>

                      <select
                        value={Number(size)}
                        onChange={(e) => setSize(Number(e.target.value))}
                        className="rounded-sm mr-3 cursor-pointer  focus:outline-sky-500 focus:outline-offset-2 focus:outline-4 text-stone-600 "
                      >
                        <option disabled={true} value="">
                          Size
                        </option>
                        <option value={600}>Large</option>
                        <option value={300}>Middle</option>
                        <option value={100}>Small</option>
                      </select>
                      <>
                        <button
                          onClick={generateQRCode}
                          className="button text-sm w-40 bg-orange font-bold"
                        >
                          Generate QRcode
                        </button>
                      </>
                    </div>
                  </div>

                  {qr && (
                    <>
                      <div
                        className={`absolute backdrop-blur-sm transparent h-full overflow-hidden text-sky-300 w-full top-0 bottom-0 left-0 right-0 flex items-center justify-center ${
                          isVisible ? "hidden" : "block"
                        }`}
                        id="code"
                      ></div>
                      <div className="flex gap-2  flex-col bounceIn animate-[bounceIn_1s_ease-in-out]">
                        <a onClick={downloadQRCode} className="cursor-pointer bounceIn">
                          <img src={qr} className="w-full bounceIn" />
                        </a>
                      </div>
                      <button
                        onClick={() => {
                          setIsVisible(false);
                          downloadQRCode();
                        }}
                        className="button text-sm w-40"
                      >
                        To Download
                      </button>
                      <button onClick={repeatAction} className="button text-sm w-40">
                        Regenerate
                      </button>
                    </>
                  )}
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
