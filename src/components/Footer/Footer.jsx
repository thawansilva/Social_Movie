import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeColor";
import { Flex } from "../../styles/Layout";
import { Container } from "../Container";
import { StyledFooter } from "./StyledFooter";

const Footer = () => {
  const { useTheme } = useContext(ThemeContext);
  const { colorTheme } = useTheme();

  return (
    <>
      <StyledFooter theme={colorTheme}>
        <Container>
          <Flex>
            <Link to="/home">
              <h3 style={{ color: "#ddd" }}>Social Movie</h3>
            </Link>
            <div>
              <p style={{ color: "#ddd" }}>Created by: Thawan Silva</p>
              <p style={{ color: "#ddd" }}>Thanks for TMDB Database</p>
            </div>
          </Flex>
        </Container>
      </StyledFooter>
    </>
  );
};

export default Footer;
