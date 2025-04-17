import styled from "styled-components";

const Title = styled.h1<{ theme: { color: string } }>`
  text-align: center;
  padding: 0 0 10px;
  border-bottom: 1px solid ${(props) => props.theme.color};
`;

export default Title