import styled from 'styled-components';
import MaskedInput from 'react-text-mask';

const TextInputStyled = styled(MaskedInput)`
    font-family: ${({ theme }) => theme.text.font.family};
    width: 100%;
    padding-bottom: 5px;
    box-sizing: border-box;
    border: 0;
    outline: 0;
    background: transparent;
    border-bottom: 2px solid #ccc1a7;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    font-family: ${({ theme }) => theme.text.color};
    resize: none;
    overflow: hidden;
    font-size: 17.5px;

    :focus {
        border-bottom: 2px solid #cf4638;
        color: #201010;
    }

    ::-webkit-input-placeholder {
        opacity: 1;
        font-family: ${({ theme }) => theme.input.placeholderColor};
    }
    ::-ms-input-placeholder {
        opacity: 1;
        font-family: ${({ theme }) => theme.input.placeholderColor};
    }
    :-ms-input-placeholder {
        opacity: 1;
        font-family: ${({ theme }) => theme.input.placeholderColor};
    }
    ::-moz-placeholder {
        opacity: 1;
        font-family: ${({ theme }) => theme.input.placeholderColor};
    }
    :-moz-placeholder {
        opacity: 1;
        font-family: ${({ theme }) => theme.input.placeholderColor};
    }
    ::placeholder {
        opacity: 1;
        font-family: ${({ theme }) => theme.input.placeholderColor};
    }
`;

const TextInput = props => (
    <TextInputStyled type="text" mask={false} maxLength="256" {...props} />
);

export default TextInput;
