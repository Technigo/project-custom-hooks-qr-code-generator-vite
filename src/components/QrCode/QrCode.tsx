import { useQrCode } from "../../context/QrcodeContext";

export const QrCode = () => {
  const { qr, downloadQRCode, repeatAction, setIsVisible, isVisible } = useQrCode();

  return (
    <>
      <div
        className={`absolute backdrop-blur-sm transparent z-[1000] h-full overflow-hidden text-sky-300 w-full top-0 bottom-0 left-0 right-0 flex items-center justify-center ${
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
        className="button text-sm w-40 z-0"
      >
        To Download
      </button>
      <button onClick={repeatAction} className="button text-sm w-40">
        Regenerate
      </button>
    </>
  );
};
