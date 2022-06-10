import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 0.75em 1.25em;
  text-transform: uppercase;
  font-weight: 900;
  border-radius: 5px;
  background-color: ${(props) => (props.primary ? "#ddd" : "#333")};
  color: ${(props) => (props.primary ? "#333" : "#ddd")};
  border: none;
  margin: 0.75em 0;
  transition: 0.3s ease;
  &:hover {
    background-color: ${(props) => (props.primary ? "#333" : "#ddd")};
    color: ${(props) => (props.primary ? "#ddd" : "#333")};
  }
`;

export const ColorSwitcher = styled.button`
  background: none;
  border: none;
  font-size: 1.25em;
  margin-right: 15px;
  padding-top: 5px;
  color: ${({ theme }) => theme.syntax};
  vertical-align: middle;
`;
