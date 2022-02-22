
// Componente responsável por definir o estilo global da aplicação.

import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

    body{
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&family=Ubuntu:wght@300;400;500&display=swap');
        font-family: 'Roboto', sans-serif;
        background-color: ${props => props.theme.colors.background};
        font-size: 14px;
        color: ${props => props.theme.colors.text};
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
`;