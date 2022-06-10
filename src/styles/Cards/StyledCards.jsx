import styled from "styled-components";

export const StyledCard = styled.div`
  border-radius: 5px;
  padding: 10px;
  margin: 15px 0;
  min-height: 350px;
  max-width: 250px;
  background: ${({ theme }) => theme.syntax};
  color: ${({ theme }) => theme.bg};
  grid-column: span 6;
  transition: all 0.3s;
  p {
    margin-top: 5px;
  }
  img {
    max-width: 100%;
    height: auto;
  }
  &:hover {
    box-shadow: 0px 0px 15px ${({ theme }) => theme.syntax};
  }
  @media screen and (min-width: 620px) {
    grid-column: span 4;
  }
  @media screen and (min-width: 960px) {
    grid-column: span 3;
  }
  @media screen and (min-width: 1200px) {
  }
`;
