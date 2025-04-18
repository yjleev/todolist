import styled from "styled-components";

const Todo = styled.div<{ theme: { background: string; }; $selected: boolean }>`
  background-color: ${(props) => (props.$selected ? "#aaa" : props.theme.background)};
  width: 100%;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 10px 15px;
  margin-bottom: 10px;
`;

export { Todo }