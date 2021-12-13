const typescriptParser = require("typescript-parser");
const parser = new typescriptParser.TypescriptParser();
parser.parseFile("./sample.ts", "").then((parsed) => {
  console.log(parsed);
  console.log(JSON.stringify(parsed));
});
