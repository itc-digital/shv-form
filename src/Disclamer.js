import styled from 'styled-components';

const Disclamer = styled.p`   
    font-family: ${({ theme }) => theme.text.font.family};
    font-size: 17.5px;	
    color #614A40;		
    text-align: center;		
	
    @media (max-width: 1140px) {		
        font-size: 20px;		
  }
`;

export default Disclamer;
