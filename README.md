<h1 align="center">
  <a href="">
    <img src="/src/assets/custom-hooks.svg" alt="Project Banner Image">
  </a>
</h1>

# QR Code Generator - Custom Hook Project

This project is a React component that serves as a code generator for QR codes. It includes a custom hook named useQRCodeGenerator to facilitate the generation and downloading of QR codes. The project makes use of various libraries and tools such as qrcode, lottiefiles, prettier, tailwindcss, animate.css, and heroicons.

## Getting Started with the Project

### Dependency Installation & Startup Development Server

Once cloned, navigate to the project's root directory and this project uses npm (Node Package Manager) to manage its dependencies.

The command below is a combination of installing dependencies, opening up the project on VS Code and it will run a development server on your terminal.

```bash
npm i && code . && npm run dev
```

Custom Hook: **useQRCodeGenerator**

- Hook Explanation
  This React component, specifically a custom hook named useQRCodeGenerator, is designed to simplify the process of generating and downloading QR codes. The hook utilizes the useState hook from React to manage three pieces of state:

  **url**: Stores the input URL that will be converted into a QR code.

  **qrCode**: Stores the generated QR code data URL.

  **isInputVisible**: Boolean variable to toggle the visibility of an input element in the UI.

  The hook exposes several methods:

  **generateQRCode**: Utilizes the _QRCode.toDataURL_ method to convert the provided URL into a QR code, applying specific styling options. It then updates the state with the generated QR code and hides the input.

  **downloadQRCode**: Allows users to download the generated QR code as a PNG file. It prompts them to provide a filename and handles the download process by creating an anchor element in the DOM.

  **repeatAction**: Resets the state to allow users to generate a new QR code.

  The hook returns an object containing the state variables and methods, enabling them to be utilized in the component where the hook is used.

### The Problem

Dependencies
The project relies on the following dependencies:

    *QRCode*: Used to convert a URL to a QR code data URL.
    *lottiefiles*: Enables the use of Lottie animations.
    *prettier*: A code formatter to maintain consistent code styling.
    *tailwindcss*: A utility-first CSS framework for styling.
    *animate.css*: Provides pre-built CSS animations for enhanced UI.
    *heroicons*: A set of free, MIT-licensed high-quality SVG icons.

### View it live

The link to the deployed project:
https://aesthetic-qrcode-generator.netlify.app/

## Instructions

<a href="instructions.md">
   See instructions of this project
  </a>
