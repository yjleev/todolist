import styled from "styled-components";

const InputBox = styled.div`
    height: 50px;
    display: flex;
    align-items: center;
    margin: 10px auto;
`;

const Task = styled.input`
    padding: 0 5px;
    margin-right: 10px;
`;

const Level = styled.input`
    width: 40px;
    text-align: center;
`;

export { InputBox, Task, Level }