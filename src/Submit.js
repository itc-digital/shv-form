import styled from 'styled-components';

const Submit = styled.button`
  display: block;
  width: 100%;
  margin: 10px 20px 10px 10px;
  padding: 15px;
  box-sizing: border-box;
  text-transform: uppercase;
  border-radius: 3px;
  font-family: 'Open Sans', sans-serif;
  font-size: 17.5px;
  font-weight: 600;
  background: #986868;
  border: none;
  cursor: pointer;
  color: #fff;
  outline: none;
  transition: all 100ms ease-in-out;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.5);

  :hover {
    transform: scale(1.02);
    box-shadow: 0 3px 13px 0 rgba(0, 0, 0, 0.5);
  }

  :active {
    background: #795252;
  }
`;

export default Submit;
