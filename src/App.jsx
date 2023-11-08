// App Component Explanation
// The App component serves as a user interface for generating and downloading QR codes, utilizing the custom hook useQRCodeGenerator which encapsulates the logic for QR code generation and management. When rendered, the component displays a title ("Technigo QR Code Generator") and conditionally renders either an input field and a "Generate" button or a generated QR code image, a "Download" button, and a "Repeat" button, based on the showInput state variable. If showInput is true, users can input a URL and generate a QR code by clicking the "Generate" button. Once generated, the input field and "Generate" button are replaced by the QR code image and additional buttons. The "Download" button triggers a download of the QR code image, and the "Repeat" button resets the UI to allow for generating a new QR code. The url, setUrl, qr, showInput, generateQRCode, downloadQRCode, and repeatAction variables and functions are derived from the useQRCodeGenerator hook, providing the necessary state and actions to manage the QR code generation process.
import logo from "./assets/technigo-logo.svg";
// Import the custom hook useQRCodeGenerator
import { QrExample } from "./components/QrExample";

// Define the App component
export const App = () => {
  // Destructure variables, properties and methods from the useQRCodeGenerator hook that you imported above here :)

  // Return the JSX to render the component
  return (
    <div className="w-screen h-screen max-w-xl flex flex-col gap-1 items-center py-8 px-4 mx-auto text-zinc-300 ">
      {/* Render the title */}
      <img className="logo" src={logo} alt="" />
      <h1>Technigo QR Code Generator</h1>
      <p>Start Here</p>
      <QrExample />

      {/* Conditionally render based on whether the user is inputting an URL to generate a QR Code or the user wants to download the generated QR Code from the url input */}
      {/* {yourReactiveVariableThatTogglesTheDownloadQrCcodeOrInputField ? () : ()} */}
    </div>
  );
};
