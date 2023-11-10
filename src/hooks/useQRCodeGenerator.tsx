// This React component, specifically a custom hook named useQRCodeGenerator, is designed to facilitate the generation and downloading of QR codes. Initially, it utilizes the useState hook from React to manage three pieces of state: url (to store the input URL that will be converted into a QR code), qr (to store the generated QR code data URL), and showInput (a boolean to toggle the visibility of an input element in the UI). The hook exposes a method generateQRCode which utilizes the QRCode.toDataURL method to convert the provided URL into a QR code, applying specific styling options, and then updates the state with the generated QR code and hides the input. The downloadQRCode method allows users to download the generated QR code as a PNG file, prompting them to provide a filename and handling the download process via creating an anchor element in the DOM. Lastly, the repeatAction method resets the state to allow users to generate a new QR code. The hook returns an object containing the state variables and methods, enabling them to be utilized in the component where the hook is used.
import QRCode from "qrcode";
import { useState } from "react";
import { QrContextType } from "src/types/common";

export const useQRCodeGenerator = (ref?: HTMLDivElement | null | undefined): QrContextType => {
  const [url, setUrl] = useState<string>("");
  const [qr, setQr] = useState<string>("");
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [color, setColor] = useState<string>("#335383FF");
  const [size, setSize] = useState<number | null>(300);
  const [error, setError] = useState<boolean>(false);
  const generateQRCode = () => {
    if (url === "") return setError(true);
    QRCode.toDataURL(
      url,
      {
        width: size || 300,
        margin: 2,
        color: {
          dark: color || " #335383FF",
          light: "#EEEEEEFF",
        },
      },
      (err, url) => {
        if (err) return console.error(err);
        setQr(url);
      }
    );
  };

  const downloadQRCode = () => {
    const getFileName = () => {
      function askName() {
        const fileName = prompt("Enter a file name, please.");
        return fileName === null ? repeatAction() : fileName;
      }

      const userChoiceFileNanme = askName();
      return userChoiceFileNanme === "" ? askName() : userChoiceFileNanme?.replaceAll(" ", "-");
    };

    const userChoiceFileNanme = getFileName();
    const formedFileName = userChoiceFileNanme + ".png";
    const anchor = document.createElement("a");
    anchor.setAttribute("href", qr);
    anchor.setAttribute("download", formedFileName);
    anchor.classList.add(
      "button",
      "bg-orange",
      "py-10",
      "px-10",
      "text-2xlg",
      "font-bold",
      "text-white",
      "border-4"
    );
    anchor.textContent = "get QRcode";
    ref?.insertAdjacentElement("beforeend", anchor);
    anchor.addEventListener("click", () => {
      anchor.remove();
      repeatAction();
    });
  };

  function repeatAction() {
    setUrl("");
    setQr("");
    setIsVisible(true);
  }

  return {
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
  };
};
