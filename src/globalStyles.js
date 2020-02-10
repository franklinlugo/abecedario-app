import { createGlobalStyle } from 'styled-components';

/* eslint no-unused-expressions: 0 */
export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 100%;
    line-height: 1.15;
  }
  *,
  :after,
  :before {
    box-sizing: inherit;
  }
  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background: #fff;
    color: #000;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    line-height: 1.5;
    margin: 0;
    padding: 0;
  }
  img {
    display: inline-block;
    height: auto;
    max-width: 100%;
    vertical-align: middle;
    border-style: none;
  }
  textarea {
    border-radius: 0;
    height: auto;
    min-height: 50px;
    overflow: auto;
  }
  select {
    border-radius: 0;
    box-sizing: border-box;
    width: 100%;
  }
  .map_canvas embed,
  .map_canvas img,
  .map_canvas object,
  .mqa-display embed,
  .mqa-display img,
  .mqa-display object {
    max-width: none !important;
  }
  button {
    appearance: none;
    background: transparent;
    border: 0;
    border-radius: 0;
    cursor: auto;
    line-height: 1;
    outline: 0;
    padding: 0;
  }
  button:focus, button:active{
    outline: none !important;
  }
  ol,
  ul {
    list-style: none;
    margin-left: 0;
    padding: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
    background-color: transparent;
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
    font-family: 'Open Sans', sans-serif;
    font-size: 1em;
    overflow: auto;

  }
  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
  }
  b,
  strong {
    font-weight: bolder;
  }
  code,
  kbd,
  samp {
    font-family: monospace;
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

  button,
  input,
  optgroup,
  select,
  textarea {
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
    font-family: inherit;

  }
  button,
  input {
    overflow: visible;
  }
  button,
  select {
    text-transform: none;
  }
  [type='button'],
  [type='reset'],
  [type='submit'],
  button {
    appearance: button;
  }
  [type='button']::-moz-focus-inner,
  [type='reset']::-moz-focus-inner,
  [type='submit']::-moz-focus-inner,
  button::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  [type='button']:-moz-focusring,
  [type='reset']:-moz-focusring,
  [type='submit']:-moz-focusring,
  button:-moz-focusring {
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
  [type='checkbox'],
  [type='radio'] {
    box-sizing: border-box;
    padding: 0;
  }
  [type='number']::-webkit-inner-spin-button,
  [type='number']::-webkit-outer-spin-button {
    height: auto;
  }
  [type='search'] {
    appearance: textfield;
    outline-offset: -2px;
  }
  [type='search']::-webkit-search-decoration {
    appearance: none;
  }
  ::-webkit-file-upload-button {
    appearance: button;
    font: inherit;
  }
  details {
    display: block;
  }
  summary {
    display: list-item;
  }
  [hidden],
  template {
    display: none;
  }
`;
