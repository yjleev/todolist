import styled from 'styled-components'

const SortBox = styled.div`
    position: relative;
    height: 40px;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;

const SortButton = styled.div<{ $active: boolean }>`
    width: 70px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.$active ? '#aaa' : 'inherit'};
    cursor: ${(props) => props.$active ? 'auto' : 'pointer'};
    transition: 0.2s;

    &:hover {
        background-color: ${(props) => props.$active ? '' : '#ccc'};
    }
`;

export { SortBox, SortButton }