import styled from 'styled-components';

const RootContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;

  @media (max-width: 1140px) {
    align-items: unset;
  }
`;

export default RootContainer;
