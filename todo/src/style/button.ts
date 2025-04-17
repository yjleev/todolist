import styled from 'styled-components'

const Button = styled.span`
    position: absolute;
    right: 0;
    width: 70px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;

export { Button }