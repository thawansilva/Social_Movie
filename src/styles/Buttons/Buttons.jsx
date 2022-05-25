import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 0.75em 1.25em;
  text-transform: uppercase;
  font-weight: 900;
  border-radius: 5px;
  background-color: ${(props) => (props.primary ? "#fff" : "#333")};
  color: ${(props) => (props.primary ? "#333" : "#fff")};
  border: none;
  margin: 0.75em 0;
  transition: 0.3s ease;
  &:hover {
    background-color: ${(props) => (props.primary ? "#333" : "#fff")};
    color: ${(props) => (props.primary ? "#fff" : "#333")};
  }
`;

export const ColorSwitcher = styled.button`
  color: #ff3c3c;
`;
