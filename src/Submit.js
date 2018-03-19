import styled from 'styled-components';

const Submit = styled.button`
    display: block;
    margin: 0 auto;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 50ms ease-in;
    background: transparent;
    ${({ disabled }) => disabled && 'transform: rotate(-10deg) scale(0.98)'};

    :hover {
        transform: scale(1.05);
    }

    :active {
        transform: rotate(-10deg) scale(0.98);
    }
`;

export default Submit;
