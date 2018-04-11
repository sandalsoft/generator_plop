const fuzzy = require('fuzzy');
const inquirer = require('inquirer');

const handleFunctionAction = require('./plop-templates/function/handle-function-action');
const listDirectories = require('./plop-templates/function/list-directories');

const dirList = listDirectories('./src');
const componentChoices = [
  'NEW COMPONENT',
  new inquirer.Separator(),
  ...dirList
];

module.exports = function(plop) {
  plop.setActionType('addExportToIndex', function(answers, config, plop) {
    return handleFunctionAction(answers, config);
  });

  plop.setGenerator('function', {
    description: 'Create a new function',
    prompts: [
      {
        type: 'input',
        name: 'functionName',
        message: 'Function name (pascalCase): '
      },
      {
        type: 'list',
        name: 'componentName',
        message: 'Select component',
        choices: componentChoices
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/{{componentName}}/{{kebabCase functionName}}.js',
        templateFile: 'plop-templates/function/createFunction.tmpl.js'
      },
      {
        type: 'add',
        path: 'src/{{componentName}}/{{kebabCase functionName}}.test.js',
        templateFile: 'plop-templates/function/createTest.tmpl.js'
      },
      {
        type: 'addExportToIndex',
        indexPath: 'src/{{componentName}}/index.js'
        //   // templateFile: 'plop-templates/function/appendExportToIndex.tmpl.js',
        //   teomplate: `export { {{ functionName }} } from './{{kebabCase functionName}}';`
      }
    ]
  });

  plop.setGenerator('component', {
    description: 'Node application component',
    prompts: [
      {
        type: 'input',
        name: 'componentName',
        message: 'Component name: '
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/{{componentName}}/index.js',
        templateFile: 'plop-templates/component/createIndex.js'
      }
    ]
  });
};
