const fs = require('fs-extra');

function fileExists(filePath) {
  return fs.existsSync(filePath);
}

module.exports = fileExists;
