const fs = require('fs-extra');

function readFile({ filePath, encoding = 'utf8' }) {
  try {
    const content = fs.readFileSync(filePath, {
      encoding: encoding
    });
    return content;
  } catch (err) {
    throw new Error(err);
  }
}

module.exports = readFile;
