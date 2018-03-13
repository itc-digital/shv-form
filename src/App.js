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
import TypeFieldSelect from './TypeFieldSelect';
import Select from './Select';
import SelectFaculty from './SelectFaculty';
import Textarea from './TypeFieldTextArea';
import TextInput from './TextInput';
import PhoneInput from './PhoneInput';
import Submit from './Submit';

const App = () => (
  <RootContainer>
    <FormCard>
      <FormCardImage>
        <ScrollHint />
      </FormCardImage>

      <FormCardContent
        id="form"
        name="form-sign-up"
        action="/missrea2018"
        method="post"
        enctype="multipart/form-data"
      >
        <FormCardTitle>
          <span>Регистрация</span>
          <ItcLink href="https://vk.com/reu_itc" target="_blank">
            <img
              width="20px"
              src={`${process.env.PUBLIC_URL}/img/stamps.svg`}
            />
          </ItcLink>
        </FormCardTitle>
        <FormCardFields>
          <div>
            <FieldLabel required for="fio">
              ФИО
            </FieldLabel>
            <TextInput id="fio" type="text" name="fio" maxlength="256" />
          </div>
          <Select>
            <TypeFieldSelect name="fakultet">
              <option value="unset" selected style="display:none;">
                *Факультет
              </option>
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
              <option value="unset" selected style="display:none;">
                *Курс
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="1 магистратура">1, магистратура</option>
              <option value="2 магистратура">2, магистратура</option>
            </TypeFieldSelect>
          </Select>
          <FieldLabel required for="group">
            Группа
          </FieldLabel>
          <TextInput id="group" type="text" name="group" maxlength="256" />
          <FieldLabel required for="phone">
            Телефон
          </FieldLabel>
          <PhoneInput
            id="phone"
            type="tel"
            name="phone"
          />
          <FieldLabel required for="vkLink">
            Страница ВКонтакте
          </FieldLabel>
          <TextInput id="vkLink" type="url" name="vkLink" maxlength="256" />

          <FieldLabel required for="experience">
            Опыт походов
          </FieldLabel>
          <Textarea
            id="experience"
            rows="1"
            cols="5"
            name="experience"
            placeholder="Сколько раз, куда, условия"
            maxlength="1024"
          />
          <FieldLabel required for="otherExperience">
            Другой полезный опыт
          </FieldLabel>
          <Textarea
            id="otherExperience"
            rows="1"
            cols="5"
            name="otherExperience"
            placeholder="Страйкбол, спортивное ориентирование и т.д."
            maxlength="1024"
          />
          <FieldLabel required for="inventoryAvailiable">
            Имеющийся инвентарь
          </FieldLabel>
          <Textarea
            id="inventoryAvailiable"
            rows="1"
            cols="5"
            name="inventoryAvailiable"
            placeholder="Палатка, спальник, пенка и т.д."
            maxlength="1024"
          />
          <Select>
          <TypeFieldSelect required name="fitnessLevel">
            <option value="unset" selected style="display:none;">
              *Уровень физической подготовки (1-10)
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>

          </TypeFieldSelect>
        </Select>
          <FieldLabel required for="diseases">
            Болезни и травмы
          </FieldLabel>
          <Textarea
            id="diseases"
            rows="1"
            cols="5"
            name="diseases"
            maxlength="1024"
          />
          <FieldLabel required for="allergies">
            Аллергии
          </FieldLabel>
          <Textarea
            id="allergies"
            rows="1"
            cols="5"
            name="allergies"
            maxlength="1024"
          />
          <FieldLabel required for="yourTrip">
            Твое самое дальнее путешествие
          </FieldLabel>
          <Textarea
            id="yourTrip"
            rows="1"
            cols="5"
            name="yourTrip"
            maxlength="1024"
          />
          <Submit type="submit" name="submit">Отправить</Submit>

        </FormCardFields>
      </FormCardContent>
    </FormCard>
  </RootContainer>
);

export default App;
