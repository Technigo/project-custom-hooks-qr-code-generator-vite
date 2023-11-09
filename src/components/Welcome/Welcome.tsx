import { useRef } from "react";

import { useGifs } from "../../hooks/useGifs";
import { useTypeText } from "../../hooks/useTypeText";
import { ThreeFrame } from "../ThreeFrame";
import { BoxAnimated } from "../BoxAnimated";
import { AudioButton } from "../AudioButton";
import { ThemeButton } from "../ThemeButton";

export const Welcome = ({ onStart, gifs }: { onStart: (value: boolean) => void; gifs: string }) => {
  const textRef = useRef("SaQR Code Generator");
  const currentText = useTypeText(textRef.current);
  return (
    <div className=" flex flex-col items-center justify-center gap-2 h-screen overflow-hidden  z-0">
      {/* <ThreeFrame shape="box" style="top-140  left-40" />
      <ThreeFrame shape="box" style="top-100  left-80" />
      <ThreeFrame shape="box" style="top-40  left-60" /> */}
      {/* <ThreeFrame shape="box" style="top-120  right-40" />
      <ThreeFrame shape="box" style="top-80  right-60" />
      <ThreeFrame shape="box" style="top-60  right-20" /> */}
      <AudioButton />
      <ThemeButton />
      <div className="h-12  min-h-[30px]  z-1 relative">
        <h1 className="font-bold text-3xl sm:text-5xl mb-9 font-poppins z-1">
          {currentText ? currentText : ""}
        </h1>
      </div>
      <div className="h-80 w-80 relative z-0 mx-auto">
        <iframe
          className="w-full h-full border-red-300 top-0 left-0 z-1 absolute"
          src={gifs}
          allow="encrypted-media;"
        ></iframe>
        <div className="w-full h-full border-none top-0 left-0 z-1 absolute"></div>
      </div>
      <button onClick={() => onStart(false)} className="button mb-10 animate-bounce ">
        Start Here
      </button>
      <BoxAnimated />
    </div>
  );
};
