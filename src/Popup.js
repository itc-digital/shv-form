import styled from 'styled-components';

const Popup = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    top: 0;
    left: 0;
    z-index: 10;
    height: 100vh;
    padding: 0 50px;
    box-sizing: border-box;
    background: #fdf7e8;
`;

export default Popup;
