// const inquirer = require('inquirer');
const path = require("path");

<<<<<<< HEAD
const handleFunctionAction = require("./plop-templates/function/handle-function-action");
// const listDirectories = require('./plop-templates/function/list-directories');
const functionPrompts = require("./plop-templates/function/function-prompts");
const functionActions = require("./plop-templates/function/function-actions");
const componentPrompts = require("./plop-templates/component/component-prompts");
const componentActions = require("./plop-templates/component/component-actions");

// console.log(`rootPath: ${JSON.stringify(rootPath)}`);

module.exports = function(plop) {
  plop.setActionType("addExportToIndex", function(answers, config, plop) {
    return handleFunctionAction(answers, config);
  });

  // plop.getDestBasePath;
  plop.setGenerator("function", {
    description: "Create a new function",
=======
const actionAddExportToIndex = require('./plop-templates/util/actionAddExportToIndex');
const listDirectories = require('./plop-templates/util/list-directories');
const functionPrompts = require('./plop-templates/function/function-prompts');
const functionActions = require('./plop-templates/function/function-actions');
const componentPrompts = require('./plop-templates/component/component-prompts');
const componentActions = require('./plop-templates/component/component-actions');
const reactclassPrompts = require('./plop-templates/reactclass/reactclass-prompts');
const reactclassActions = require('./plop-templates/reactclass/reactclass-actions');

module.exports = function(plop) {
  plop.setActionType('actionAddExportToIndex', function(answers, config, plop) {
    return actionAddExportToIndex(answers, config);
  });

  plop.setGenerator('reactclass', {
    description: 'Create a new React class',
    prompts: reactclassPrompts,
    actions: reactclassActions
  });

  plop.setGenerator('function', {
    description: 'Create a new function',
>>>>>>> origin/react_project_support
    prompts: functionPrompts,
    actions: functionActions
  });

  plop.setGenerator("component", {
    description: "Node application component",
    prompts: componentPrompts,
    actions: componentActions
  });
};
