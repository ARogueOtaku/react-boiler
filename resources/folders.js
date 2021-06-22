function getFolders(appName) {
  return [appName, `${appName}/src`, `${appName}/dist`, `${appName}/node_modules`];
}

module.exports = getFolders;
