import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form } from "../../styles/Form/styles";
import { userAuthContext } from "../../context/UserAuthContext";
import { StyledButton } from "../../styles/Buttons/Buttons";
import { RegisterContainer, RegisterPage } from "../Login/styles";

const Register = () => {
  const navigate = useNavigate();
  const { erro, SignUp } = useContext(userAuthContext);
  const userInfo = { name: null, email: null, password: null };
  const [input, setInput] = useState(userInfo);

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      SignUp(input);
      navigate("/");
    } catch (err) {
      setErro(err.message);
    }
  };

  return (
    <>
      <RegisterPage>
        <RegisterContainer>
          <Form onSubmit={handleSubmit}>
            <h2>Sign up</h2>
            {erro && <p>{erro}</p>}

            <label>Nome:</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleChangeInput}
              required
            />

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
            <Link to="/">Already have an account? Click here</Link>
            <StyledButton primary>Sign up</StyledButton>
          </Form>
        </RegisterContainer>
      </RegisterPage>
    </>
  );
};

export default Register;
