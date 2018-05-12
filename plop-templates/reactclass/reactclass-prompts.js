const fuzzy = require('fuzzy');
const inquirer = require('inquirer');
const path = require('path');
const autocomplete = require('inquirer-autocomplete-prompt');

var getProjectDetails = require('../util/get-project-details');
const listDirectories = require('../util/list-directories');
const newComponentIdentifier = require('../util/new-component-identifier');
const fileExists = require('../util/file-exists');

const projectDetails = getProjectDetails({
  projectType: 'react'
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

const reactclassPrompts = [
  {
    type: 'list',
    name: 'projectType',
    message: 'Project Type: ',
    choices: ['react', 'node']
  },
  {
    type: 'input',
    name: 'reactclassName',
    message: 'Class name (pascalCase): '
  },
  {
    type: 'list',
    name: 'reactclassType',
    message: 'Type to create: ',
    choices: ['statefulClass', 'statelessFunction']
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
