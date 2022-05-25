import FormBox from "../../components/Form";
import { RegisterContainer, RegisterPage } from "../Login/styles";

const Register = () => {
  return (
    <>
      <RegisterPage>
        <RegisterContainer>
          <FormBox register />
        </RegisterContainer>
      </RegisterPage>
    </>
  );
};

export default Register;
