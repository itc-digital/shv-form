import styled from 'styled-components';
import stampBorder from './img/stamp_border.png';

const Submit = styled.button`
  display: block;
  width: 200px;
  margin: 30px auto 10px auto;
  padding: 15px;
  box-sizing: border-box;
  text-transform: uppercase;
  border-radius: 3px;
  font-family: 'TrixieCyr-Plain', sans-serif;
  font-size: 32px;
  font-weight: 400;
  background: url('${stampBorder}');
  background-position: center;
  background-size: cover;
  border: none;
  cursor: pointer;
  color: #cf4638;
  outline: none;
  transition: all 100ms ease-in-out;

  :hover {
    transform: scale(1.02);
  }

  :active {
    transform: scale(.98);
  }
`;

export default Submit;
