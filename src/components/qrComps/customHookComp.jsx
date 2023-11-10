import React from 'react';
import { useQRCodeGenerator } from '../../hooks/useQRCodeGenerator';
import '../../styles/style.css';

export const CustomHookComp = () => {
  const { 
    url,
    setUrl,
    qr,
    showInput,
    generateQRCode,
    downloadQRCode,
    repeatAction,
  } = useQRCodeGenerator();

  return (
    <div className="wrapper">
      <div className="header-title-wrapper">

      <h1 className="header-technigo">Technigo QR Code Generator</h1>
      {/* <div>Custom hook in action</div> */}
      </div>
      {showInput ? (
        <>
        <div className="header-wrapper">
        <input className = "input-qrcode" type="text" placeholder ="i.e wwww.google.com"  value={url} onChange={(e)=> setUrl(e.target.value)}/>
        <button className = "generate-button" onClick={generateQRCode}>Generate</button>
        </div>
        </>
      ):(<>
        {qr && (
        <>
        <div className="download-wrapper">
        <img className="image-qrcode" src={qr} alt="QR code"/>
        <div>
        <button className = "download-button" onClick={downloadQRCode}>Download</button>
        <button className = "repeat-button" onClick={repeatAction}>Repeat</button>
        </div>
        </div>
        </>
        )}

        {/* <h2>Propagated</h2> */}
      </>)}
      
     
    </div>
  );
};



