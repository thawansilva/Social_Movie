import { Link } from "react-router-dom";
import { StyledButton } from "../../styles/Buttons/Buttons";
import { Form } from "./styles";
import { useContext, useState } from "react";
import UserAuthContext from "../../context/UserAuthContext";

const FormBox = ({ register }) => {
  const { handleSignUp, handleSignIn } = useContext(UserAuthContext);
  const [input, setInput] = useState({
    name: null,
    email: null,
    password: null,
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    {
      e.target.lastChild.innerHTML == "Sign up"
        ? handleSignUp(input)
        : handleSignIn(input);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>{register ? "Sign up" : "Sign in"}</h2>
      {register && <label>Nome:</label>}
      {register && (
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          required
        />
      )}

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        autoComplete="email"
        onChange={handleChange}
        required
      />
      <label htmlFor="password">Password:</label>
      <input
        autoComplete="current-password"
        type="password"
        id="password"
        name="password"
        onChange={handleChange}
        required
      />

      {!register ? (
        <Link to="/register">Don't you have an account? Click here</Link>
      ) : (
        <Link to="/">Already have an account? Click here</Link>
      )}
      <StyledButton primary>{!register ? "Sign in" : "Sign up"}</StyledButton>
    </Form>
  );
};

export default FormBox;
