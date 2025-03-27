import fs from "fs";

fs.readFile("./selection.json", "utf8", (err, data) => {
  if (err) {
    console.error(err);

    return;
  }

  const selection = JSON.parse(
    data
  );

  const icons = Object
    .fromEntries(
      selection.icons
        .map(
          icon => [
            icon.properties.name,
            icon.properties.ligatures.split(",").map(s => s.trim()).filter(Boolean)
          ]
        )
        .sort(
          (a, b) =>
            a[ 0 ] - b[ 0 ]
        )
    );

  fs.writeFile("./icons.js", `/**
 * Icons are listed with their display name as the key, and a list of applicable ligatures as the value.
 *
 * @example
 * icons.Twitter // [ "twitter", "x-twitter", "twitter-x" ]
 */
export const icons = ${ JSON.stringify(icons, null, 2) };`, err => {
    if (err) {
      console.error(err);
    }
  });

  fs.writeFile("./icons.d.ts", `/**
 * Icons are listed with their display name as the key, and a list of applicable ligatures as the value.
 *
 * @example
 * icons.Twitter // [ "twitter", "x-twitter", "twitter-x" ]
 */
export declare const icons = ${ JSON.stringify(icons, null, 2) };`, err => {
    if (err) {
      console.error(err);
    }
  });
});