import { useQRCodeGenerator } from "../../hooks/useQRCodeGenerator";
import { useGifs } from "../../hooks/useGifs";
import { useTypeText } from "../../hooks/useTypeText";
import { useState, useEffect, useRef } from "react";
import { ThreeFrame } from "../ThreeFrame";
import { BoxAnimated } from "../BoxAnimated";

export const Welcome = ({ onStart }: { onStart: (value: boolean) => void }) => {
  const textRef = useRef("SaQR Code Generator");
  const { data, isLoading, error } = useGifs();
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
    <div className=" flex flex-col items-center justify-center gap-2 h-screen overflow-hidden relative">
      <ThreeFrame shape="box" style="top-80  left-40" />
      <ThreeFrame shape="box" style="top-100  left-20" />
      <ThreeFrame shape="box" style=" top-40  left-20" />

      <div className="h-12  min-h-[30px]">
        <h1 className="font-bold text-3xl sm:text-5xl mb-9 font-poppins">
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
      <button onClick={() => onStart(false)} className="button">
        Start Here
      </button>
      <ThreeFrame shape="box" style="top-120  right-40" />
      <ThreeFrame shape="box" style="top-80  right-60" />
      <ThreeFrame shape="box" style="top-60  right-20" />
      <BoxAnimated />
    </div>
  );
};
