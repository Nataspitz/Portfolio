import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary: ${(props) => props.theme.colors.primary};
    --color-primary-50: ${(props) => props.theme.colors.primary50};
    --color-secondary: ${(props) => props.theme.colors.secondary};
    --color-secondary-50: ${(props) => props.theme.colors.secondary50};
    --color-tertiary: ${(props) => props.theme.colors.tertiary};
    --color-tertiary-50: ${(props) => props.theme.colors.tertiary50};
    --color-quaternary: ${(props) => props.theme.colors.quaternary};
    --color-quaternary-50: ${(props) => props.theme.colors.quaternary50};
    --facebook-color: ${(props) => props.theme.colors.facebook};
    --instagram-color: ${(props) => props.theme.colors.instagram};
    --linkdIn-color: ${(props) => props.theme.colors.linkedIn};

    --grey-5: ${(props) => props.theme.colors.grey5};
    --grey-4: ${(props) => props.theme.colors.grey4};
    --grey-3: ${(props) => props.theme.colors.grey3};
    --grey-2: ${(props) => props.theme.colors.grey2};
    --grey-1: ${(props) => props.theme.colors.grey1};

    --title1-font-size: ${(props) => props.theme.fontSizes.title1};
    --title2-font-size: ${(props) => props.theme.fontSizes.title2};
    --title3-font-size: ${(props) => props.theme.fontSizes.title3};
    --title4-font-size: ${(props) => props.theme.fontSizes.title4};
    --headline-font-size: ${(props) => props.theme.fontSizes.headline};
    --body-font-size: ${(props) => props.theme.fontSizes.body};
    --caption-font-size: ${(props) => props.theme.fontSizes.caption};
    --detail-font-size: ${(props) => props.theme.fontSizes.detail};

    --font-family: ${(props) => props.theme.fontFamily};
    --font-weight-bold: ${(props) => props.theme.fontWeight.bold};
    --font-weight-regular: ${(props) => props.theme.fontWeight.regular};

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body, input, button, select, a {
      font-family: ${(props) => props.theme.fontFamily};
      background-color: var(--grey-4);
    }

    h1{
      font-size: var(--title1-font-size);
      color: var(--grey-1);
      font-weight: 700;;
    }

    h2{
      font-size: var(--title2-font-size);
      color: var(--grey-1);
      font-weight: var(--font-weight-bold);
    }

    p{
      font-size: var(--body-font-size);
      color: var(--grey-2);
      font-weight: var(--font-weight-regular);
    }

    li, ol {
      list-style: none;
    }

    button {
      cursor: pointer;
      font-size: var(--body-font-size);
      border: none;
    }

    input {
      border-radius: 4px;
      padding-left: 10px;
    }

    label {
      margin-bottom: 5px;
    }

  }
`