const path = require('path');

const reactclassActions = function(answers) {
  const rootPath = process.cwd();
  return [
    reactTypeTemplateAction(answers.reactclassType, rootPath),
    actionAddExportToIndex(rootPath)
  ];
};

const reactTypeTemplateAction = function(type, rootPath = process.cwd()) {
  const templateFile =
    type === 'class'
      ? 'plop-templates/reactclass/createreactclass.tmpl.js'
      : 'plop-templates/reactclass/createreactfunction.tmpl.js';

  return {
    type: 'add',
    path: path.join(
      rootPath,
      'src',
      'components',
      '{{componentName}}',
      '{{pascalCase reactFeature}}.js'
    ),
    templateFile
  };
};
const actionAddExportToIndex = function(rootPath = process.cwd()) {
  return {
    type: 'actionAddExportToIndex',
    projectType: 'react',
    componentsRootPath: path.join(rootPath, 'src', 'components')
  };
};

module.exports = reactclassActions;
