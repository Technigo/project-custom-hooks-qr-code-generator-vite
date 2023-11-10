import React from 'react';
import { useQRCodeGenerator } from '../../hooks/useQRCodeGenerator';

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
    <div>
      <div>Custom hook in action</div>
      {showInput ? (
        <>
        <input type="text" placeholder ="i.e wwww.google.com"  value={url} onChange={(e)=> setUrl(e.target.value)}/>
        <button onClick={generateQRCode}>Generate</button>
        </>
      ):(<>
        {qr && (
        <>
        <img src={qr} alt="QR code"/>
        <button onClick={downloadQRCode}>Download</button>
        <button onClick={repeatAction}>Repeat</button>
        </>
        )}

        <h2>Propagated</h2>
      </>)}
      
     
    </div>
  );
};



