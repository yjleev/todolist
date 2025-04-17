import styled from "styled-components";

const Menu = styled.div<{ position: { x: number, y:number} }>`
    position: fixed;
    top: ${(props) => props.position.y}px;
    left: ${(props) => props.position.x}px;
    display: flex;
    flex-direction: column;
    padding: 5px 10px;
    border-radius: 5px;
    background-color: #ccc;
    color: #333;
`;

export { Menu }