import { Component } from 'inferno';
import RootContainer from './RootContainer';
import FormCard from './FormCard';
import FormCardImage from './FormCardImage';
import ScrollHint from './ScrollHint';
import FormCardContent from './FormCardContent';
import FormCardTitle from './FormCardTitle';
import ItcLink from './ItcLink';
import FormCardFields from './FormCardFields';
import FieldLabel from './FieldLabel';
import TypeField from './TypeField';
import TypeFieldSelect from './TypeFieldSelect';
import Select from './Select';
import SelectFaculty from './SelectFaculty';
import TypeFieldTextArea from './TypeFieldTextArea';
 

const App = () => (
  <RootContainer>
    <FormCard>
      <FormCardImage>
        <ScrollHint />
      </FormCardImage>
    
      <FormCardContent id="form" name="form-sign-up" action="/missrea2018" method="post" enctype="multipart/form-data">
        <FormCardTitle>
          <span>Регистрация</span>
          <ItcLink href="https://vk.com/reu_itc" target="_blank">
            <img width="20px" src={`${process.env.PUBLIC_URL}/img/it_fucking_c.png`} />
          </ItcLink>
        </FormCardTitle>
        <FormCardFields>
          <div>
            <FieldLabel required for="fio">ФИО</FieldLabel>
            <TypeField id="fio" type="text" name="fio" maxlength="256"></TypeField>
          </div>
          <Select>
            <TypeFieldSelect name="fakultet">
                        <option value="unset" selected style="display:none;">*Факультет</option>
                        <option value="ФФ">ФФ</option>
                        <option value="ФМЭСИ">ФМЭСИ</option>
                        <option value="ГРТСИ">ГРТСИ</option>
                        <option value="МШБиМЭ">МШБиМЭ</option>
                        <option value="Капитаны России">Капитаны России</option>
                        <option value="ФМа">ФМа</option>
                        <option value="ФМе">ФМе</option>
                        <option value="ФЭП">ФЭП</option>
                        <option value="ФЭТТ">ФЭТТ</option>
                        <option value="ИУиСЭП">ИУиСЭП</option>
                        <option value="БШМиП">БШМиП</option>
                        <option value="Integral">Integral</option>

            </TypeFieldSelect>    
          </Select>
          <Select>
            <TypeFieldSelect required name="kurs">            
            <option value="unset" selected style="display:none;">*Курс</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="1 магистратура">1, магистратура</option>
                        <option value="2 магистратура">2, магистратура</option>
            </TypeFieldSelect>
          </Select>
          <FieldLabel required for="group">Группа</FieldLabel>
          <TypeField id="group" type="text" name="group" maxlength="256"></TypeField>
          <FieldLabel required for="phone">Телефон</FieldLabel>
          <TypeField id="phone" type="tel" name="phone" placeholder="В формате 8 (123) 456-78-90" maxlength="256"></TypeField>
          <FieldLabel required for="experience">Опыт походов</FieldLabel>
          <TypeFieldTextArea id="experience"rows="1" cols="5" name="experience" placeholder="Сколько раз, куда, условия" maxlength="1024"></TypeFieldTextArea>

        </FormCardFields>
      </FormCardContent>
    </FormCard>
  </RootContainer>
);

export default App;
