<h1 align="center">
  <a href="">
    <img src="/src/assets/custom-hooks.svg" alt="Project Banner Image">
  </a>
</h1>

# QR Code Generator - Custom Hook Project

This React app provides a simple interface for generating and downloading QR codes. It utilizes a custom hook named useQRCodeGenerator to manage the QR code generation logic and state.

# The Hook: useQRCodeGenerator

Hook Explanation
The useQRCodeGenerator hook facilitates the generation and downloading of QR codes. It utilizes the useState hook from React to manage state variables, including the input URL, generated QR code data URL, visibility of the input element, and potential error messages. The hook exposes methods for generating QR codes, downloading them, and resetting the state for generating new QR codes.

# App Overview

The main App component of the React app serves as the user interface for interacting with the QR code generation functionality. It includes a dark/light mode toggle, input for entering a URL, buttons for generating, downloading, and repeating actions, and a modal for entering a filename before downloading.

# Usage

Dark/Light Mode Toggle: Click the "Dark Mode" or "Light Mode" button to switch between dark and light mode.
Enter URL: Input a valid URL in the provided text field.
Generate QR Code: Click the "Generate" button to generate a QR code based on the entered URL.
Download QR Code: After generating a QR code, click the "Download" button to download the QR code as a PNG file. You will be prompted to enter a filename.
Repeat Action: Click the "Repeat" button to reset the state and generate a new QR code.


### The Problem

The project faced challenges in interpreting the provided hints, leading to moments of confusion.
Given more time, the following enhancements could be implemented:
User-Defined Color: Allow users to choose custom colors for the QR code, offering a more personalized touch.
Dynamic Size Selection: Implement a feature that enables users to dynamically adjust the size of the QR code based on their preferences.
Error Handling: Strengthen error handling and input validation to provide informative messages and guide users effectively.
Enhanced Customization: Expand customization options, such as logo insertion, background images, and more, for a richer user experience.

### View it live

https://qr-code-qr-code.netlify.app/

## Instructions

<a href="instructions.md">
   See instructions of this project
  </a>
