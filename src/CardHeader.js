import styled from 'styled-components';

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-basis: 100%;
  padding-right: 15px;
  font-family: 'TrixieCyr-Plain', serif;
  font-size: 35px;
  font-weight: 400;
  color: #201010;

  @media (max-width: 1140px) {
    font-size: 20px;
  }
`;

export default CardHeader;
