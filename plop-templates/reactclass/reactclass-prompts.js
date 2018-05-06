const fuzzy = require('fuzzy');
const inquirer = require('inquirer');
const path = require('path');

const autocomplete = require('inquirer-autocomplete-prompt');
// const handleFunctionAction = require('./handle-function-action');
const listDirectories = require('../util/list-directories');
const newComponentIdentifier = require('../util/new-component-identifier');

const rootPath = process.cwd();
const srcPath = path.join(rootPath, './src/components');

const dirList = listDirectories(srcPath);
const componentChoices = [
  ...dirList,
  new inquirer.Separator(),
  newComponentIdentifier,
  new inquirer.Separator()
];

const reactclassPrompts = [
  {
    type: 'input',
    name: 'reactclassName',
    message: 'Class name (pascalCase): '
  },
  {
    type: 'list',
    name: 'componentName',
    message: 'Select component',
    choices: componentChoices
  },
  {
    type: 'input',
    name: 'componentName',
    message: 'Component name: ',
    when: function(answers) {
      return answers.componentName === newComponentIdentifier;
    }
  }
];

module.exports = reactclassPrompts;
