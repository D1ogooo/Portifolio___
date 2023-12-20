import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

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