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
    type: 'actionAddExportToIndex',
    projectType: 'node',
    // indexPath: path.join(rootPath, 'src/{{componentName}}/index.js')
    componentsRootPath: path.join(rootPath, 'src')
  },
  {
    type: 'add',
    path: path.join(rootPath, 'test/{{kebabCase functionName}}.stub.json'),
    templateFile: 'plop-templates/function/createTestStub.tmpl.js'
  }
];

module.exports = functionActions;
