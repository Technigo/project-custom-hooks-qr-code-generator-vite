

# QR Code Generator - Custom Hook Project

This week, I explored creating my very first custom hook to create QR codes. The QR Code Generator project lets users type in a URL, turn it into a QR code, and download it as an image. My task was to understand and possibly expand the existing code to make sure it’s easy to use and works well.

A key part of this project was the qrcode library. This tool helps turn the URLs into QR codes, which are special barcodes that can be scanned to show the URL

## Getting Started with the Project

### Dependency Installation & Startup Development Server

Once cloned, navigate to the project's root directory and this project uses npm (Node Package Manager) to manage its dependencies.

The command below is a combination of installing dependencies, opening up the project on VS Code and it will run a development server on your terminal.

```bash
npm i && code . && npm run dev
```

### The Problem

I  used only the App.jsx file. No components.
I created a custom hook named useQRCodeGenerator to manage the QR code generation logic using the qrcode library.
I thought about the usability and the responsivness

### View it live

https://qr-code-generator-kroluna.netlify.app

