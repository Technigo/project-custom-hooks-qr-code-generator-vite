<h1 align="center">
  <a href="">
    <img src="/src/assets/custom-hooks.svg" alt="Project Banner Image">
  </a>
</h1>

# QR Code Generator - Custom Hook Project

React & Vite App to generate QR codes from URLs, utilising custom hooks for efficient state management.

## Getting Started with the Project

### Dependency Installation & Startup Development Server

Once cloned, navigate to the project's root directory and this project uses npm (Node Package Manager) to manage its dependencies.

The command below is a combination of installing dependencies, opening up the project on VS Code and it will run a development server on your terminal.

```bash
npm i && code . && npm run dev
```

### The Problem

<ins>Describe how you approached to problem</ins>: I first went through all of the instructions and hints within the code, making sure I understood each step, then I slowly line by line copied the helper code into the custom hook, add code along the way. My main problem was with Hint 9-11, creating a anchor to then save the download using the filname the user inputs with a prompt. I got this to work only by having new text appear on the page so the user had to first click "download" then the new link appeared and they would need to make a second click to "download" the oversion they have named. I was unsure how to dynamically create the <a> in the correct spot (I wanted it to encase the button).

To solve this problem I changed my approach and focused on the donwload button. I changed the formattedFileName into a useState variable and then my downloadURL function was able to see it (I tried to pass it as props but this didnt work, then I remembered state!). It works this way.

I was happy with my buttons, I used useState to hide and display all my buttons when they were relevant for the user.
The UI begins with ONLY the Generation button and once generated the Download and Try Again buttons appear and the Generate and input field are hidden.

<ins>What tools and techniques you used to solve it</ins>: I uses UseState to handle state manamgement, to handle passing the formatted file name to the download button, and to hide/display the buttons and input.

<ins>What technologies did you use?</ins>: HTML5, CSS3, React, useState, custom Hooks, with Editor: VS Code

<ins>If you had more time, what would be next?</ins>: I would do more styling, though I think I have found a font I really like and might use again. I would also explore the QR Library.

### View it live

https://wk12-custom-hooks-qrcodes-7bd79e.netlify.app/

### Screenshots

![Screenshot of Home page](/public//screenshot1.png?raw=true "Screenshot of Home page") ![Screenshot of Result page](/public//screenshot2.png?raw=true "Screenshot of Result page")



## Instructions

<a href="instructions.md">
   See instructions of this project
  </a>
