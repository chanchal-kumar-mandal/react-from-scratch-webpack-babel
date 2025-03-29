# 🔥 React from Scratch with Webpack & Babel – No CRA, No Vite, Just Pure Magic! ⚛️🚀

This project demonstrates setting up a React application from scratch without using Create React App or Vite. It provides a deeper understanding of the underlying build process, Webpack bundling, and Babel transpilation for modern JavaScript applications.

This enhanced Todo List application showcases fundamental React concepts, including state management, event handling, dynamic styling, and component composition. It also highlights how Webpack optimizes asset bundling and how Babel enables modern JavaScript and JSX compatibility across different browsers. This project emphasizes a practical approach to building interactive UIs while efficiently managing themes and user interactions. 🚀

## Live App: [https://chanchal-kumar-mandal.github.io/react-from-scratch-webpack-babel/](https://chanchal-kumar-mandal.github.io/react-from-scratch-webpack-babel/)

## Demo Screenshots
![react-from-scratch-webpack-babel-image-1](https://github.com/user-attachments/assets/9c971997-6420-4503-ae81-c9c47a8698bb)
![react-from-scratch-webpack-babel-image-2](https://github.com/user-attachments/assets/29dba114-0fe9-46f3-8f5c-3b97113657ef)
![react-from-scratch-webpack-babel-image-3](https://github.com/user-attachments/assets/f8971365-3732-4136-9aab-ebcc2d316a7b)
![react-from-scratch-webpack-babel-image-4](https://github.com/user-attachments/assets/f8a3614b-72ef-4c19-95df-7a9594ffc0e8)

## 1. Project Setup

* **Create a new directory:**

    ```bash
    mkdir react-from-scratch-webpack-babel
    cd react-from-scratch-webpack-babel
    ```

* **Initialize `package.json`:**

    ```bash
    npm init -y
    # or
    yarn init -y
    ```

    This creates a `package.json` file with default settings. This file will hold metadata about your project and manage dependencies.

* **Install React and React DOM:**

    ```bash
    npm install react react-dom
    # or
    yarn add react react-dom
    ```

    This installs the `react` library (for defining components) and the `react-dom` library (for rendering components in the browser).

## 2. Webpack Configuration

* **Install Webpack and Webpack CLI:**

    ```bash
    npm install webpack webpack-cli --save-dev
    # or
    yarn add webpack webpack-cli --dev
    ```

    `webpack` is the module bundler, and `webpack-cli` allows you to use Webpack from the command line. The `--save-dev` flag ensures these are saved as development dependencies (not needed in production).

* **Create `webpack.config.js`:**

    ```javascript
    const path = require('path');
    const HtmlWebpackPlugin = require('html-webpack-plugin');

    module.exports = {
        entry: './src/index.js', // Entry point of your application
        output: {
            path: path.resolve(__dirname, 'dist'), // Output directory
            filename: 'bundle.js', // Name of the bundled file
        },
        module: {
            rules: [
                {
                    test: /\.js$/, // Apply Babel loader to .js files
                    exclude: /node_modules/,
                    use: 'babel-loader',
                },
                {
                    test: /\.css$/, // Apply CSS loader to .css files
                    use: ['style-loader', 'css-loader'],
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './public/index.html', // Template HTML file
            }),
        ],
        devServer: {
            static: {
                directory: path.join(__dirname, 'dist'),
            },
            compress: true,
            port: 3000,
        },
    };
    ```

    * `entry`: Specifies the entry point of your application (`./src/index.js`).
    * `output`: Defines where the bundled files should be placed (`dist/bundle.js`).
    * `module.rules`: Defines how different file types should be handled.
        * `babel-loader` for `.js` files (to transpile JSX and ES6+).
        * `style-loader` and `css-loader` for `.css` files.
    * `plugins`:
        * `HtmlWebpackPlugin`: Generates an HTML file (`dist/index.html`) and automatically includes the bundled JavaScript.
    * `devServer`: Configures a development server for hot reloading and serving the application.

* **Install `html-webpack-plugin`, `style-loader` and `css-loader`:**

    ```bash
    npm install html-webpack-plugin style-loader css-loader --save-dev
    # or
    yarn add html-webpack-plugin style-loader css-loader --dev
    ```

## 3. Babel Setup

* **Install Babel Dependencies:**

    ```bash
    npm install @babel/core @babel/preset-env @babel/preset-react babel-loader --save-dev
    # or
    yarn add @babel/core @babel/preset-env @babel/preset-react babel-loader --dev
    ```

    * `@babel/core`: The core Babel compiler.
    * `@babel/preset-env`: A Babel preset that allows you to use the latest JavaScript.
    * `@babel/preset-react`: A Babel preset for React JSX.
    * `babel-loader`: Webpack loader to use Babel for JavaScript files.

* **Create `.babelrc`:**

    ```json
    {
        "presets": ["@babel/preset-env", "@babel/preset-react"]
    }
    ```

    This file tells Babel to use the `@babel/preset-env` and `@babel/preset-react` presets. Alternatively, you can use `babel.config.js`.

## 4. HTML Setup

* **Create `public/index.html`:**

    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>React from Scratch</title>
    </head>
    <body>
        <div id="root"></div>
    </body>
    </html>
    ```

    This is the basic HTML file where your React application will be mounted. The `<div id="root"></div>` is important; React will render your components inside this div.

## 5. React Entry Point

* **Create `src/index.js`:**

    ```javascript
    import React from 'react';
    import ReactDOM from 'react-dom/client';

    const App = () => {
        return <h1>Hello from React!</h1>;
    };

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<App />);
    ```

    This is the main JavaScript file that initializes the React application. It imports React and ReactDOM, defines a simple component (`App`), and renders it into the `root` element in `index.html`.

* **For the TodoList application code, please refer to `src/todo/TodoList.js` (Note: You may need to create this file and move the TodoList code into it).**

        To use the TodoList, you would update `src/index.js` to import and render the `TodoList` component instead of the `App` component shown above.

## 6. Development Server (Optional but Recommended)

* The `webpack-dev-server` configuration is already included in `webpack.config.js`.

* **Add npm script:**

    ```json
    // package.json
    {
        "scripts": {
            "start": "webpack serve --mode development",
            "build": "webpack --mode production"
        },
        // ... other configurations
    }
    ```

* **Run the development server:**

    ```bash
    npm start
    # or
    yarn start
    ```

    This will start the development server, and you can view your application in the browser (usually at `http://localhost:3000`).

## 7. Project Structure

react-from-scratch-webpack-babel/
├── public/
│   └── index.html
├── src/
│   └── index.js
├── .babelrc
├── package.json
├── webpack.config.js
└── node_modules/

## Explanation of Key Points

* **Webpack:** Webpack bundles all your JavaScript files (and other assets) into a single file (or a few optimized files) that the browser can understand. This is necessary because browsers don't natively support all the latest JavaScript features or module systems.
* **Babel:** Babel converts your modern JavaScript code (ES6+, JSX) into code that older browsers can run. JSX is a syntax extension that allows you to write HTML-like code within your JavaScript.
* `package.json`: This file is crucial for managing dependencies and scripts.
* `node_modules`: This directory contains all the installed packages.
* `src/index.js`: This is the entry point of your React application.
* `public/index.html`: This is the main HTML file.
* `.babelrc`: This file configures Babel.
* `webpack.config.js`: This file configures Webpack.

This detailed breakdown should give you a solid foundation for creating a React project from scratch!