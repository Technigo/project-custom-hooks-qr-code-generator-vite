<h1 align="center">
  <a href="">
    <img src="/src/assets/custom-hooks.svg" alt="Project Banner Image">
  </a>
</h1>

# QR Code Generator - Custom Hook Project

A react application generating QR codes that can be downloaded as a .png file.

## Getting Started with the Project

### Dependency Installation & Startup Development Server

Once cloned, navigate to the project's root directory and this project uses npm (Node Package Manager) to manage its dependencies.

The command below is a combination of installing dependencies, opening up the project on VS Code and it will run a development server on your terminal.

```bash
npm i && code . && npm run dev
```

### The Problem

#### Code
I started by implementing the logic behind the application. Assuring that the functionality with adequate error handling was added to the QR genrator function and also the download function. I designed a custom hook for this purpose which is rendered in the App.jsx. To keep the code clean and in one place I decided to use the styled-components library to style the rendered UI. General styling is kept to the index.css file. 

Besides the basic requirements of te project I used the focus method to make the input field active when the page is rendered. I added a Lottie animation for enhanced UX and the favicon is color theme sensitive, i.e. it changes color depending if the users os settings are ligh or dark. 

If I hade more time I would create the possibility for the user to change the propoerties to customize the QR code file. 

#### Design
For the designed I prepared some simple wireframes in Fgima to have a design to follow and assure that the design is responsive:
https://www.figma.com/file/vMgz7cXlXcvbhQue51NSea/QR-Code-Generator?type=design&node-id=0%3A1&mode=design&t=NL9UMVA2D1n7us1p-1

### View it live

View it live here: https://generating-qr-code.netlify.app/

## Instructions

<a href="instructions.md">
   See instructions of this project
  </a>
