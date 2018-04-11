const fs = require('fs-extra');
const path = require('path');
const changeCase = require('change-case');

const fileExists = require('../util/file-exists');
const readFile = require('../util/read-file');
const writeFile = require('../util/write-file');

function handleFunctionAction(answers) {
  console.log(`answers: ${JSON.stringify(answers)}`);
  const componentName = answers.componentName;
  const functionName = answers.functionName;
  const functionFileName = changeCase.paramCase(functionName);
  const exportTemplate = `export { ${functionName} } from './${functionFileName}';\n`;

  const indexPath = path.join('src', componentName, 'index.js');
  console.log(`indexPath: ${JSON.stringify(indexPath)}`);
  fileExists(indexPath)
    ? fs.appendFileSync(indexPath, exportTemplate)
    : writeFile({
        filePath: indexPath,
        fileData: exportTemplate
      });
  return 'done!';
}
module.exports = handleFunctionAction;
