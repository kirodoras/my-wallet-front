import { createGlobalStyle } from 'styled-components';

const GlobalCss = createGlobalStyle`
    body {
        display: flex;
        justify-content: center;
        width: 100vw;
        height: 100vh;
        background: linear-gradient(180.01deg, #550096 0.01%, #000000 128.11%);
    }

    .root {
        width: 26rem;
        max-width: 26rem;
        height: 100%;
        border: 1px solid black;
    }
`;

export default GlobalCss;