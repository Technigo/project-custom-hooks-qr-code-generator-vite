import logo from "./assets/technigo-logo-white.svg";
import { ColorSelect } from "./components/ColorSelect";
import { QrAnimation, LoadingAnimation } from "./components/LottieComponent";
import { useQRCodeGenerator } from "./hooks/useQRCodeGenerator";

export const App = () => {
    const {
        setUrl,
        url,
        qr,
        showInput,
        downloadQRCode,
        generateQRCode,
        repeatAction,
        color,
        setColor,
        isLoading,
    } = useQRCodeGenerator();

    const handleColorChange = (e) => {
        const selectedColor = e.target.value;
        console.log("Color changed:", selectedColor);
        setColor(selectedColor);
    };

    return (
        <div className="app">
            <div className="app-container">
                <div className="header">
                    <img className="logo" src={logo} alt="" />
                    <h1 className="header-h1">QR CODE GENERATOR</h1>
                </div>
                <div className="generator">
                    {isLoading ? (
                        <div className="loading-container">
                            <LoadingAnimation />
                            <p>creating qr code...</p>
                        </div>
                    ) : showInput ? (
                        <>
                            <QrAnimation />
                            <h3>
                                Want a QR code? You've come to the right place!
                                Just paste in your url here, and click generate!
                                You'll be able to download it once the QR code
                                is generated.{" "}
                            </h3>
                            <input
                                className="url-input"
                                type="text"
                                placeholder="e.g. https://google.com"
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                            />
                            <div className="color-select-container">
                            <span className="color-preview" style={{ backgroundColor: color}}/>
                            
                            <select
                                name="colorSelector"
                                className="color-selector"
                                value={color}
                                onChange={handleColorChange}
                            >
                                <option disabled value="">
                                    Color
                                </option>
                                <option value="#020617">Black</option>
                                <option value="#86198f">Pink</option>
                                <option value="#3730a3">Indigo</option>
                                <option value="#4d7c0f">Green</option>
                                <option value="#b45309">Orange</option>
                            </select>
                            </div>
                            <button className="btn" onClick={generateQRCode}>
                                GENERATE QR CODE
                            </button>
                        </>
                    ) : (
                        <>
                            <img
                                className="qr-img"
                                src={qr}
                                style={{ borderColor: color }}
                            />
                            <h3>
                                Here's your QR code! Click the download button
                                to get it! That is super cool!
                            </h3>
                            <button className="btn" onClick={downloadQRCode}>
                                DOWNLOAD QR CODE
                            </button>

                            <button className="btn" onClick={repeatAction}>
                                MAKE NEW CODE
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};
