// App Component Explanation
// The App component serves as a user interface for generating and downloading QR codes, utilizing the custom hook useQRCodeGenerator which encapsulates the logic for QR code generation and management. When rendered, the component displays a title ("Technigo QR Code Generator") and conditionally renders either an input field and a "Generate" button or a generated QR code image, a "Download" button, and a "Repeat" button, based on the showInput state variable. If showInput is true, users can input a URL and generate a QR code by clicking the "Generate" button. Once generated, the input field and "Generate" button are replaced by the QR code image and additional buttons. The "Download" button triggers a download of the QR code image, and the "Repeat" button resets the UI to allow for generating a new QR code. The url, setUrl, qr, showInput, generateQRCode, downloadQRCode, and repeatAction variables and functions are derived from the useQRCodeGenerator hook, providing the necessary state and actions to manage the QR code generation process.

// Import the custom hook useQRCodeGenerator
import { useQRCodeGenerator } from "./hooks/useQRCodeGenerator";
import Lottie from "lottie-react";
import lottieQr1 from "./assets/lottie/lottieQr1.json";
import "animate.css";

// Define the App component
export const App = () => {
  // Destructure variables, properties and methods from the useQRCodeGenerator hook that you imported above here :)
  const {
    url,
    setUrl,
    qrCode,
    isInputVisible,
    generateQRCode,
    downloadQRCode,
    repeatAction,
  } = useQRCodeGenerator();

  // Return the JSX to render the component
  return (
    <div className="w-screen h-screen max-w-xl flex flex-col gap-5 items-center justify-center py-8 px-4 mx-auto my-auto text-zinc-300 ">
      {/* Render the title */}
      <h1 className=" text-3xl font-bold">QR Code Generator</h1>

      {/* Conditionally render based on whether the user is inputting an URL to generate a QR Code or the user wants to download the generated QR Code from the url input */}
      {/* {yourReactiveVariableThatTogglesTheDownloadQrCcodeOrInputField ? () : ()} */}

      {isInputVisible ? (
        <>
          <Lottie animationData={lottieQr1} loop={true} autoplay={true} />
          <h2>Enter url to create a QR code</h2>
          <form>
            <input
              className="w-screen max-w-[300px] rounded-md my-3 text-stone-800 px-2 border-solid border-2 border-cyan-800 shadow-md shadow-cyan-600/50 "
              type="text"
              placeholder="e.g. https://google.com"
              value={url}
              onChange={(event) => setUrl(event.target.value)}
              required
            />
          </form>
          <button
            className="cursor-pointer rounded-md py-1 px-4 border-solid border-2  border-teal-300 hover:translate-y-0.5"
            onClick={generateQRCode}
            aria-label="generate QR code"
          >
            Generate
          </button>
        </>
      ) : (
        qrCode && (
          <>
            <img
              src={qrCode}
              className="border-solid border-4 border-cyan-600 animate__animated animate__zoomIn"
              alt="QR code"
            />

            <button onClick={downloadQRCode} aria-label="download QR code">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8 drop-shadow-[0_35px_35px_rgba(94,234,212,0.25)] hover:translate-y-0.5 hover:stroke-teal-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
            </button>

            <button
              className="cursor-pointer rounded-md py-1 px-4 border-solid border-2  border-teal-300 hover:translate-y-0.5"
              onClick={repeatAction}
            >
              New QR-code
            </button>
          </>
        )
      )}
    </div>
  );
};
