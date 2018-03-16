import { withFormik } from 'formik';

import RootContainer from './RootContainer';
import FormCard from './FormCard';
import FormCardImage from './FormCardImage';
import ScrollHint from './ScrollHint';
import FormCardContent from './FormCardContent';
import CardHeader from './CardHeader';
import Logo from './Logo';
import Fields from './Fields';
import Label from './Label';
import Select from './Select';
import Textarea from './Textarea';
import TextInput from './TextInput';
import PhoneInput from './PhoneInput';
import Error from './Error';
import Submit from './Submit';
import Disclamer from './Disclamer';
import { Component } from 'inferno';

class App extends Component {
    render() {
        const {
            values,
            touched,
            errors,
            handleBlur,
            handleChange,
            handleSubmit
        } = this.props;

        return (
            <RootContainer>
                <FormCard>
                    <FormCardImage>
                        <ScrollHint />
                    </FormCardImage>

                    <FormCardContent
                        onSubmit={handleSubmit}
                        name="form-sign-up"
                        action="/missrea2018"
                        method="post"
                        enctype="multipart/form-data"
                    >
                        <CardHeader>
                            <span>Регистрация</span>
                            <Logo>
                                <img
                                    alt="Школа выживания 2018"
                                    src={`${
                                        process.env.PUBLIC_URL
                                    }/img/stamps.svg`}
                                />
                            </Logo>
                        </CardHeader>
                        <Fields>
                            <div>
                                <Label required for="fio">
                                    ФИО
                                </Label>
                                <TextInput
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.fio}
                                    id="fio"
                                    type="text"
                                    name="fio"
                                />
                                <Error>{touched.fio && errors.fio}</Error>
                            </div>

                            <Label required for="fakultet">
                                Факультет
                            </Label>
                            <Select name="fakultet">
                                <option
                                    style="display:none;"
                                    value="unset"
                                    selected
                                >
                                    Выбери...
                                </option>
                                <option value="ФФ">ФФ</option>
                                <option value="ФМЭСИ">ФМЭСИ</option>
                                <option value="ГРТСИ">ГРТСИ</option>
                                <option value="МШБиМЭ">МШБиМЭ</option>
                                <option value="Капитаны России">
                                    Капитаны России
                                </option>
                                <option value="ФМа">ФМа</option>
                                <option value="ФМе">ФМе</option>
                                <option value="ФЭП">ФЭП</option>
                                <option value="ФЭТТ">ФЭТТ</option>
                                <option value="ИУиСЭП">ИУиСЭП</option>
                                <option value="БШМиП">БШМиП</option>
                                <option value="Integral">Integral</option>
                            </Select>

                            <Label required for="kurs">
                                Курс
                            </Label>
                            <Select required name="kurs">
                                <option
                                    value="unset"
                                    selected
                                    style="display:none;"
                                >
                                    Выбери...
                                </option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="1 магистратура">
                                    1, магистратура
                                </option>
                                <option value="2 магистратура">
                                    2, магистратура
                                </option>
                            </Select>

                            <Label required for="group">
                                Группа
                            </Label>
                            <TextInput
                                id="group"
                                type="text"
                                name="group"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.group}
                            />
                            <Error>{touched.group && errors.group}</Error>

                            <Label required for="phone">
                                Телефон
                            </Label>
                            <PhoneInput
                                id="phone"
                                type="tel"
                                name="phone"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.phone}
                            />

                            <Error>{touched.phone && errors.phone}</Error>
                            <Label required for="vkLink">
                                Страница ВКонтакте
                            </Label>
                            <TextInput
                                id="vkLink"
                                type="url"
                                name="vkLink"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.vkLink}
                            />

                            <Error>{touched.vkLink && errors.vkLink}</Error>

                            <Label required for="experience">
                                Опыт походов
                            </Label>
                            <Textarea
                                id="experience"
                                name="experience"
                                placeholder="Сколько раз, куда, условия"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.experience}
                            />

                            <Error>{touched.experience && errors.experience}</Error>

                            <Label required for="otherExperience">
                                Другой полезный опыт
                            </Label>
                            <Textarea
                                id="otherExperience"
                                name="otherExperience"
                                placeholder="Страйкбол, спортивное ориентирование и т.д."
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.otherExperience}
                            />

                            <Error>{touched.otherExperience && errors.otherExperience}</Error>

                            <Label required for="inventoryAvailiable">
                                Имеющийся инвентарь
                            </Label>
                            <Textarea
                                id="inventoryAvailiable"
                                name="inventoryAvailiable"
                                placeholder="Палатка, спальник, пенка и т.д."
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.inventoryAvailiable}
                            />

                            <Error>{touched.inventoryAvailiable && errors.inventoryAvailiable}</Error>
                            <Label required for="fitnessLevel">
                                Уровень физической подготовки (1-10)
                            </Label>

                            <Select required name="fitnessLevel">
                                <option
                                    value="unset"
                                    selected
                                    style="display:none;"
                                >
                                    Выбери...
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
                            </Select>

                            <Label required for="diseases">
                                Болезни и травмы
                            </Label>
                            <Textarea
                                id="diseases"
                                name="diseases"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.diseases}
                            />

                            <Error>{touched.diseases && errors.diseases}</Error>

                            <Label required for="allergies">
                                Аллергии
                            </Label>
                            <Textarea
                                id="allergies"
                                name="allergies"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.allergies}
                            />

                            <Error>{touched.allergies && errors.allergies}</Error>

                            <Label required for="yourTrip">
                                Твое самое дальнее путешествие
                            </Label>
                            <Textarea
                                id="yourTrip"
                                name="yourTrip"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.yourTrip}
                            />

                            <Error>{touched.yourTrip && errors.yourTrip}</Error>

                            <Submit type="submit">Отправить</Submit>
                            <Disclamer>
                                * нажимая "Отправить" ты соглашаешься на
                                обработку персональных данных
                            </Disclamer>
                        </Fields>
                    </FormCardContent>
                </FormCard>
            </RootContainer>
        );
    }
}

export default withFormik({
    mapPropsToValues: () => ({
        fio: '',
        group: '',
        phone: '',
        vkLink: '',
        experience: '',
        otherExperience: '',
        inventoryAvailiable: '',
        diseases: '',
        allergies: '',
        yourTrip: ''
    }),
    validate: (values, props) => {
        const errors = {};
        Object.entries(values).forEach(([field, value]) => {
            if (!value) {
                errors[field] = 'Это поле обязательно для заполнения';
            }
        });

        console.log(values, errors);

        return errors;
    },

    handleSubmit: values => {
        console.log('Значения', values);
    }
})(App);
