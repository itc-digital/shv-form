import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  padding: 50px 50px 100px 50px;

  @media (max-width: 1140px) {
    padding: 20px;
    background: #fdf7e8;
  }
`;

export default Form;
