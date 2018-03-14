import styled from 'styled-components';

const FormCard = styled.div`
  display: flex;
  width: 1140px;
  height: 667px;
  box-shadow: 0px 6px 45px 0px rgba(0, 0, 0, 0.35);
  background: radial-gradient(
    circle at center top,
    #fdf7e8,
    #fef6e0 57%,
    #dcd2b7 100%
  );

  @media (max-width: 1140px) {
    background: radial-gradient(
      circle at center top,
      #dcd2b7,
      #fef6e0 57%,
      #fdf7e8 100%
    );
    width: 1140px;
    display: block;
    min-height: 100%;
    width: 100%;
  }
`;

export default FormCard;
