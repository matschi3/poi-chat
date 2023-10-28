import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    --color-white: #eaeaea;
    --color-black: #121212;
  }

  body {
    margin: 0;
    background-color: var(--color-white);
  }`;
