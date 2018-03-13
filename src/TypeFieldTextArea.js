import styled from 'styled-components';

const TypeFieldTextarea = styled.textarea`
    margin-top: 12px;
    font-family: 'Open Sans', sans-serif;
    width: 100%;
    padding-bottom: 5px;
    box-sizing: border-box;
    border: 0;
    outline: 0;
    padding: 0;
    background: transparent;
    border-bottom: 2px solid #d6c1c1;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    color: #201010;
    resize: none;
    overflow: hidden;
    font-size: 17.5px;
    :focus {
        border-bottom: 2px solid #8b9bbe;
        color: #201010;
    }
    @media (max-width: 1140px) {
        padding-bottom: 10px;
        font-size: 20px;
    }

    ::-webkit-input-placeholder {
        opacity: 1;
        color: #dcd5d5;
    }
    ::-ms-input-placeholder {
        opacity: 1;
        color: #dcd5d5;
    }
    :-ms-input-placeholder {
        opacity: 1;
        color: #dcd5d5;
    }
    ::-moz-placeholder {
        opacity: 1;
        color: #dcd5d5;
    }
    :-moz-placeholder {
        opacity: 1;
        color: #dcd5d5;
    }
    ::placeholder {
        opacity: 1;
        color: #dcd5d5;
    }
`;

export default TypeFieldTextarea;
