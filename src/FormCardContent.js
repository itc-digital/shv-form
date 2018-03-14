import styled from 'styled-components';

const FormCardContent = styled.form`
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    padding: 0 50px 50px 50px;

    @media (max-width: 1140px) {
        padding: 20px;
    }
`;

export default FormCardContent;
