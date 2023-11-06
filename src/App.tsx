import "tailwindcss/tailwind.css";
import { useState, useEffect, useRef } from "react";
import { useQRCodeGenerator } from "./hooks/useQRCodeGenerator";
import { useGifs } from "./hooks/useGifs";
import { useTypeText } from "./hooks/useTypeText";

export const App = () => {
  const [isStart, setIsStart] = useState<boolean>(true);
  const { data, isLoading, error } = useGifs();
  const textRef = useRef("SaQR Code Generator");

  const currentText = useTypeText(textRef.current);

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
        <div className="h-screen bg-sky-600 text-stone-100">
          {isStart ? (
            <div className=" flex flex-col items-center justify-center gap-7 h-screen">
              <div className="h-12  min-h-[30px]">
                <h1 className="font-bold text-5xl mb-9 font-poppins">
                  {currentText ? currentText : ""}
                </h1>
              </div>
              <div className="h-80 w-80 relative z-0 mx-auto">
                <iframe
                  className="w-full h-full border-red-300 top-0 left-0 z-1 absolute"
                  src={data.data[0].embed_url}
                  allow="encrypted-media;"
                ></iframe>
                <div className="w-full h-full border-none top-0 left-0 z-1 absolute"></div>
              </div>
              <button onClick={() => setIsStart(false)} className="button">
                Start Here
              </button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                className="absolute bottom-0"
              >
                <path
                  fill="#f3f4f5"
                  fill-opacity="1"
                  d="M0,64L0,128L38.9,128L38.9,256L77.8,256L77.8,160L116.8,160L116.8,160L155.7,160L155.7,64L194.6,64L194.6,256L233.5,256L233.5,288L272.4,288L272.4,320L311.4,320L311.4,192L350.3,192L350.3,320L389.2,320L389.2,256L428.1,256L428.1,224L467,224L467,128L505.9,128L505.9,128L544.9,128L544.9,32L583.8,32L583.8,192L622.7,192L622.7,160L661.6,160L661.6,64L700.5,64L700.5,96L739.5,96L739.5,64L778.4,64L778.4,192L817.3,192L817.3,256L856.2,256L856.2,64L895.1,64L895.1,288L934.1,288L934.1,160L973,160L973,288L1011.9,288L1011.9,320L1050.8,320L1050.8,192L1089.7,192L1089.7,64L1128.6,64L1128.6,192L1167.6,192L1167.6,64L1206.5,64L1206.5,64L1245.4,64L1245.4,320L1284.3,320L1284.3,288L1323.2,288L1323.2,128L1362.2,128L1362.2,32L1401.1,32L1401.1,64L1440,64L1440,320L1401.1,320L1401.1,320L1362.2,320L1362.2,320L1323.2,320L1323.2,320L1284.3,320L1284.3,320L1245.4,320L1245.4,320L1206.5,320L1206.5,320L1167.6,320L1167.6,320L1128.6,320L1128.6,320L1089.7,320L1089.7,320L1050.8,320L1050.8,320L1011.9,320L1011.9,320L973,320L973,320L934.1,320L934.1,320L895.1,320L895.1,320L856.2,320L856.2,320L817.3,320L817.3,320L778.4,320L778.4,320L739.5,320L739.5,320L700.5,320L700.5,320L661.6,320L661.6,320L622.7,320L622.7,320L583.8,320L583.8,320L544.9,320L544.9,320L505.9,320L505.9,320L467,320L467,320L428.1,320L428.1,320L389.2,320L389.2,320L350.3,320L350.3,320L311.4,320L311.4,320L272.4,320L272.4,320L233.5,320L233.5,320L194.6,320L194.6,320L155.7,320L155.7,320L116.8,320L116.8,320L77.8,320L77.8,320L38.9,320L38.9,320L0,320L0,320Z"
                ></path>
              </svg>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-7 h-screen pt-32">
              <h1
                onClick={() => setIsStart(true)}
                className="font-bold text-3xl mb-4 font-poppins cursor-pointer"
              >
                SaQR Code Generator
              </h1>

              <div className="flex flex-col  bg-sky-300 py-8 px-10 rounded shadow-md">
                <p className="text-start m-0 text-stone-600 text-sm font-bold">URL Please</p>
                <input
                  type="text"
                  placeholder="e.g. https://google.com"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="w-80 px-6 py-2 text-lg focus:outline-sky-500 focus:outline-offset-2 focus:outline-4 text-stone-600 rounded-sm shadow-sm  "
                />
                <div className="text-stone-700">
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
                </div>
              </div>

              {qr && (
                <>
                  <div
                    className={`absolute backdrop-blur-sm transparent h-full  text-sky-300 w-full top-0 bottom-0 left-0 right-0 flex items-center justify-center ${
                      isVisible ? "hidden" : "block"
                    }`}
                    id="code"
                  ></div>
                  <div className="flex gap-2  flex-col">
                    <a onClick={downloadQRCode} className="cursor-pointer">
                      <img src={qr} className="w-full" />
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
              <>
                <button onClick={generateQRCode} className="button text-sm w-40">
                  Generate QRcode
                </button>
              </>
            </div>
          )}
        </div>
      )}
    </>
  );
};
