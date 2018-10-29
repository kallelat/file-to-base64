const fs = require("fs");

const uploadFileAsBase64 = filename =>
  fs.readFileSync(filename).toString("base64");

export default uploadFileAsBase64;
