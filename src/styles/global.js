import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Poppins', Sans-Serif;

        background: url(styles/assets/about-bg.png);
    }

`;

export default Global;