const ts = require("typescript");
const fs = require("fs");

const code = fs.readFileSync("./sample.ts").toString();
const node = ts.createSourceFile("sample2.ts", code, ts.ScriptTarget.LineFeed);
const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });
console.log(node.statements);

for (let index = 0; index < node.statements.length; index++) {
  const element = node.statements[index];
  if (element.kind === 257) {
    console.log("Found interface declaration...");
    const result = printer.printNode(ts.EmitHint.Unspecified, element, node);
    console.log(result);
    console.log("");
  }
}
