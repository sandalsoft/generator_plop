const fs = require('fs-extra');
const path = require('path');
const changeCase = require('change-case');

const fileExists = require('./file-exists');
const newComponentIdentifier = require('./new-component-identifier');

function getFilename(config) {
  //if projectType=== react, return PascalCase(config.functionNAme)
  //if projectType=== node, getNodeFilename(config.functionNAme)
}
function getNodeFilename(functionNAme) {
  //return camelCase(functionNAme)
}
function getReactFilename(componentName) {
  //return PascalCase(componentName)
}
function handleFunctionAction(answers, config) {
  console.log(`config: ${JSON.stringify(config)}`);
  const componentName = answers.componentName;

  // const componentPath = path.join(process.cwd(), 'src', componentName);
  const componentPath = path.join(config.componentsRootPath, componentName);

  const functionName = answers.functionName;
  const functionFileName = changeCase.paramCase(functionName);
  const exportTemplate = `export { ${functionName} } from './${functionFileName}';\n`;

  answers.componentName === newComponentIdentifier &&
    fs.mkdirsSync(componentPath);
  const filePath = path.join(componentPath, 'index.js');
  fileExists(filePath)
    ? fs.appendFileSync(filePath, exportTemplate)
    : fs.writeFileSync(filePath, exportTemplate);
  return 'done!';
}
module.exports = handleFunctionAction;
