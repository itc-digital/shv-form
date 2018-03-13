import styled from 'styled-components';
import MaskedInput from 'react-text-mask';

const TextInputStyled = styled(MaskedInput)`
  font-family: 'Open Sans', sans-serif;
  width: 100%;
  padding-bottom: 5px;
  box-sizing: border-box;
  border: 0;
  outline: 0;
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

const TextInput = props => (
  <TextInputStyled type="text" mask={false} maxLength="256" {...props} />
);

export default TextInput;
