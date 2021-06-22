function getPackageJsonContents(appName, authorName) {
  return JSON.stringify(
    {
      name: appName,
      version: "1.0.0",
      description: "An awesome reactjs app called " + appName,
      main: "src/index.js",
      scripts: {
        build: "webpack --mode production",
        start: "webpack-dev-server --config webpack.config.js --hot --open --contentBase dist",
      },
      keywords: [],
      author: authorName,
      license: "ISC",
      dependencies: {
        react: "^16.8.6",
        "react-dom": "^16.8.6",
      },
      devDependencies: {
        "@babel/core": "7.4.4",
        "@babel/preset-env": "7.4.4",
        "@babel/preset-react": "7.0.0",
        webpack: "4.30.0",
        "webpack-cli": "3.3.2",
        "webpack-dev-server": "3.3.1",
        "babel-loader": "8.0.5",
      },
    },
    null,
    4
  );
}

function getWebpackConfigContents() {
  return `const path = require('path');
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
}

function getHtmlContents(appName) {
  return `<!DOCTYPE html>
<html>
    <head>
        <title>${appName}</title>
    </head>
    <body>
        <div id="app"></div>
        <script src = 'main.js'></script>
    </body>
</html>`;
}

function getScriptContents(appName, authorName) {
  return `import React from 'react';
import ReactDOM from 'react-dom';

const App = () =>{
    return(
        <div>
            <h1>${appName}</h1>
            <h6>by ${authorName}</h6>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#app'));`;
}

module.exports = {
  getHtmlContents,
  getPackageJsonContents,
  getWebpackConfigContents,
  getScriptContents,
};
