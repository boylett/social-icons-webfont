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

const project = JSON.parse(
  await fs.readFile("./social-icons.icomoon.json", "utf8")
);

const icons = Object.fromEntries(
  project.glyphs
    .map(glyph => [
      glyph.extras.name,
      ( glyph.extras.ligatures ?? [] ).map(ligature => ligature.trim()).filter(Boolean)
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

// The React component identifiers are sanitised by IcoMoon (digit prefix, dropped hyphens), so read them from the export list rather than deriving them
const reactExports = await fs
  .readFile("./React/icons.jsx", "utf8")
  .then(text => text.match(/export\s*\{([^}]+)\}/)?.[ 1 ].split(",").map(name => name.trim()).filter(Boolean) ?? [])
  .catch(() => []);

if (reactExports.length) {
  const declarations = reactExports.map(name => `export declare const ${ name }: (props: IconProps) => React.JSX.Element;`).join("\n");

  await fs.writeFile("./React/icons.d.ts", `/**
 * React components for every icon, keyed by their sanitised component name
 *
 * @example
 * import { Twitter } from "social-icons-webfont/react"
 */
import * as React from "react";

/**
 * Standard SVG attributes plus the optional left/top offsets each icon component accepts
 */
export type IconProps = React.SVGProps<SVGSVGElement> & { left?: number | string; top?: number | string };

${ declarations }
`);
}

const seeded = Object.keys(icons).filter(name => !(name in existingHostnames));

const ligatureless = Object.entries(icons).filter(([ , ligatures ]) => !ligatures.length).map(([ name ]) => name);

console.log(`Generated ${ Object.keys(icons).length } icons. ${ seeded.length ? `Add domains for: ${ seeded.join(", ") }` : "All hostnames preserved." }`);

if (ligatureless.length) {
  console.log(`No ligatures set in IcoMoon for: ${ ligatureless.join(", ") }`);
}
