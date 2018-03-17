import styled from 'styled-components';

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-basis: 100%;
  padding-right: 15px;

  @media (max-width: 500px) {
    font-size: 20px;
  }
`;

export default CardHeader;
