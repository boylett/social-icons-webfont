[![1.49.1](https://badgen.net/badge/npm/1.49.1/blue)](https://www.npmjs.com/package/social-icons-webfont)

# Social Icons Webfont
Icon font containing social media branding icons.

You can view all icons and their ligatures [here](https://boylett.github.io/social-icons-webfont/demo.html).

Generated with [IcoMoon](https://icomoon.io/).

## Usage

#### NPM

1. `npm i social-icons-webfont`
2. `import socialFont from 'social-icons-webfont/style.css'`
3. Embed `socialFont` using the framework of your choice
    - eg. Remix: `export const links: LinksFunction = () => [{ href: socialFont, rel: 'stylesheet' }];`
4. Select an icon from [the demo](https://boylett.github.io/social-icons-webfont/demo.html)
5. Render the icon using either mode below

#### Non-NPM

1. Add `<link href="https://unpkg.com/social-icons-webfont@latest/style.css" rel="stylesheet" />` to your `head`
2. Select an icon from [the demo](https://boylett.github.io/social-icons-webfont/demo.html)
3. Render the icon using either mode below

## Rendering an icon

There are two equivalent ways to show a glyph.

Ligature - type the icon's ligature as the element text:

```html
<i class="social-icons">twitter</i>
```

Modifier class - add the `soc-{Name}` class and leave the element empty:

```html
<i class="social-icons soc-Twitter"></i>
```

## Data exports

The package ships name-to-ligature and name-to-domain maps for resolving an icon programmatically, for example matching a URL to a brand:

```js
import { icons } from 'social-icons-webfont/icons.js';
import { hostnames } from 'social-icons-webfont/hostnames.js';

icons.Twitter;     // [ "twitter", "x-twitter", "twitter-x" ]
hostnames.Twitter; // [ "twitter.com" ]
```

Both maps are also published as TypeScript declarations (`icons.d.ts`, `hostnames.d.ts`).
