import { createGlobalStyle } from 'styled-components';

import SourceSansProItalic from './font/SourceSansPro-Italic.ttf';
import SourceSansProBoldItalic from './font/SourceSansPro-BoldItalic.ttf';
import SourceSansProLight from './font/SourceSansPro-Light.ttf';
import SourceSansProRegular from './font/SourceSansPro-Regular.ttf';
import SourceSansProBold from './font/SourceSansPro-Bold.ttf';

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Source Sans Pro Light';
  src: local('Source Sans Pro Light'), local('Source-Sans-Pro-Light'), url(${SourceSansProLight});
  font-weight: lighter;
}
  
@font-face {
  font-family: 'Source Sans Pro Regular';
  src: local('Source Sans Pro Regular'), local('Source-Sans-Pro-Regular'), url(${SourceSansProRegular});
  font-weight: normal;
  font-style: normal;
}

@font-face {
    font-family: 'Source Sans Pro Bold';
    src: local('Source Sans Pro Bold'), local('Source-Sans-Pro-Bold'), url(${SourceSansProBold});
    font-weight: bold;
    font-style: normal;
}

@font-face {
  font-family: 'Source Sans Pro Italic';
  src: local('Source Sans Pro Italic'), local('Source-Sans-Pro-Italic'), url(${SourceSansProItalic});
  font-weight: normal;
}

@font-face {
  font-family: 'Source Sans Pro Bold Italic';
  src: local('Source Sans Pro Bold Italic'), local('Source-Sans-Pro-Bold Italic'), url(${SourceSansProBoldItalic});
  font-weight: normal;
}

:root {
  --blue: #2271D1;
  --dark-gray: #262626;
  --black: #000000E5;
  --white: #FFFFFF;
  --red: #FF0000;

  --font-italic: 'Source Sans Pro Italic';
  --font-italic-bold: 'Source Sans Pro Italic Bold';
  --font-light: 'Source Sans Pro Light';
  --font-regular: 'Source Sans Pro Regular';
  --font-bold: 'Source Sans Pro Bold';

  font-family: var(--font-regular), Arial, Helvetica, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0;
}

main {
  display: block;
}

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}

pre {
  font-family: monospace, monospace;
  font-size: 1em;
}

a {
  background-color: transparent;
  text-decoration: none;
}

abbr[title] {
  border-bottom: none;
  text-decoration: underline;
  text-decoration: underline dotted;
}

b,
strong {
  font-weight: bolder;
}

code,
kbd,
samp {
  font-family: monospace, monospace;
  font-size: 1em;
}

small {
  font-size: 80%;
}

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

img {
  border-style: none;
}

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}

button,
input {
  overflow: visible;
}

button,
select {
  text-transform: none;
}

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

legend {
  box-sizing: border-box;
  color: inherit;
  display: table;
  max-width: 100%;
  padding: 0;
  white-space: normal;
}

progress {
  vertical-align: baseline;
}

textarea {
  overflow: auto;
}

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

[type="search"] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}

details {
  display: block;
}

summary {
  display: list-item;
}

template {
  display: none;
}

[hidden] {
  display: none;
}
`;

export default GlobalStyle;
