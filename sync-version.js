import fs from "node:fs/promises";

// Keeps the README badge in step with package.json so `npm version` updates both in one commit
const { version } = JSON.parse(
  await fs.readFile("./package.json", "utf8")
);

const readme = await fs.readFile("./README.md", "utf8");

const updated = readme.replace(
  /(\[!\[)[^\]]+(\]\(https:\/\/badgen\.net\/badge\/npm\/)[^/]+(\/blue\))/,
  `$1${ version }$2${ version }$3`
);

await fs.writeFile("./README.md", updated);

console.log(`Synced README badge to ${ version }`);
