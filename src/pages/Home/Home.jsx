import { useContext } from "react";
import { userAuthContext } from "../../context/UserAuthContext";
import { StyledButton } from "../../styles/Buttons/Buttons";

const Homepage = () => {
  const { user, logOut } = useContext(userAuthContext);
  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <>
      <div>Hello {user.displayName}, how are you?</div>
      <StyledButton onClick={handleLogOut}>Log out</StyledButton>
    </>
  );
};

export default Homepage;
