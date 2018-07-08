const path = require('path');
const changeCase = require('change-case');

const fileExists = require('./file-exists');
const newComponentIdentifier = require('./new-component-identifier');
const rootPath = process.cwd();

function getNodeProjectDetails(answers) {
  return {
    moduleFilename: changeCase.paramCase(answers.functionName),
    exportName: answers.functionName,
    featuresBasePath: path.join(rootPath, 'src')
  };
}

function getReactProjectDeatils(answers) {
  return {
    moduleFilename: changeCase.pascalCase(answers.reactFeature),
    exportName: answers.reactFeature,
    featuresBasePath: path.join(rootPath, 'src', 'components')
  };
}
function getProjectDetails(answers) {
  const types = {
    react: function() {
      return getReactProjectDeatils(answers);
    },
    node: function() {
      return getNodeProjectDetails(answers);
    },
    default: function() {
      console.log('DEFAULT() CALLED');
      return getNodeProjectDetails(answers);
    }
  };
  return (types[answers.projectType] || types['node'])();
}

module.exports = getProjectDetails;
