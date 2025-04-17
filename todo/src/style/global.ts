import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    input {
      height: 25px;
      font-size: 15px;
      border-radius: 5px;
      border: 2px solid #ccc;
    }

    input:focus {
      border: 2px solid #888;
      outline: none;
    }
`;