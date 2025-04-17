import styled from "styled-components";

const Container = styled.div<{ theme: { background: string; color: string } }>`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  width: 500px;
  height: 500px;
  padding: 20px;
  margin: 50px auto;
  border-radius: 15px;
  box-shadow: 0 0 20px #ddd;
  display: flex;
  flex-direction: column;
`;

export default Container;
