import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
 }

 body {
  background: ${({ theme }) => theme.Surface_Colors.surface_background};
 }
`