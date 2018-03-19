import styled from 'styled-components';

const Label = styled.label`
    display: block;
    font-size: 17.5px;
    color: #201010;
    margin-top: 60px;
    font-family: ${({ theme }) => theme.text.font.family};

    @media (max-width: 1140px) {
        font-size: 20px;
    }

    ${props =>
        props.required
            ? `::after {
            content: ' *';
            color: #cf4638;
        }`
            : ''};

    :first-child {
        margin-top: 0;
    }
`;

export default Label;
