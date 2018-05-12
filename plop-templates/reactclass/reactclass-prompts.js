const fuzzy = require('fuzzy');
const inquirer = require('inquirer');
const path = require('path');

var getProjectDetails = require('../util/get-project-details');

const autocomplete = require('inquirer-autocomplete-prompt');
// const handleFunctionAction = require('./handle-function-action');
const listDirectories = require('../util/list-directories');
const newComponentIdentifier = require('../util/new-component-identifier');

// const srcPath = path.join(rootPath, './src/components');
const { featuresBasePath } = getProjectDetails({
  answers: { projectType: 'react' }
});
console.log(`featuresBasePath: ${JSON.stringify(featuresBasePath)}`);
const dirList = listDirectories(featuresBasePath); // was (srcPath)
const componentChoices = [
  ...dirList,
  new inquirer.Separator(),
  newComponentIdentifier,
  new inquirer.Separator()
];

const reactclassPrompts = [
  {
    type: 'input',
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
