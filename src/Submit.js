import styled from 'styled-components';

const Submit = styled.button`
    display: block;
    margin: 0 auto;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 100ms ease-in-out;
    background: transparent;

    :hover {
        transform: scale(1.02);
    }

    :active {
        transform: scale(0.98);
    }
`;

export default Submit;
