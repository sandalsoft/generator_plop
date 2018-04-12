const path = require('path');
const rootPath = process.cwd();
const srcPath = path.join(rootPath, './src');
const componentActions = [
  {
    type: 'add',
    path: path.join(rootPath, 'src/{{componentName}}/index.js'),
    templateFile: 'plop-templates/component/createIndex.js'
  }
];
module.exports = componentActions;
