// This React component, specifically a custom hook named useQRCodeGenerator, is designed to facilitate the generation and downloading of QR codes. Initially, it utilizes the useState hook from React to manage three pieces of state: url (to store the input URL that will be converted into a QR code), qr (to store the generated QR code data URL), and showInput (a boolean to toggle the visibility of an input element in the UI). The hook exposes a method generateQRCode which utilizes the QRCode.toDataURL method to convert the provided URL into a QR code, applying specific styling options, and then updates the state with the generated QR code and hides the input. The downloadQRCode method allows users to download the generated QR code as a PNG file, prompting them to provide a filename and handling the download process via creating an anchor element in the DOM. Lastly, the repeatAction method resets the state to allow users to generate a new QR code. The hook returns an object containing the state variables and methods, enabling them to be utilized in the component where the hook is used.
import QRCode from "qrcode";
import { createElement, useState } from "react";

// Define a custom hook named useQRCodeGenerator
export const useQRCodeGenerator = () => {
  const [url, setUrl] = useState<string>("");
  const [qr, setQr] = useState<string>("");
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [color, setColor] = useState<string>("");
  const [size, setSize] = useState<number | null>(null);

  const generateQRCode = () => {
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
        return prompt("Enter a file name, please.");
      }
      const userChoiceFileNanme = askName();

      if (!userChoiceFileNanme) {
        getFileName();
        return;
      }

      return userChoiceFileNanme;
    };
    const userChoiceFileNanme = getFileName();
    const formedFileName = userChoiceFileNanme + ".png";
    const anchor = document.createElement("a");
    anchor.setAttribute("href", qr);
    anchor.setAttribute("download", formedFileName);
    anchor.classList.add(
      "button",
      "bg-sky-500",
      "py-10",
      "px-10",
      "text-2xlg",
      "font-bold",
      "text-white",
      "border-4"
    );
    anchor.textContent = "get QRcode";
    document.querySelector("#code")?.insertAdjacentElement("beforeend", anchor);
    anchor.addEventListener("click", () => {
      setIsVisible(true);
      anchor.remove();
      repeatAction();
    });
  };

  const repeatAction = () => {
    setUrl("");
    setQr("");
  };

  return {
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
