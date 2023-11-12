import QRCode from "qrcode";
import Lottie from 'react-lottie';
import animationData from './AnimationArrow2.json'
import React from 'react';


export const FetchQRcode = ( 
  {url,
  setUrl,
  qr,
  setQr,
  showInput,
  toggleShowInput,
  inputRef}) => {
     
  



  const [filename, setFilename] = React.useState('filename');

  const GenerateQRCode = () => {
    QRCode.toDataURL(
      url,
      {
        width: 100,
        margin: 2,
        color: {
          dark: "#335383FF",
          light: "#EEEEEEFF",
        },
      },
      (err, url) => {
        if (err) return console.error(err);

        console.log(url);
        setQr(url);
        toggleShowInput();
      }
    );
  };

  const handleDownload = () => {
    const userFilename = prompt('Enter the filename for the download:', filename);
    if (userFilename !== null) {
      setFilename(userFilename);
    }
  };
  
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };


  return (
    <div className="app">
      <h1>QR Generator</h1>
      {showInput ? (
        <input
          ref={inputRef}
          type="text"
          placeholder="e.g. https://google.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      ) : (
        <>
          <img src={qr} />
          <Lottie options = {defaultOptions} is={animationData} height={100} width={100} />
          <a href={qr} download={`${filename}.png`} onClick={handleDownload}>
            Download
          </a>
          <button onClick={toggleShowInput}>Generate another</button>
        </>
      )}
      {showInput && <button onClick={GenerateQRCode}>Generate</button>}
    </div>
  );
};


