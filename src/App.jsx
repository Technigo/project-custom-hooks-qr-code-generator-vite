// The App component serves as a user interface for generating and downloading QR codes, utilizing the custom hook useQRCodeGenerator which encapsulates the logic for QR code generation and management. When rendered, the component displays a title ("Technigo QR Code Generator") and conditionally renders either an input field and a "Generate" button or a generated QR code image, a "Download" button, and a "Repeat" button, based on the showInput state variable. If showInput is true, users can input a URL and generate a QR code by clicking the "Generate" button. Once generated, the input field and "Generate" button are replaced by the QR code image and additional buttons. The "Download" button triggers a download of the QR code image, and the "Repeat" button resets the UI to allow for generating a new QR code. The url, setUrl, qr, showInput, generateQRCode, downloadQRCode, and repeatAction variables and functions are derived from the useQRCodeGenerator hook, providing the necessary state and actions to manage the QR code generation process.
import { useQRCodeGenerator } from "./hooks/useQRCodeGenerator"; // Import the custom hook useQRCodeGenerator

// Other page stuff
import {
  NotALottieComponent,
  NotAnotherLottieComponent,
} from "./NotALottieComponent";
import logo from "/studio-qr-code-logo.png";

// ICONS
import { AiOutlineCloudDownload, AiFillGithub } from "react-icons/ai";
import { BsQrCodeScan } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

// Define the App component
export const App = () => {
  // Destructure variables, properties and methods from the useQRCodeGenerator hook that you imported above here :)
  const {
    inputURL,
    setInputURL,
    qrcode,
    generateQRCode,
    downloadQRCode,
    repeatAction,
    showSpinner,
  } = useQRCodeGenerator();

  return (
    <div className="max-w-5xl mx-auto">
      <header className="flex justify-center items-center">
        <div className="flex items-center gap-2">
          <a href="https://github.com/JuliaHolm">
            <AiFillGithub className="w-8 h-8" />
          </a>
          <a href="https://github.com/JuliaHolm">By Julia Holm</a>
        </div>
        <img className="max-w-[200px]" src={logo} alt="Studio QR code logo" />
        <div className="flex items-center gap-2">
          <p>QR generator</p>
          <BsQrCodeScan className="w-8 h-8" />
        </div>
      </header>
      <main className="flex justify-center gap-x-16 w-full h-full px-4 py-8">
        <div>
          <h1 className="mb-1.5 font-bold text-3xl">QR Realm of Dreams</h1>
          <h2 className="mb-6 font-jetbrains-mono font-bold text-2xl">
            Where Digital Magic Gleams
          </h2>
          <p className="text-lg">Create & Customize QR Codes with Ease.</p>
          <NotALottieComponent />
        </div>
        {showSpinner ? (
          // Display a loading spinner while generating the QR code
          <div className="flex flex-col justify-center items-center gap-8 mb-16">
            <NotAnotherLottieComponent />
            <p>Creating QR Code...</p>
          </div>
        ) : qrcode ? (
          // Content to show when qrcode is available.
          <div className="flex flex-col justify-center items-center gap-8 mb-16">
            <img src={qrcode} alt="QR Code" />
            <button
              className="flex justify-center items-center gap-1 text-2xl font-josefin-sans"
              onClick={downloadQRCode}
              aria-label="Download the QR Code"
            >
              Download
              <AiOutlineCloudDownload className="w-8 h-8" />
            </button>
            <button
              className="repeat-btn border border-solid border-black bg-gradient bg-[200%_auto] font-bold py-2 px-6 rounded-3xl text-xl"
              onClick={repeatAction}
              aria-label="Reset and make another QR Code"
            >
              Make more QR Codes
            </button>
          </div>
        ) : (
          // Content to show when qrcode is not available.
          <div className="flex flex-col justify-center items-center gap-8 mb-16">
            <div className="flex items-center justify-start w-full">
              <label className="visually-hidden">URL</label>
              <input
                type="text"
                placeholder="e.g. google.com"
                value={inputURL}
                onChange={(event) => setInputURL(event.target.value)}
              />
            </div>
            <button
              className="generate-btn border border-solid border-black bg-gradient bg-[200%_auto] font-bold py-2 px-6 rounded-3xl text-xl"
              onClick={generateQRCode}
              aria-label="Generate QR Code"
            >
              Generate
            </button>
            <button
              className="reset-btn"
              onClick={repeatAction}
              aria-label="Reset"
            >
              Reset <IoClose className="icon" />
            </button>
          </div>
        )}
      </main>
    </div>
  );
};
