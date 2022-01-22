import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: 0;

        transition: all 150ms linear;
    }

    :root {
        --mobile: 480px;
        --tablet: 768px;

        --primary-color: #fff36e;
    }

    html, body{
        font-family: 'Inter', sans-serif;
        font-family: 'Questrial', sans-serif;
    }

    a{
        text-decoration: inherit;
    }

    ul, li {
        list-style: none;
    }

    button {
        border: 0;
        outline: 0;

        cursor: pointer;
    }

    #root {
        width: 100%;
        min-height: 100vh;
    }

    @media(max-width: 768px){
        html, body{
            font-size: 93.75%;
        }
    }

    @media(max-width: 480px){
        html, body{
            font-size: 86.25%;
        }
    }
`;