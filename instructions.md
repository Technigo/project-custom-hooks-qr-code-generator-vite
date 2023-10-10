# Instructions

## QR Code Generator Project - React and Custom Hooks

This week, you'll explore creating your very first custom hook to create QR codes. The QR Code Generator project lets users type in a URL, turn it into a QR code, and download it as an image. Your task is to understand and possibly expand the existing code to make sure it’s easy to use and works well.

A key part of this project is the qrcode library. This tool helps turn the URLs into QR codes, which are special barcodes that can be scanned to show the URL. The qrcode library is used in two ways in the project:

- Directly: Like in the QrExample component, where it turns a URL into a QR code right in the component.
- In a Custom Hook: Used in the main app logic, inside a custom hook named useQRCodeGenerator, making the QR code creation logic easy to use in different parts of the app.
  As you work through the project, think about how the qrcode library is used, how the QR code data is managed, and how the user interface changes based on the data. Dive in, explore, and have fun coding!

### Context:

The existing codebase provides a solid foundation, and your task is to ensure the creation of a custom hook.

- Attention to Detail: Ensure that the application is user-friendly and that features are implemented thoughtfully.
- Be Honest: If there are aspects of the project that you find challenging or are unable to implement, communicate this transparently.
- If you want a simple tutorial explaining the library you can take a look at this [video](https://youtu.be/74zwJzCTNBE?si=0rz4c2VQ8wes7NFS)

### Core Functionality:

- URL Input: Users should be able to input a URL that will be converted into a QR code.
- QR Code Generation: Upon input, a QR code should be generated from the URL.
- Download: Users should have the ability to download the generated QR code as an image file.
- Repeat: Users should be able to generate a new QR code after one has been created.

### Requirements:

- Your app should use only the `App.jsx` file. No components.
- Custom Hook: Utilize the `useQRCodeGenerator` custom hook to manage the QR code generation logic.
- User-Friendly UI: Ensure that the UI is intuitive and user-friendly.
- Your page should be responsive

### Stretched Goals

In this project, we have the basics in place, but there's plenty of room to make things even better. This is especially true when it comes to making things look nice and using the `qrcode` library.

- Enhanced Styling: While the basic design is clean and easy to use, you can make it even fancier. You might want to try adding a dark mode, some cool animations, or just fine-tune the way it looks to make it even easier to use.

- Expanding `qrcode` Usage: The [`qrcode`](https://www.npmjs.com/package/qrcode) library offers a variety of options for generating QR codes. Explore its documentation and consider implementing additional features, such as adjusting the color, size, or shape of the QR codes, or providing additional user options for customizing the generated QR code.

### Code Insights:

- useQRCodeGenerator Hook: This custom hook manages the logic for generating and downloading QR codes. It manages the state for the input URL, the generated QR code data, and the visibility of the input element. It exposes methods for generating the QR code, downloading it, and resetting the state to generate a new code. Explore the [useQRCodeGenerator.jsx](https://github.com/Technigo/qr-code-generator-demo/blob/main/src/hooks/useQRCodeGenerator.jsx) file for detailed insights.
- App Component: This component serves as the UI for the application, utilizing the `useQRCodeGenerator` hook to manage the QR code generation process. It conditionally renders UI elements based on the state and provides functionality for inputting URLs, generating QR codes, and downloading them. Dive into the [App.jsx](https://github.com/Technigo/project-custom-hooks-qr-code-generator-vite/blob/main/src/App.jsx) file to understand its structure and functionality.
- QrExample Component: Within the components folder, we have provided a component named QrExample.jsx as a foundational example to guide you on how to implement the QR code generation logic. This component serves as a standalone example, separate from the custom hook logic used in the main application. It utilizes the QRCode library directly within the component to generate a QR code from a user-inputted URL. The component maintains local state for the input URL and the generated QR code data using the useState hook from React. Upon inputting a URL and clicking the "Generate" button, the GenerateQRCode function is triggered, converting the URL into a QR code and updating the state with the generated data. The generated QR code is then displayed as an image in the UI, and users have the option to download the image by clicking the "Download" link. This component serves as a straightforward example of how QR code generation can be implemented and might be particularly useful for understanding the basic logic and functionality before diving into the custom hook implementation. Explore and understand the QrExample.jsx component to gain insights into a simpler implementation of QR code generation.

Happy coding!
