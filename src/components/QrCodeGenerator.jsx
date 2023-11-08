import QRCode from "qrcode";
import { useState } from "react";
export const QrCodeGenerator = () => {
  const [url, setUrl] = useState("");
  const [qrcode, setQrcode] = useState("");

  const GenerateQRCode = () => {
    QRCode.toDataURL(
      url,
      {
        width: 300,
        margin: 2,
        color: {
          dark: "#000000ff",
          light: "#ffffffff",
        },
      },
      (err, url) => {
        if (err) return console.error(err);
        console.log(url);
        setQrcode(url);
      }
    );
  };
  return (
    <div>
      <input
        type="text"
        placeholder="e.g. https://google.com"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={GenerateQRCode}>Generate</button>
      {qrcode && (
        <>
          <img src={qrcode} alt="QR code" />
          <a href={qrcode} download="qrcode.png">
            Download
          </a>
        </>
      )}
    </div>
  );
};
