const inquirer = require("inquirer");
const svgBuilder = require("svg-builder");
const fs = require("fs");

function createSVGFile(text, textColor, shape, shapeColor) {
  // generate SVG content
  const svgContent = svgBuilder.createSVG(text, textColor, shape, shapeColor);

  // write the SVG to file: logo.svg
  fs.writeFile("logo.svg", svgContent, (err) => {
    if (err) throw err;
    console.log("Generated logo.svg");
  });
}

// prompt user for input
inquirer
  .prompt([
    {
      type: "input",
      name: "text",
      message: "Enter up to three characters:",
      validate: (input) => input.length <= 3,
    },
    {
      type: "input",
      name: "textColor",
      message: "Enter the text color (keyword or hexadecimal number):",
    },
    {
      type: "list",
      name: "shape",
      message: "Choose a shape:",
      choices: ["circle", "triangle", "square"],
    },
    {
      type: "input",
      name: "shapeColor",
      message: "Enter the shape color (keyword or hexadecimal number):",
    },
  ])
  .then((answers) => {
    const { text, textColor, shape, shapeColor } = answers;

    // call function to create SVG file
    createSVGFile(text, textColor, shape, shapeColor);
  });
