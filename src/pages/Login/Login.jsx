import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form } from "../../components/Form/styles";
import { userAuthContext } from "../../context/UserAuthContext";
import { StyledButton } from "../../styles/Buttons/Buttons";
import { LoginContainer, LoginPage } from "./styles";

const Login = () => {
  const navigate = useNavigate();
  const { erro, SignIn } = useContext(userAuthContext);
  const userInfo = { name: null, email: null, password: null };
  const [input, setInput] = useState(userInfo);

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      SignIn(input);
      navigate("/home");
    } catch (err) {
      setErro(err.message);
    }
  };

  return (
    <>
      <LoginPage>
        <LoginContainer>
          <h1>Welcome to Social Movie</h1>
          <Form onSubmit={handleSubmit}>
            <h2>Sign in</h2>
            {erro && <p>{erro}</p>}

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              onChange={handleChangeInput}
              required
            />
            <label htmlFor="password">Password:</label>
            <input
              autoComplete="current-password"
              type="password"
              id="password"
              name="password"
              onChange={handleChangeInput}
              required
            />
            <Link to="/register">Don't you have an account? Click here</Link>
            <StyledButton primary>Sign In</StyledButton>
          </Form>
        </LoginContainer>
      </LoginPage>
    </>
  );
};

export default Login;
