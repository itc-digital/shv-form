import styled from 'styled-components';

const Fields = styled.div`
  max-height: 400px;
  padding-right: 20px;
  box-sizing: border-box;
  overflow: auto;

  @media (max-width: 1140px) {
    max-height: unset;
    padding: 0;
    overflow: hidden;
  }
`;
export default Fields;
