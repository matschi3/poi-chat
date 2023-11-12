import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    --color-white: #ffffff;
    --color-black: #121212;
    --color-gray1: #f6f6f6;
    --color-gray2: #e8e8e8;
    --color-gray3: #bdbdbd
    --color-primary: #5db075;

    --size-mediumsmall: 14px;
    --size-medium: 16px;
    --size-large: 30px;
  }

  body {
    margin: 0;
    background-color: var(--color-white);
  }`;
