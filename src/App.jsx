import React, { useState } from 'react'
import { useQRCodeGenerator } from './hooks/useQRCodeGenerator' // Import of the custom hook
import styled from 'styled-components'
import QRPlantImage from '/QRplant.jpg' // Import of image used via the styled component

// Styled components
const AppMain = styled.div`
background-color: #FFD2CD;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100vh;
text-align: center;
`

const QRPlant = styled.img`
width: 60%;`


const Titles = styled.div`
  position: center;
  display: inline-block;
`

const H1 = styled.h1`
  color: #4B634D;
  font-size: 2rem;
  text-align: center;
  margin: 5% 0%;
`

const H2 = styled.h2`
  color: #4B634D;
  font-size: 1,5rem;
`

const Button = styled.button`
  background-color: #5F7761;
  color: white;
  padding: 10px 25px;
  text-align: center;
  font-size: 1rem;
  margin: 2px;
  cursor: pointer;
  border-radius: 20px;
  border: none;
`

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`

const InputField = styled.input`
  padding: 8px;
  margin-bottom: 5%;
  border: 1px solid #ccc;
`

// Styling of error message if the URL isn't correct
const ErrorMessage = styled.div`
  color: #4B634D;
  margin-top: 8px;
  font-size: 14px;
`

const QRCodeImage = styled.img`
  display: block;
  margin: auto; /* This will center the image horizontally */
  margin-top: 3%;
  margin-bottom: 5%;
`

// Styling of the dialogbox that opens after QR-code is generated if user wants to download
const DialogBox = styled.div`
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`

const DialogContent = styled.div`
  background: white;
  padding: 10%;
`
/* Tillbaka */

// App component definition
const App = () => {
  // Using the custom hook to manage QR code generation logic
  const { url, setUrl, qrCode, showInput, generateQRCode, resetQRCode } = useQRCodeGenerator()
  // State variables managed by the component
  const [showDialogbox, setShowDialogbox] = useState(false)
  const [fileName, setFileName] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  // Function to validate the URL and generate the QR code
  const handleGenerate = (e) => {
    e.preventDefault();
    const validUrlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/

    if (validUrlRegex.test(url)) {
      generateQRCode(url)
      setErrorMessage('')
    } else {
      setErrorMessage("Oups! Enter a valid web address (hint: https://www...)")
    }
  }

  // Function to handle the download of the generated QR-code when the modal/dialog box is "true" = open
  const downloadQRCode = () => {
    if (!fileName) {
      setShowDialogbox(true)
      return
    }

    const link = document.createElement('a')
    link.href = qrCode
    link.download = `${fileName}.png`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    // Reset after download
    resetQRCode()
    setFileName('')
    setShowDialogbox(false)
  }

  // Function to reset
  const repeatAction = () => {
    resetQRCode() // This will clear the generated QR code and show the input again.
  }

  // Function to close the modal/dialog box
  const closeDialogbox = () => setShowDialogbox(false)

  return (
    <AppMain>
      {/* Displaying elements with conditional rendering */}
      <QRPlant src={QRPlantImage} alt="Plant" />
      <Titles>
        <H1>QR Code Generator</H1>
      </Titles>

      {/* Form for entering URL and generating QR code */}
      {showInput && (
        <FormContainer onSubmit={handleGenerate}>
          <InputField
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter URL here"
            required
          />
          <Button type="submit">Generate QR-code</Button>
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </FormContainer>
      )}

      {/* Displaying QR code and related buttons */}
      {qrCode && (
        <>
          <QRCodeImage src={qrCode} alt="QR Code" />
          <div>
            <Button onClick={downloadQRCode}>Download QR-code</Button>
            <Button onClick={repeatAction}>Reset</Button>
          </div>
        </>
      )}

      {/* Modal/Dialog box for providing a filename before download */}
      {showDialogbox && (
        <DialogBox>
          <DialogContent>
            <H2>Enter a file name for your QR Code</H2>
            <input
              type="text"
              value={fileName}
              onChange={(e) => setFileName(e.target.value)}
              placeholder="Add name for file here"
            />
            <Button onClick={downloadQRCode}>Download</Button>
            <Button onClick={closeDialogbox}>Cancel</Button>
          </DialogContent>
        </DialogBox>
      )}
    </AppMain>
  )
}

export default App