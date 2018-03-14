import styled from 'styled-components';

const Fields = styled.div`
  flex-basis: 100%;
  max-height: 483px;
  padding-right: 20px;
  box-sizing: border-box;
  overflow: auto;

  @media (max-width: 1140px) {
    flex-basis: 100%;
    max-height: unset;
    height: 100%;
    padding: 0;
    overflow: hidden;
  }
`;
export default Fields;
