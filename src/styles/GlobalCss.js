import { createGlobalStyle } from 'styled-components';

const GlobalCss = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        display: flex;
        justify-content: center;
        width: 100vw;
        max-width: 100%;
        height: 100vh;
        background: linear-gradient(180.01deg, #550096 0.01%, #000000 128.11%);
        background-repeat: repeat;
        font-family: 'Raleway', sans-serif;
    }

    .root {
        width: 26rem;
        max-width: 100%;
        height: 100%;
    }

    input, button {
        border: none;
    }

    a {
        text-decoration: none;
    }
`;

export default GlobalCss;