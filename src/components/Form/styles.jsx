import styled from "styled-components";

export const Form = styled.form`
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(8.5px);
  width: 300px;
  padding: 15px;
  border-radius: 5px;
  h2 {
    font-size: 1.75rem;
    margin: 0.5em 0;
    color: #ea1e1e;
  }
  label,
  input {
    display: block;
    text-align: left;
    width: 100%;
  }
  input {
    height: 30px;
    padding: 5px;
    border-radius: 3px;
    margin-bottom: 15px;
    border: none;
    &:focus {
      outline: none;
    }
  }
  a {
    display: block;
    color: #fff;
    font-size: 1rem;
    &:hover {
      text-decoration: underline;
    }
  }
  @media screen and (min-width: 620px) {
    min-width: 350px;
    grid-column: 6/12;
    h2 {
      vertical-align: middle;
    }
  }
  @media screen and (min-width: 960px) {
  }
  @media screen and (min-width: 1200px) {
  }
`;
