import React, { useState } from 'react'
import QRCode from 'qrcode' // Importing QRcode library

// Custom hook to generate QR code
export const useQRCodeGenerator = () => {
  // State variables managed by the hook
  const [url, setUrl] = useState('') // Input URL for QR code
  const [qrCode, setQRCode] = useState('') // Generated QR code image data URL
  const [showInput, setShowInput] = useState(true) // Controls input visibility

  // Function to generate QR code based on the provided URL
  const generateQRCode = async (url) => {
    try {
      // Generate QR code image data URL
      const qrDataUrl = await QRCode.toDataURL(url, {
        // Width, margin and colors of the generated QR-code
        width: 200,
        margin: 1,
        color: {
          dark: '#4B634D',
          light: '#FFFFFF',
        },
      })

      // Set the generated QR code data URL to the state
      setQRCode(qrDataUrl)

      // Hide input after generating QR code
      setShowInput(false)
    } catch (error) {
      console.error(error)
      // Handle any errors that might occur during QR code generation
      //This could involve resetting state or displaying an error message
    }
  }

  // Function to download the generated QR code as a PNG image
  const downloadQRCode = () => {
    const element = document.createElement("a") // Creates a link element
    element.href = qrCode // Set the QR code data URL as the link's href
    element.download = "QR.png" // Sets the filename for the downloaded image 
    document.body.appendChild(element) // Append the link to the document body 
    element.click() // Simulate a click on the link to trigger the download
    document.body.removeChild(element) // Removes the link from the document body after download
  }

  // Function to reset all state related to QR coede generation
  const resetQRCode = () => {
    setUrl('') // Resets the URL input
    setQRCode('') // Resets the generated QR code
    setShowInput(true) // Shows the input field again
  }

  // Return values and functions accessible to components using this hook
  return {
    url,
    setUrl,
    qrCode,
    showInput,
    generateQRCode,
    downloadQRCode,
    resetQRCode,
  }
}