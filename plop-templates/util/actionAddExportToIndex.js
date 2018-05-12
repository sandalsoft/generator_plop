const fs = require('fs-extra');
const path = require('path');
const changeCase = require('change-case');
const getProjectDetails = require('./get-project-details');
const fileExists = require('./file-exists');
const newComponentIdentifier = require('./new-component-identifier');

function handleFunctionAction(answers, config) {
  // console.log(`config: ${JSON.stringify(config)}`);
  // console.log(`answers: ${JSON.stringify(answers)}`);
  const componentName = answers.componentName;

  const componentPath = path.join(config.componentsRootPath, componentName);

  const { exportName, moduleFilename } = getProjectDetails(answers);
  const exportTemplate = `export { ${exportName} } from './${moduleFilename}';\n`;

  answers.componentName === newComponentIdentifier &&
    fs.mkdirsSync(componentPath);
  const filePath = path.join(componentPath, 'index.js');
  fileExists(filePath)
    ? fs.appendFileSync(filePath, exportTemplate)
    : fs.writeFileSync(filePath, exportTemplate);
  return 'done!';
}
module.exports = handleFunctionAction;
