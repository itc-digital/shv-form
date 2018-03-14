import styled from 'styled-components';

const FormCard = styled.div`
    display: flex;
    width: 1140px;
    height: 667px;
    box-shadow: 0px 6px 45px 0px rgba(0, 0, 0, 0.35);
    background-color: #fef6e3;
    @media (max-width: 1140px) {
        width: 1140px;
        display: block;
        min-height: 100%;
        width: 100%;
    }
`;

export default FormCard;
