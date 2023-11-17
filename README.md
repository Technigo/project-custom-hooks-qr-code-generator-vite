
# QR Code Generator for URLs - Custom Hook Project

QR Code Generator is a user-friendly tool that transforms inputted URLs into downloadable QR codes. Powered by the efficient QRCode library, this project simplifies the process of creating QR codes, allowing users to quickly generate and save them as image files.

## Project Overview

### Core Functionality

- **URL Input:** Users can input a URL that will be converted into a QR code.
  
- **QR Code Generation:** Upon input, a QR code is generated from the provided URL.
  
- **Download:** Users have the ability to download the generated QR code as an image file.
  
- **Repeat:** Users can easily generate new QR codes after one has been created.

## Implementation Details

The project heavily relies on the `qrcode` library, especially within a custom hook named `useQRCodeGenerator`. This hook centralizes QR code generation logic, ensuring reusability across various sections of the app.

Designed for user-friendliness, the project features a responsive UI to enhance the overall experience. Key implementation details include:

- **Input Validation using regular expression/regEx:** The project allows flexible URL inputs, ensuring adherence to format standards. This approach grants users the freedom to input any URL type.

- **Input Field Focus:** The input field is automatically focused on mount and after the "Repeat" action, enhancing user interaction.

- **Enhanced User Interaction:** Users can press "Enter" instead of clicking "Generate" for added convenience.

These implementations collectively contribute to a seamless and user-friendly QR code generation experience.

### The Problem

This marked my first time creating a custom hook and utilizing useRef in a project. Initially, it was challenging to understand the structure of the hook so I spent a lot of time going through each line of code and their role.

After creating the initial working iteration of the QR generator, I decided to enhance it with various additions. These included ensuring the correct format for file download names and disallowing file names to start with a space. Additionally, I implemented regular expressions (RegEx) to ensure that the QR code generator only functions with URLs.Working with RegEx was challenging as it was my first experience, but I found it enjoyable and learned a lot through different iterations. I consistently encountered new website formats that needed to be added to the RegEx, and I took care to prevent undesired inputs like '//' etc. I also tested more advanced URLs, such as images from a Google search with various characters and lengths, and so far, I haven't found a URL that doesn't work.

I also implemented automatic focus on the input field using useRef so that users can start typing right away. I added a focus color effect to make it more obvious. Another feature is that users don't have to press 'Enter' when generating a new URL image. This change was made because I noticed, during testing, that I kept pressing 'Enter' out of habit, and such a feature would be very convenient. Many of these extra features arose during testing when I noticed things that were missing for my own convenience.

If I had more time, I would have added color options. I did create a version with this, but I soon realized that letting the user choose a color is complicated, as you want to ensure enough contrast between light and dark colors. If I build upon this project later, I want to learn more about this and hope to implement it while still ensuring the QR code is usable.

The image was created using Microsoft's Bing Image Creator, powered by DALL·E 3 as its underlying AI image generator tool. I have previously tried out Midjourney and wanted to give this Image Creator a go and I am really happy about the results.

## Tools Used
- [qrcode](https://www.npmjs.com/package/qrcode): Library for generating QR codes.
- [Image Creator powered by DALL·E 3](https://www.bing.com/images/create): Tool used for image creation.

### View it live

View the project live [here](https://qr-generator-veronica.netlify.app/).

