const fs = require("fs");

const fileToBase64 = filename => fs.readFileSync(filename).toString("base64");

export default fileToBase64;
export { fileToBase64 };
