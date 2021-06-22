#!/usr/bin/env node
const fs = require("fs");
const appName = process.argv[2] || "AFrugalOutline";
const authorName = process.argv[3] || "CaptainBarebones";
const folders = require("../resources/folders")(appName);
const {
  getPackageJsonContents,
  getWebpackConfigContents,
  getHtmlContents,
  getScriptContents,
} = require("../resources/fileContents");

const packageJsonContents = getPackageJsonContents(appName, authorName);
const webpackConfigContents = getWebpackConfigContents();
const htmlContents = getHtmlContents(appName);
const scriptContents = getScriptContents(appName, authorName);

console.log("Creating necessary folders...");
for (let folder of folders) if (!fs.existsSync(folder)) fs.mkdirSync(folder);
console.log("==============================");
console.log("Creating package.json for your App...");
fs.writeFileSync(`${appName}/package.json`, packageJsonContents);
console.log("package.json created!");
console.log("------------------------------");
console.log("Creating Webpack config for your App...");
fs.writeFileSync(`${appName}/webpack.config.js`, webpackConfigContents);
console.log("Webpack config created!");
console.log("------------------------------");
console.log("Creating html of your App...");
fs.writeFileSync(`${appName}/dist/index.html`, htmlContents);
console.log("HTML created!");
console.log("------------------------------");
console.log("Creating script of your App...");
fs.writeFileSync(`${appName}/src/script.js`, scriptContents);
console.log("Script created!");
console.log("------------------------------");
console.log("Folders and Files created!");
console.log("------------------------------");
console.log(appName);
console.log("|-node_modules");
console.log("|--|-[Dependencies]");
console.log("|-dist");
console.log("|--|-index.html");
console.log("|-src");
console.log("|--|-script.js");
console.log("|-webpack.config.js");
console.log("|-package.json");
console.log("=============================");
console.log("All Complete! :)");
console.log(`Please run "cd ${appName}" and then "npm install" before staring the App.`);
