const _ = require("lodash");
const fuzzy = require("fuzzy");
const inquirer = require("inquirer");
const listDirectories = require("./list-directories");
const dirList = listDirectories("./src");
const componentSource = ["NEW COMPONENT", ...dirList];

inquirer.registerPrompt(
  "autocomplete",
  require("inquirer-autocomplete-prompt")
);

function searchComponent(answers, input) {
  input = input || "";
  return new Promise(function(resolve) {
    setTimeout(function() {
      const fuzzyResult = fuzzy.filter(input, componentSource);
      resolve(
        fuzzyResult.map(function(el) {
          return el.original;
        })
      );
    }, _.random(30, 500));
  });
}

const componentPrompt = inquirer.prompt({
  type: "autocomplete",
  name: "componentName",
  message: "Select component",
  source: searchComponent
});

// module.exports = componentPrompt;
module.exports = searchComponent;
