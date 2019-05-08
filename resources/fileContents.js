var packageJsonContents = JSON.stringify({
    "name": "react-app",
    "version": "1.0.0",
    "description": "React Custom Boiler",
    "main": "src/index.js",
    "scripts": {
        "build": "webpack --mode production",
        "start": "webpack-dev-server --config webpack.config.js --hot --open --contentBase dist"
    },
    "keywords": [],
    "author": "Amit Das",
    "license": "MIT",
    "dependencies": {
      "react": "^16.8.6",
      "react-dom": "^16.8.6"
    },
    "devDependencies": {
      "@babel/core": "7.4.4",
      "@babel/preset-env": "7.4.4",
      "@babel/preset-react": "7.0.0",
      "webpack": "4.30.0",
      "webpack-cli": "3.3.2",
      "webpack-dev-server": "3.3.1",
      "babel-loader": "8.0.5"
    }
  }, null, 4);

var webpackConfigContents = `const path = require('path');
module.exports = {
    "entry": "./src/script.js",
    "output":{
        "path": path.resolve(__dirname, "dist"),
        "filename": "main.js"
    },
    "module":{
        "rules":[
            {
                "test":/\.jsx?$/,
                "exclude":[path.resolve(__dirname,"node_modules")],
                "loader":"babel-loader",
                "options":{
                        "presets":["@babel/env", "@babel/react"]
                    }
                }
            ]
    }
}`;

var htmlContents = `<!DOCTYPE html>
<html>
    <head>
        <title>React Boiler</title>
    </head>
    <body>
        <div id="app"></div>
        <script src = 'main.js'></script>
    </body>
</html>`

var scriptContents = `import React from 'react';
import ReactDOM from 'react-dom';

const App = () =>{
    return(
        <div>
            <h1>It's working!!!</h1>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#app'));`

module.exports = {
    packageJsonContents,
    webpackConfigContents,
    htmlContents,
    scriptContents
}