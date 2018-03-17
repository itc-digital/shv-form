import styled from 'styled-components';

const TypeFieldSelect = styled.select`
    width: 100%;
    margin: 6px 3px 0 0;
    padding-bottom: 5px;
    box-sizing: border-box;
    vertical-align: top;
    border: 0;
    border-bottom: 2px solid #ccc1a7;
    outline: none;
    resize: none;
    overflow: hidden;
    font-family: 'PT Mono', mono;
    font-size: 17.5px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    color: #201010;
    background: transparent;

    option {
        font-family: 'PT Mono', mono;
    }
`;

export default TypeFieldSelect;
