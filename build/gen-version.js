const fs = require("fs");
const path = require("path");

const tagVer = process.env.TAG_VERSION;
const version = tagVer
  ? tagVer.startsWith("v")
    ? tagVer.slice(1)
    : tagVer
  : require("../package.json").version;

fs.writeFileSync(
  path.resolve(__dirname, "../packages/whalue-design/version.ts"),
  `export const version = "${version}";\n`
);
