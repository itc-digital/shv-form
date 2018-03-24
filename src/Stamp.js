import styled from 'styled-components';
import stampBorder from './img/stamp_border.png';

const Stamp = styled.div`
  width: 200px;
  margin: 30px auto 10px auto;
  padding: 15px;
  box-sizing: border-box;
  text-transform: uppercase;
  text-align: center;
  border-radius: 3px;
  font-family: ${({ theme }) => theme.header.font.family};
  font-size: 32px;
  font-weight: 400;
  background: url('${stampBorder}');
  background-position: center;
  background-size: cover;
  transform: rotateZ(${({ rotation }) => (rotation ? rotation : '0deg')});
  color: #cf4638;
`;

export default Stamp;
