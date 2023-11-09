import { useQRCodeGenerator } from "./hooks/useQRCodeGenerator";
import { ChromePicker } from "react-color";
import { useEffect, useRef } from "react";
import image2 from "../src/assets/image2.jpg";
import "animate.css";
import Lottie from "lottie-react";
import animationData from "./lottie/Animation - 1699365461515.json";

export const App = () => {
  const {
    url,
    setUrl,
    qrCode,
    visibility,
    generateQRCode,
    downloadQRCode,
    repeatAction,
    qrCodeColor,
    setQRCodeColor,
    size,
    setSize,
    displayColorPicker,
    setDisplayColorPicker,
    isUrlEmpty,
  } = useQRCodeGenerator();
  // const lottieRef = useRef();
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  // Check if the selected size is "250" or "350" to show the Lottie animation
  const isLottieVisible = size === "250" || size === "320";
  return (
    <main className="text-white flex flex-col items-center font-poppins max-w-lg h-auto mx-auto my-10 px-4 py-10 rounded-3xl bg-primary lg:my-10 md:my-[5rem] animate__animated animate__fadeInLeft ">
      {/* Render the title */}
      <h1 className="text-xl font-bold animate__animated  animate__zoomIn lg:text-3xl md:text-3xl">
        Create a personal QR-Code
      </h1>

      <p className="text-yellow ">by Huadan</p>

      {/* Conditionally render based on whether the user is inputting a URL or viewing the QR code */}

      <div
        className={`flex flex-col items-center ${
          visibility ? "block" : "hidden"
        }`}
      >
        <img
          src={image2}
          alt="image2"
          className="rounded-[30px] w-full h-[30vh] justify-self-end my-6 lg:w-full md:h-[30vh]"
        />
        <input
          ref={inputRef}
          type="text"
          placeholder="e.g https://google.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-[80%] h-[3rem] rounded-full mb-6 text-primary placeholder:italic placeholder:pl-6 focus:outline-none focus:border-[3px] focus:border-green focus:ring-1 focus:ring-green block  px-5 py-2 lg:w-full "
        />

        <button
          onClick={() => setDisplayColorPicker(!displayColorPicker)}
          className="bg-green text-primary w-[80%] lg:w-[25rem] h-12 rounded-lg font-bold cursor-pointer "
        >
          Pick Color
        </button>
        {displayColorPicker ? (
          <div>
            <ChromePicker
              color={qrCodeColor}
              onChange={(color) => setQRCodeColor(color.hex)}
            />
          </div>
        ) : null}

        <select
          name="Qr_size"
          id="size"
          value={size}
          onChange={(e) => setSize(e.target.value)}
          className="text-primary my-6 w-[80%] lg:w-[25rem] h-12 rounded-lg bg-green text-center font-bold cursor-pointer "
        >
          <option value="">Choose Size</option>
          <option value="150">Little</option>
          <option value="250">Small</option>
          <option value="320">Middle</option>
          <option value="350">Large</option>
        </select>
        <button
          type="text"
          onClick={generateQRCode}
          disabled={isUrlEmpty}
          className="text-lg cursor-pointer "
        >
          Generate
        </button>
      </div>

      {qrCode && (
        <div className="block h-[80vh] md:h-[60vh] lg:h-[100vh]">
          <div className="border-none flex justify-center mt-5 relative">
            {isLottieVisible && (
              <Lottie
                animationData={animationData}
                // ref={lottieRef}
                className="z-30  absolute w-[24rem] top-0"
              />
            )}
            <img
              src={qrCode}
              alt="QR code"
              className="-z-10 rounded-[30px] mt-8"
            />
          </div>
          <div className="flex flex-row z-30 gap-3 mt-6 justify-end items-end text-primary w-full h-[20vh]">
            <a
              href={qrCode}
              onClick={downloadQRCode}
              className="bg-yellow py-3 px-5 w-[10rem] h-[3rem] font-bold  rounded-lg cursor-pointer "
            >
              Download PNG
            </a>
            <button
              type="button"
              onClick={repeatAction}
              className="bg-yellow rounded-lg py-3 px-5 w-[10rem] h-[3rem] cursor-pointer  "
            >
              Repeat
            </button>
          </div>
        </div>
      )}
    </main>
  );
};
