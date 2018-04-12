const fuzzy = require('fuzzy');
const inquirer = require('inquirer');
const path = require('path');

const autocomplete = require('inquirer-autocomplete-prompt');
const handleFunctionAction = require('./handle-function-action');
const listDirectories = require('./list-directories');
const newComponentIdentifier = require('./new-component-identifier');

const rootPath = process.cwd();
const srcPath = path.join(rootPath, './src');

console.log(`rootPath: ${JSON.stringify(rootPath)}`);

const dirList = listDirectories(srcPath);
const componentChoices = [
  ...dirList,
  new inquirer.Separator(),
  newComponentIdentifier,
  new inquirer.Separator()
];

const functionPrompts = [
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

module.exports = functionPrompts;
