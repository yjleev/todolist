import styled from "styled-components";

const Todo = styled.div<{ theme: { background: string; } }>`
  background-color: ${(props) => props.theme.background};
  width: 100%;
  height: 40px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 10px 15px;
  margin-bottom: 10px;
`;

export { Todo }