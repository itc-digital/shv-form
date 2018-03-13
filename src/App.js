import { Component } from 'inferno';
import RootContainer from './RootContainer';
import FormCard from './FormCard';
import FormCardImage from './FormCardImage';
import ScrollHint from './ScrollHint';
import FormCardContent from './FormCardContent';
import FormCardTitle from './FormCardTitle';
import ItcLink from './ItcLink';
import FormCardFields from './FormCardFields';
import Label from './FieldLabel';
import TextInput from './TextInput';

const App = () => (
  <RootContainer>
    <FormCard>
      <FormCardImage>
        <ScrollHint />
      </FormCardImage>
      <FormCardContent>
        <FormCardTitle>
          <span>Регистрация</span>
          <ItcLink href="https://vk.com/reu_itc" target="_blank">
            <img
              width="20px"
              src={`${process.env.PUBLIC_URL}/img/it_fucking_c.png`}
            />
          </ItcLink>
        </FormCardTitle>
        <FormCardFields>
          <div>
            <Label required for="fio">
              ФИО
            </Label>
            <TextInput name="fio" id="fio" />
          </div>
        </FormCardFields>
      </FormCardContent>
    </FormCard>
  </RootContainer>
);

export default App;
