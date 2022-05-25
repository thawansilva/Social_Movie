import styled from "styled-components";

const LoginPage = styled.div`
  position: relative;
  min-height: 100vh;
  color: #fff;
  background-image: url("https://images.pexels.com/photos/7234230/pexels-photo-7234230.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-color: #00000073;
  background-blend-mode: color;
`;
const LoginContainer = styled.div`
  transform: translate3d(-50%, -50%, 0);
  text-align: left;
  position: absolute;
  min-height: 400px;
  width: 80%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: 10px;
  left: 50%;
  top: 50%;
  h1 {
    color: #ea1e1e;
    font-size: 2.5rem;
    margin: 0.25em;
    text-align: center;
  }
  @media screen and (min-width: 620px) {
    flex-direction: row;
    h1 {
      font-size: 3rem;
      text-align: left;
    }
  }
  @media screen and (min-width: 960px) {
    h1 {
      font-size: 3.5rem;
      width: 40%;
    }
  }
  @media screen and (min-width: 1200px) {
    h1 {
      font-size: 4rem;
    }
  }
`;
const RegisterContainer = styled(LoginContainer)`
  width: auto;
  display: block;
`;
const RegisterPage = styled(LoginPage)``;

export { LoginPage, LoginContainer, RegisterContainer, RegisterPage };
