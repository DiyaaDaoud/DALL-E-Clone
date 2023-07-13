## Project Goal

This is a React app that communicates with OpenAI's famous project, DALL-E, so users can generate stunning images and share them on our website.

## Live Demo

To check the app, please visit this [Link](https://dall-e-clone-alpha.vercel.app/)

## Project Details

This project allows users to:
  - Create images based on a prompt they type, or a random prompt from our website.
  - Share the new image with the comunity to be shown on the website's main page.
  - Download the generated image in 1024x1024.


This is done as follows:
  - Generating an image:
    - the user types his name and the prompt then clicks "Generate".
    - the prompt is sent from the client side, wrapped in a POST request, to our deployed DALL-E back-end API.
    - the server side will extract the prompt from the request body, and calls OpenAI's "createImage" function on that prompt.
    - if the image is successfully generated, it will be sent back to the front-end side in a base_64 json format.
    - finally, the UI will be updated to show the new generated image.
  - Sharing an image:
    -  when the user clicks "Share with Community", the data {name, prompt, image} will be sent to our deployed post back-end API, wrapped in a POST request.
    -  the server side will extract the image, and upload it to cloudinary, then gets the new URL from cloudinary.
    -  the new data structure {name, prompt, newURL} will be saved in our Mongo DB project.
    -  if we have a successfull upload and save, the server will send the new data structure to the front-end
  - Getting uploaded images:
    -  each time we visit the Home page, a GET request will be sent to the back-end to fetch the data.
    -  the server side will recieve the request and get each and every elemnt save in our Mongo DB project.
    -  then the data is sent back to the Home page in the front-end side, and saved in a state variable based on the latest shared image.
    

## Project Tools:

  - React
  - Node JS
  - Express: to initialize an Express application.
  - OpenAI: to communicate with DALL-E and generate images based on a prompt.
  - cloudinary: to upload images and get their URL.
  - Mongo DB: to save keep track of the shared images with their prompt and the name of the user.
