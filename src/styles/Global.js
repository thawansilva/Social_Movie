import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0%;
  padding: 0%;
  text-decoration: none;
  list-style: none;
  box-sizing: border-box;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  line-height: 1.2;
}
body {
  font-family: "Lato", sans-serif;
  line-height: 1.6;
  height: 100vh;
  width: 100vw;
  letter-spacing: 0.25px;
  background: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.syntax};
}
@media screen and (min-width: 620px) {
}
@media screen and (min-width: 960px) {
  body {
    font-size: 18px;
  }
}
@media screen and (min-width: 1200px) {
  body {
    font-size: 20px;
  }
}

`;
