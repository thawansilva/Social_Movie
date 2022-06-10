import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeColor";
import { userAuthContext } from "../../context/UserAuthContext";
import { ColorSwitcher, StyledButton } from "../../styles/Buttons/Buttons";
import { Flex } from "../../styles/Layout";
import { Container } from "../Container";
import { StyledNavbar } from "./StyledNavbar";

const Navbar = () => {
  const { LogOut } = useContext(userAuthContext);
  const { useTheme, toggleTheme } = useContext(ThemeContext);
  const { colorTheme, isLightTheme } = useTheme();
  const handleLogOut = async () => {
    try {
      await LogOut();
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <StyledNavbar theme={colorTheme}>
      <Container>
        <Flex>
          <Link to="/home">
            <h3 style={{ color: "#ddd" }}>Social Movie</h3>
          </Link>
          <div>
            <ColorSwitcher theme={colorTheme} onClick={toggleTheme}>
              {isLightTheme ? (
                <i className="fa-solid fa-moon"></i>
              ) : (
                <i className="fa-solid fa-sun"></i>
              )}
            </ColorSwitcher>
            <StyledButton theme={colorTheme} onClick={handleLogOut}>
              Log out
            </StyledButton>
          </div>
        </Flex>
      </Container>
    </StyledNavbar>
  );
};

export default Navbar;
