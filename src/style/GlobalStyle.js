import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 ::-webkit-scrollbar {
  width: 4px;
  transition: 0.3s all;
}

::-webkit-scrollbar-track {
  background-color: #2c2c31;
}

::-webkit-scrollbar-thumb {
  background-color: #bf0293;
  border-radius: 10px;
}
 
 html {
  scroll-behavior: smooth;
 }

 * {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
 }

 body {
  background: ${({ theme }) => theme.Surface_Colors.surface_background};
 }
`