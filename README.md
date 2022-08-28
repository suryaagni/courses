# Seed project for  Courses UI

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation

### NodeJS

The seed project requires NodeJS LTS or greater to be installed. It is recommended that you install NodeJS with a version manager, for instance [n](https://github.com/tj/n).

```
curl -L https://git.io/n-install | bash
```

### YarnPKG

[Yarn](https://yarnpkg.com/) is a package manager that is more predictable than NPM.

```
brew update
brew install yarn
```

### Project Dependencies

Install all the dependencies for your project.

```
npm install
```

## Running the service in development

This project uses [Webpack](https://webpack.js.org/) for development and packaging.

### Run App

```
npm start
```

The "start" script will start the Webpack Dashboard which manages compiling the files, and serves the main application at [https://localhost:3000]

While running webpack in "dev mode" watchers will re-compile the source code and "hot-reload" the browsers files so you do not have the reload your browser when you make changes to the client side code (src).
## Testing

Test are written using [Jest](http://facebook.github.io/jest/) and [ReactTestingLibrary] Tests can be run manually from the terminal with `yarn test`.
Jest runs in NodeJS so you can utilise the NodeJs debugger and set break points in the code.

In intellij or Webstorm:

- Create a new NodeJS run/debug configuration and give it a name something like "Unit Testing" or "Jest"
- Change the field "Javascript file" to "node_modules/.bin/jest"
- Set the field "Application parameters" to "--runInBand"
- Set breakpoints and enjoy debugging

### Build App

 `npm build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### Code 

The "src" folder consists of directory called Containers which makes the api calls and renders the component once get the response.

### Redux tool kit

The app uses redux tool kit for efficient state managment.