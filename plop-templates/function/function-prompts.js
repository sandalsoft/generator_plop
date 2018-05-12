const fuzzy = require('fuzzy');
const inquirer = require('inquirer');
const path = require('path');
const autocomplete = require('inquirer-autocomplete-prompt');

const getProjectDetails = require('../util/get-project-details');
const handleFunctionAction = require('./handle-function-action');
const listDirectories = require('../util/list-directories');
const newComponentIdentifier = require('../util/new-component-identifier');
const fileExists = require('../util/file-exists');

// const srcPath = path.join(rootPath, './src');
const projectDetails = getProjectDetails({
  answers: { projectType: 'node' }
});

const dirList = fileExists(projectDetails.featuresBasePath)
  ? listDirectories(projectDetails.featuresBasePath)
  : '';

const componentChoices = [
  ...dirList,
  new inquirer.Separator(),
  newComponentIdentifier,
  new inquirer.Separator()
];

const functionPrompts = [
  {
    type: 'list',
    name: 'projectType',
    message: 'Project Type: ',
    choices: ['react', 'node']
  },
  {
    type: 'input',
    name: 'functionName',
    message: 'Function name (pascalCase): '
  },
  {
    type: 'list',
    name: 'componentName',
    message: 'Select node component',
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
