import { createGlobalStyle } from 'styled-components';

export const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif; /* Pode mudar para a fonte que preferir */
  }

  body {
    background-color: #f5f5f5;
    color: #333333;
    -webkit-font-smoothing: antialiased;
  }
`;