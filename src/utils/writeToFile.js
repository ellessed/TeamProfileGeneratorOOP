const fs = require("fs");

const writeToFile = (path, html) => {
  try {
    fs.writeFileSync(path, html);
  } catch (error) {
    console.log(error);
  }
};

module.exports = writeToFile;
