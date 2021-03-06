# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Notes App

A basic notes app in which you can create new notes , delete and edit existing ones. The app uses following libraries and features:

### Redux

A Javascript library which is used to manage react state in a way that it is accessible to any component in react application. In this application I used redux to store the data temporarily as there is no backened integrated. Redux is also used to implement a theme color feature.

### MUI

Material UI is a library which provides React components which are used to improve UI design. These components are easily customizable. I have utilized Grid Component to set structure of the main page.

### React-Toastify

React-toastify is a react package which is used to display alert messages, notifications and pop ups. They can be personalized to fit your UI requirments. 

### UUID

UUID (Universal Unique Identifier) is a javascript library which enables us to generate a unique key for an element or componenet. I have used UUID to generate an id for each note which the user saves. Edit and Delete functions utilize this id .

### Theme Color

I have used Redux to create a dark and light mode which changes the color mode of the app. 

### Search

A simple search function is implemented in js. It filters out the notes which includes the text user wants to search.
