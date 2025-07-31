const fs = require("fs");

function saveUserInput(filename, content) {
  // ❌ No sanitization/validation of filename
  fs.writeFile(filename, content, (err) => {
    if (err) {
      console.error("Failed to write file");
    } else {
      console.log("File saved");
    }
  });
}

module.exports = { saveUserInput };
