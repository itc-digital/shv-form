import { Component } from 'inferno';
import RootContainer from './RootContainer';
import FormCard from './FormCard';
//import FormCardImage from './FormCardImage';
import ScrollHint from './ScrollHint';
import FormCardContent from './FormCardContent';
import FormCardTitle from './FormCardTitle';
import ItcLink from './ItcLink';
import FormCardFields from './FormCardFields';
import FieldLabel from './FieldLabel';
/* 
import FormCard from './FormCard'; 

<FormCardImage>
        <ScrollHint>Привет</ScrollHint>
      </FormCardImage>
    
    */

        
const App = () => (
  <RootContainer>
    <FormCard>
    
      <FormCardContent>
        <FormCardTitle>
          <span>Регистрация</span>
          <ItcLink>            
            <img width="20px" src="/ui/miss/static/it_fucking_c.png" />
          </ItcLink>
        </FormCardTitle>
        <FormCardFields>
          <div>
            <FieldLabel required for="fio">ФИО</FieldLabel>
          </div>
        </FormCardFields>
      </FormCardContent>
  </FormCard>
  </RootContainer>
);
    

export default App;
