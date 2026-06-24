import fs from "node:fs/promises";

/**
 * Renders a name-to-strings map as a valid ambient TypeScript type literal of readonly tuples
 *
 * @param map - Object whose values are arrays of strings
 */
const typeLiteral = map => {
  const lines = Object
    .entries(map)
    .map(([ name, values ]) => {
      const tuple = values.length
        ? `readonly [ ${ values.map(value => JSON.stringify(value)).join(", ") } ]`
        : "readonly []";

      return `  readonly ${ JSON.stringify(name) }: ${ tuple };`;
    });

  return `{\n${ lines.join("\n") }\n}`;
};

const selection = JSON.parse(
  await fs.readFile("./selection.json", "utf8")
);

const icons = Object.fromEntries(
  selection.icons
    .map(icon => [
      icon.properties.name,
      icon.properties.ligatures.split(",").map(ligature => ligature.trim()).filter(Boolean)
    ])
    .sort((a, b) => a[ 0 ].localeCompare(b[ 0 ]))
);

// Domains are curated by hand, so reuse the previous run's values and seed only brand-new icons with an empty list
const existingHostnames = await fs
  .readFile("./hostnames.js", "utf8")
  .then(text => JSON.parse(text.slice(text.indexOf("{"), text.lastIndexOf("}") + 1)))
  .catch(() => ({}));

const hostnames = Object.fromEntries(
  Object.keys(icons).map(name => [ name, existingHostnames[ name ] ?? [] ])
);

await fs.writeFile("./icons.js", `/**
 * Icons are listed with their display name as the key, and a list of applicable ligatures as the value
 *
 * @example
 * icons.Twitter // [ "twitter", "x-twitter", "twitter-x" ]
 */
export const icons = ${ JSON.stringify(icons, null, 2) };
`);

await fs.writeFile("./icons.d.ts", `/**
 * Icons are listed with their display name as the key, and a list of applicable ligatures as the value
 *
 * @example
 * icons.Twitter // [ "twitter", "x-twitter", "twitter-x" ]
 */
export declare const icons: ${ typeLiteral(icons) };
`);

await fs.writeFile("./hostnames.js", `/**
 * Hostnames are listed with their display icon name as the key, and a list of associated domains as the value
 *
 * @example
 * hostnames.Twitter // [ "twitter.com" ]
 */
export const hostnames = ${ JSON.stringify(hostnames, null, 2) };
`);

await fs.writeFile("./hostnames.d.ts", `/**
 * Hostnames are listed with their display icon name as the key, and a list of associated domains as the value
 *
 * @example
 * hostnames.Twitter // [ "twitter.com" ]
 */
export declare const hostnames: ${ typeLiteral(hostnames) };
`);

const seeded = Object.keys(icons).filter(name => !(name in existingHostnames));

console.log(`Generated ${ Object.keys(icons).length } icons. ${ seeded.length ? `Add domains for: ${ seeded.join(", ") }` : "All hostnames preserved." }`);
