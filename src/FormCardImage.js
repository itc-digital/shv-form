import styled from 'styled-components';

const FormCardImage = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
  justify-content: space-between;
  height: 100%;
  flex-basis: 375px;
  text-align: center;
  color: #201010;
  background: url("${process.env.PUBLIC_URL}/img/stamp_area.png");
  background-size: cover;
  background-position: center;

  @media (max-width: 1140px) {
    height: 100vh;
  }
`;
export default FormCardImage;
