const fs = require('fs-extra');
const path = require('path');

function listDirectories(filePath) {
  return fs
    .readdirSync(filePath)
    .filter((fileName) =>
      fs.statSync(path.join(filePath, fileName)).isDirectory()
    );
}
module.exports = listDirectories;
