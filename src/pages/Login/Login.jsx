import FormBox from "../../components/Form";
import { LoginContainer, LoginPage } from "./styles";

const Login = () => {
  return (
    <>
      <LoginPage>
        <LoginContainer>
          <h1>Welcome to Social Movie</h1>
          <FormBox />
        </LoginContainer>
      </LoginPage>
    </>
  );
};

export default Login;
