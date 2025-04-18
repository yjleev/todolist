import styled from "styled-components";

const EditBox = styled.div`
    position: absolute;
    right: 20px;
    width: 110px;
    hegiht: 100%;
    display: flex;
    justify-content: space-between;
    transition: 0.1s;
`;

const AllButton = styled.span`
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;

const CancelButton = styled.span`
    cursor: pointer;
    color: red;

    &:hover {
        text-decoration: underline;
    }
`;

export { EditBox, AllButton, CancelButton}