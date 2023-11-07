import { useState } from "react";
import { QrCodeIcon } from "@heroicons/react/24/solid";
import { useQrCodeGenerator } from "./hooks/useQrCodeGenerator";

export const App = () => {
    const [url, setUrl] = useState("");

    const {
        qr,
        error,
        reset,
        generateQrCode,
        downloadQrCode,
    } = useQrCodeGenerator();

    const resetGenerator = () => {
        reset();
        setUrl("");
    }

    return (
        <div className="bg-slate-100 min-h-full">
            <div className="max-w-xl mx-auto p-8">
                <header className="mb-8">
                    <QrCodeIcon
                        className="text-green-500 h-12"
                    />
                </header>
                <h1 className="text-4xl font-bold text-slate-700 mb-4">The best QR code generator you&apos;ve seen</h1>
                <p className="text-slate-600 font-semibold mb-8">Input any text that you want below and we will generate a QR code containing the information.</p>
                {qr === null && (
                    <>
                        <label htmlFor="input-url" className="block mb-1 pl-2 text-slate-600 font-medium">
                            URL / message
                        </label>
                        <div className="flex">
                            <input
                                id="input-url"
                                value={url}
                                disabled={qr !== null}
                                onChange={(e) => setUrl(e.target.value)}
                                placeholder="https:// ..."
                                className="text-slate-700 border-2 border-e-0 border-slate-300 rounded-tl-xl rounded-bl-xl py-2 px-4 w-full focus:border-slate-400 focus:outline-none bg-slate-200 disabled:cursor-not-allowed" />
                            <button
                                disabled={url === "" || qr !== null}
                                onClick={() => generateQrCode(url)}
                                className="text-green-100 border-2 border-s-0 border-green-500 rounded-tr-xl rounded-br-xl py-2 px-4 bg-green-500 hover:bg-green-600 hover:border-green-600 disabled:bg-slate-400 disabled:border-slate-400 disabled:text-slate-100 disabled:cursor-not-allowed"
                            >
                                Generate
                            </button>
                        </div>
                        {error && (
                            <p className="text-red-700 pl-2 text-sm mt-1">Could not generate QR code 😔</p>
                        )}
                    </>
                )}
                {qr !== null && (
                    <div className="flex justify-center flex-col bg-white p-8 rounded-xl">
                        <img
                            className="mb-4"
                            src={qr}
                            alt={`Generated QR code for ${url}`}
                        />
                        <button
                            className="text-green-100 border-2 border-s-0 border-green-500 rounded-xl py-2 px-4 bg-green-500 hover:bg-green-600 hover:border-green-600 mb-4"
                            onClick={downloadQrCode}>Download</button>
                        <button
                            className="text-slate-600 border-2 border-s-0 border-slate-300 rounded-xl py-2 px-4 bg-slate-300 hover:bg-slate-400 hover:border-slate-400 hover:text-slate-100"
                            onClick={resetGenerator}>Reset</button>
                    </div>
                )}
            </div>
        </div>
    );
};
