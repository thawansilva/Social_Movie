import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 10px;
  width: 100%;
`;
export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
