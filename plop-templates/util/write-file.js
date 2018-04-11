const fs = require('fs-extra');
const path = require('path');

const fileExists = require('./file-exists');

/**
 *
 * @param {Object}
 */
function writeFile({ filePath, fileData, encoding = 'utf8' }) {
  const parentDirectory = path.dirname(filePath);
  !fileExists(parentDirectory) &&
    (() => {
      throw new Error(`${parentDirectory} does not exist.`);
    });

  fileExists(filePath) &&
    (() => {
      throw new Error(`${filePath} already exists.`);
    });
  try {
    fs.writeFileSync(filePath, fileData, { encoding });
    return true;
  } catch (err) {
    throw new Error(err);
  }
}

module.exports = writeFile;
