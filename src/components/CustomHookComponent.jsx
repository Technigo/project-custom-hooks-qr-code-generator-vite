import { useQRCodeGenerator } from "../hooks/useQRCodeGenerator"



export const CustomHookComponent = () => {
    const {generateQRCode, downloadQRCode, repeatAction, hasQrCode, url,  setUrl, qr} = useQRCodeGenerator()
  return (
    <div>
        {hasQrCode ? 
        <div className="app">
            <img src={qr} />
            <button onClick={downloadQRCode}>download</button>
            <button onClick={repeatAction}>Repeat</button>

        </div> 
        :
        <div>
          <h1>QR Generator</h1>
            <input
              type="text"
              placeholder="e.g. https://google.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          <button onClick={generateQRCode}>Generate</button>
        </div>
      }



    </div>
  )
}
