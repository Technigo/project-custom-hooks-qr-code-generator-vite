import { useQRCodeGenerator } from "./hooks/useQRCodeGenerator";
export const App = () => {
  const { url, setUrl, generateQRCode, qr, downloadQRCode, repeatAction } = useQRCodeGenerator();
  return (
    <div className="">
      <h1>SaKu QR Code Generator</h1>
      <p id="code">Start Here</p>
      <input
        type="text"
        placeholder="e.g. https://google.com"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={generateQRCode}>Generate</button>
      <button onClick={downloadQRCode}>get</button>
      <>
        <img src={qr} />
        <a href={qr} download="qrcode.png">
          Download
        </a>
      </>
    </div>
  );
};
