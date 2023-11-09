# QR Code Generator - Custom Hook Project
The QR Code Generator project empowers users to input a URL, choose a color, and set the size, and then effortlessly transforms it into a QR code for easy downloading as an image.

## Getting Started with the Project
In this project, I leverage the qrcode library to convert URLs into QR codes. QR codes are specialized barcodes that can be scanned to access the linked URL. The process is facilitated through a Custom Hook called useQRCodeGenerator, allowing the QR code creation logic to be easily integrated into different parts of the application.

I also incorporate a few third-party libraries to enhance the project's functionality:

react-color: This library simplifies color selection using hexadecimal values.
lottie-react: Enables smooth integration of animations.
animate.css: Provides control over basic animations. 

### Dependency Installation & Startup Development Server
To set up the project, follow these steps. Run the following commands in your terminal:

```bash
npm i && code . && npm run dev
npm i animate.css
npm i lottie-react
npm i qrcode
npm i react-color --save

```

### The Problem
The primary challenge I encounter in this project is handling errors when users fail to provide a valid URL. In such cases, a warning message is displayed in the terminal. To tackle this problem, we implement a check to ensure that all input fields are properly filled.

I use the trim method to remove leading and trailing spaces from user inputs. This step ensures that users are not merely submitting inputs consisting of spaces, enhancing the overall user experience and input validation.

### View it live
[QR_CODE_GENERATOR](https://miko-qr-code-generator.netlify.app/)

