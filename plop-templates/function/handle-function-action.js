const fs = require('fs-extra');
const path = require('path');
const changeCase = require('change-case');

const fileExists = require('../util/file-exists');
const readFile = require('../util/read-file');
const writeFile = require('../util/write-file');

const NEW_COMPONENT = 'NEW COMPONENT';

function handleFunctionAction(answers, config) {
  const componentName = answers.componentName;
  const componentPath = path.join('src', componentName);
  const functionName = answers.functionName;
  const functionFileName = changeCase.paramCase(functionName);
  const exportTemplate = `export { ${functionName} } from './${functionFileName}';\n`;

  answers.componentName === NEW_COMPONENT && fs.mkdirsSync(componentPath);
  const filePath = path.join(componentPath, 'index.js');

  fileExists(filePath)
    ? fs.appendFileSync(filePath, exportTemplate)
    : writeFile({
        filePath,
        fileData: exportTemplate
      });
  return 'done!';
}
module.exports = handleFunctionAction;
