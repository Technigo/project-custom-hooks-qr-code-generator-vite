<h1 align="center">
  <a href="">
    <img src="/src/assets/custom-hooks.svg" alt="Project Banner Image">
  </a>
</h1>

# QR Code Generator - Custom Hook Project

This project focuses on creating a custom hook for a QR Code Generator in React. The essential library used here is qrcode, which transforms URLs into scannable QR codes. The library is utilized directly in a component and within a custom hook named useQRCodeGenerator.

## Getting Started with the Project

### Dependency Installation & Startup Development Server

Once cloned, navigate to the project's root directory and this project uses npm (Node Package Manager) to manage its dependencies.

The command below is a combination of installing dependencies, opening up the project on VS Code and it will run a development server on your terminal.

```bash
npm i && code . && npm run dev
```

### The Problem

The problem primarily revolved around creating a functional QR Code Generator using React and a custom hook named useQRCodeGenerator. The goal was to enable users to input a URL, generate a corresponding QR code, and allow them to download the created QR code as an image file.

## Approach:

I utilized React components along with the useQRCodeGenerator custom hook to manage the QR code generation process. The app was structured to conditionally display UI elements based on the stage of the code generation process. The primary approach involved:

Utilizing the qrcode library: Leveraged the library to convert user-inputted URLs into QR codes. This involved understanding the library's usage within components and custom hooks.

Managing state and UI changes: Integrated the custom hook's functionalities to handle state for URL input, generated QR code data, and the visibility of input elements. I then controlled the UI to show input fields, the generated QR code, and the download functionality based on the stage of code generation.

Planning for user experience: Ensured the interface was intuitive, allowing users to easily input URLs, generate QR codes, and download them.

## Technologies Used:

### React: 

Specifically, React components and the useState hook for managing state.
qrcode library: Utilized for converting URLs to QR codes.
Future Steps with More Time:
Given additional time, I would focus on:

### Enhanced Styling: 
Improving the visual appeal and user experience by refining the design, possibly incorporating features like dark mode, animations, or overall aesthetic enhancements.

### Exploring Advanced qrcode Features: 

Delving into the documentation of the qrcode library to explore additional capabilities for customizing QR codes. This might involve adjusting colors, sizes, shapes, or providing more options for users to customize their generated QR codes.

This approach allowed for a structured development process, leveraging React's component-based architecture and custom hooks to create a functional and user-friendly QR Code Generator.

### View it live

Check out the live version of the project [Project-Custom-Hooks-QR-Code-Generator](https://654eefa87dbdf3555e87e269--resplendent-pudding-02e169.netlify.app/).

## Instructions

<a href="instructions.md">
   See instructions of this project
  </a>
