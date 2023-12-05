import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`

:root{
    --color-primary: #FF2253;
    --color-primary-50: #FFE9EE;

    --color-secondary: #4ACA94;
    --color-secondary-50: #E4F7EF;

    --color-tertiary: #FF2253;
    --color-tertiary-50: #FFE9EE;

    --color-quaternary: #4ACA94;
    --color-quaternary-50: #E4F7EF;

    --facebook-color: #FF2253;
    --instagram-color: #FFE9EE;
    --linkdIn-color: #4ACA94;

    --grey-4: #212529;
    --grey-3: #868E96;
    --grey-2: #E9ECEF;
    --grey-1: #F8F9FA;

    --title1-font-size: 1.75rem;
    --title2-font-size: 1.5rem;
    --title3-font-size: 1.25rem;
    --title4-font-size: 1rem;
    --headline-font-size: 1rem;
    --body-font-size: 0.875rem;
    --caption-font-size: 0.75rem;
    --detail-font-size: 0.625rem;

    --font-family: 'Inter', sans-serif;
    --font-weight-bold: 700;
    --font-weight-regular: 400;

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body, input, button, select, a {
        font-family: 'Inter', sans-serif;
    }
    
    h1{
        color: white;
        font-size: var(--size-title1);
    }
    
    li, ol{
        list-style: none;
    }
    
    button{
        cursor: pointer;
        font-size: var(--size-button);
        border: none;
    }
    
    input{
        border-radius: 4px;
        padding-left: 10px;
    }
    
    h2{
        color: var(--grey-0);
        font-size: var(--size-title2);
    }
    
    h3{
        color: var(--grey-0);
        font-size: var(--size-title3);
    }
    
    
    
    p, span{
        font-size: var(--size-text);
        color: var(--grey-1);
    }
    
    label{
        margin-bottom: 5px;
    }
    
    body{
        background-color: var(--grey-4);
    }
    
    .subHeader{
        border: 1px solid var(--grey-3);
    }
}

`