const path = require('path');
const rootPath = process.cwd();
const srcPath = path.join(rootPath, './src');
const functionActions = [
  {
    type: 'add',
    // path defaults to the plop project folder.  need to pass absolute paths here
    path: path.join(
      rootPath,
      'src/{{componentName}}/{{kebabCase functionName}}.js'
    ),
    templateFile: 'plop-templates/function/createFunction.tmpl.js'
  },
  {
    type: 'add',
    path: path.join(
      rootPath,
      'src/{{componentName}}/{{kebabCase functionName}}.test.js'
    ),
    templateFile: 'plop-templates/function/createTest.tmpl.js'
  },
  {
    type: 'addExportToIndex',
    indexPath: path.join(rootPath, 'src/{{componentName}}/index.js')
  }
];

module.exports = functionActions;
