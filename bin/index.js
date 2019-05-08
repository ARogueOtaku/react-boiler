#! /usr/bin/env node
var cp = require('child_process');
var fs = require('fs');
var folders = require('../resources/folders');
var {packageJsonContents, webpackConfigContents, htmlContents, scriptContents} = require('../resources/fileContents');
console.log('Creating necessary folders...');
for(var folder of folders)
  if(!fs.existsSync(folder)) fs.mkdirSync(folder);
console.log('Folders created!');
console.log('==============================');
console.log(process.argv[2]);
console.log('|-node_modules');
console.log('|--|-[Dependencies]');
console.log('|-dist');
console.log('|--|-index.html');
console.log('|-src');
console.log('|--|-script.js');
console.log('|-webpack.config.js');
console.log('|-package.json');
console.log('==============================');
console.log('Creating package.json for your App...')
fs.writeFileSync(`${process.argv[2]}/package.json`, packageJsonContents);
console.log('package.json created!');
console.log('------------------------------');
console.log('Creating Webpack config for your App...')
fs.writeFileSync(`${process.argv[2]}/webpack.config.js`, webpackConfigContents);
console.log('Webpack config created!');
console.log('------------------------------');
console.log('Creating html of your App...')
fs.writeFileSync(`${process.argv[2]}/dist/index.html`, htmlContents);
console.log('HTML created!');
console.log('------------------------------');
console.log('Creating script of your App...')
fs.writeFileSync(`${process.argv[2]}/src/script.js`, scriptContents);
console.log('Script created!');
console.log('------------------------------');
console.log('Installing Dependencies... This will take some time...');
cp.exec(`npm install`,{cwd:`./${process.argv[2]}`},(err, sout, serr) => {
  if (err) {
    console.error(`exec error: ${err}`);
    cp.exec(`rm -r ${process.argv[2]}`);
    return;
  }
  console.log(`stdout: ${sout}`);
  console.log(`stderr: ${serr}`);
  console.log('Dependencies installed');
});