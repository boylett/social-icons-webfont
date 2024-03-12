[![1.26](https://badgen.net/badge/npm/1.26/blue)](https://www.npmjs.com/package/social-icons-webfont)

# Social Icons
Icon font containing social media branding icons.

Generated with [IcoMoon](https://icomoon.io/).

## Usage

#### NPM

1. `npm i social-icons-webfont`
2. `import socialFont from 'social-icons-webfont/style.css'`
3. Embed `socialFont` using the framework of your choice
    - eg. Remix: `export const links: LinksFunction = () => [{ href: socialFont, rel: 'stylesheet' }];`
4. Select an icon from [the demo](https://boylett.github.io/Social-Icons/demo.html)
5. Include an `<i class="social-icons">{icon name}</i>` in your project

#### Non-NPM

1. Download the [latest release](https://github.com/boylett/Social-Icons/releases)
2. Add `<link href="./social-icons/style.css" rel="stylesheet" />` to your `head`
3. Select an icon from [the demo](https://boylett.github.io/Social-Icons/demo.html)
4. Include an `<i class="social-icons">{icon name}</i>` in your project
