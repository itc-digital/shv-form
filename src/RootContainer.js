import styled from 'styled-components';

const RootContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
  background: url("${process.env.PUBLIC_URL}/img/background-2x.png") center;
  @media (max-width: 1140px) {
    display: block;
    align-items: unset;
  }
`;

export default RootContainer;
