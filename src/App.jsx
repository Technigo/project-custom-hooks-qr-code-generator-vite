// App Component Explanation
// The App component serves as a user interface for generating and downloading QR codes, utilizing the custom hook useQRCodeGenerator which encapsulates the logic for QR code generation and management. When rendered, the component displays a title ("Technigo QR Code Generator") and conditionally renders either an input field and a "Generate" button or a generated QR code image, a "Download" button, and a "Repeat" button, based on the showInput state variable. If showInput is true, users can input a URL and generate a QR code by clicking the "Generate" button. Once generated, the input field and "Generate" button are replaced by the QR code image and additional buttons. The "Download" button triggers a download of the QR code image, and the "Repeat" button resets the UI to allow for generating a new QR code. The url, setUrl, qr, showInput, generateQRCode, downloadQRCode, and repeatAction variables and functions are derived from the useQRCodeGenerator hook, providing the necessary state and actions to manage the QR code generation process.
import logo from "./assets/technigo-logo.svg";

export const App = () => {
    return (
        <div className="bg-slate-700 min-h-full">
            <div className="max-w-2xl mx-auto py-8 px-8">
                <img
                    src={logo}
                    className="w-24 mb-8"
                    alt="Technigo's logo"
                />
                <label className="block mb-4 text-center text-slate-300" htmlFor="input-url">
                    Put in your url that you want to convert to a QR-code below:
                </label>
                <div className="flex">
                    <input
                        id="input-url"
                        placeholder="https:// ..."
                        className="border-2 border-e-0 border-slate-600 rounded-tl-xl rounded-bl-xl py-2 px-4 w-full focus:border-slate-500 focus:outline-none bg-slate-800" />
                    <button
                        className="text-slate-300 border-2 border-s-0 border-slate-600 rounded-tr-xl rounded-br-xl py-2 px-4 bg-slate-500"
                    >
                        Generate
                    </button>
                </div>
            </div>
        </div>
    );
};
