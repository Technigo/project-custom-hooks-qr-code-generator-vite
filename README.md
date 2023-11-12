# QR Code Generator - Custom Hook Project
This project is a QR Code Generator built with React. It leverages the power of custom hooks to manage state and side effects. 

The application allows users to input a URL and generate a corresponding QR code for that URL.


### The Problem

The main challenge was managing the state of the application and handling the generation of the QR code. To solve this, I used React's useState and useEffect hooks. The useState hook was used to manage the state of the URL input and the generated QR code, while the useEffect hook was used to handle side effects, such as generating the QR code whenever the URL input changes.

I wanted to provide a smooth user experience by allowing users to generate a new QR code without refreshing the page. To achieve this, I used a custom hook to toggle the visibility of the input field and the QR code.

For this project, I used Lottie animations to enhance the visual feedback of the application, making it more interactive and user-friendly.

### View it live

https://simpleqrcodes.netlify.app/
