import { createGlobalStyle } from "styled-components";
import { Roboto_Flex } from "next/font/google";

const robotoFlex = Roboto_Flex({ subsets: ["latin"], weight: ["variable"] });

export default createGlobalStyle`
*,
  *::before,
  *::after {
    box-sizing: border-box;
    font-family: ${robotoFlex.style.fontFamily};
    font-weight: ${robotoFlex.style.fontWeight};
  }

  :root {
    --color-white: #ffffff;
    --color-black: #121212;
    --color-gray1: #f6f6f6;
    --color-gray2: #e8e8e8;
    --color-gray3: #bdbdbd;
    --color-primary: #5db075;
    --color-warning: #ff6b6b;

    --size-mediumsmall: 14px;
    --size-medium: 16px;
    --size-mediumplus: 18px;
    --size-large: 30px;

    --header-height: 60px;
  }

  body {
    margin: 0;
    background-color: var(--color-white);
  }`;
