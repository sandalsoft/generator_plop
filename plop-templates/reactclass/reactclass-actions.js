const path = require('path');
const rootPath = process.cwd();
// const srcPath = path.join(rootPath, './src');
const reactclassActions = [
  {
    type: 'add',
    // path defaults to the plop project folder.  need to pass absolute paths here
    path: path.join(
      rootPath,
      'src/components/{{componentName}}/{{pascalCase reactclassName}}.js'
    ),
    templateFile: 'plop-templates/reactclass/createreactclass.tmpl.js'
  },
  {
    type: 'actionAddExportToIndex',
    projectType: 'react',
    componentsRootPath: path.join(rootPath, 'src', 'components')
  }
];

module.exports = reactclassActions;
