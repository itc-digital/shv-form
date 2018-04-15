import { Component } from 'inferno';
import { withFormik } from 'formik';
import { ThemeProvider } from 'styled-components';

import theme from './theme';

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
import Popup from './Popup';
import Stamp from './Stamp';
import LinkButton from './LinkButton';
import { H1, H2 } from './Typography';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {success: false, result: false, valueOfFIO: '', error: false};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.smthChange = this.smthChange.bind(this);
    }
    smthChange = e =>{
        if(this.state.success!=true){
            this.setState({valueOfFIO: e.target.value})
        }
    }
    handleSubmit = e =>{
        if (this.state.valueOfFIO.replace(/\s+/g, '') === ''){
            this.setState({error:true})
        }

        else if(this.state.valueOfFIO == "Лекомцев Дмитрий Константинович"){
            this.setState({success: true, result: true, error: false});
        }else{
            this.setState({success: true, result: false, error: false});
        }
     }
    handleSelect = e => {
        const { setFieldValue } = this.props;

        setFieldValue(e.target.name, e.target.value);
    };

    resetStatus = () => this.props.setStatus({});

    render() {
        const {
            values,
            touched,
            errors,
            status,
            result,
            isSubmitting,
            handleBlur,
            handleChange
        } = this.props;

        return (
            <ThemeProvider theme={theme}>
                <RootContainer>

                    <FormCard>
                        <FormCardImage>
                            <ScrollHint />
                        </FormCardImage>

                        <FormCardContent>
                            <CardHeader>
                                <H1>Регистрация</H1>
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
                                    {this.state.success?(

                                <div>
                                    <Label>
                                    В соответствии с положением "О порядке набора участников Школы Выживания 2018" от лица главного организатора приказываю считать, что {this.state.valueOfFIO} <b>{this.state.result?"допущен": "не допущен"} </b>к участию в проекте.
                                    <br/><br/></Label>
                                <Stamp rotation="-8deg">
                                    Ты {this.state.result ? '' : 'не'} прошёл
                                </Stamp>
                                </div>
                                    ):(
                                <div>
                                    <Label required for="fio">
                                        ФИО
                                    </Label>
                                    <TextInput
                                        onChange={this.smthChange}
                                        onBlur={handleBlur}
                                        value={values.fio}
                                        id="fio"
                                        type="text"
                                        name="fio"
                                    />
                                    {this.state.error&& <Error>Это поле обязательно для заполнения</Error>}

                                <Submit onClick={this.handleSubmit} type="submit">
                                    <Stamp>Отправить</Stamp>
                                </Submit>
                                <Disclamer>
                                    * нажимая "Отправить" ты соглашаешься на
                                    обработку персональных данных
                                </Disclamer>

                                </div>)}
                            </Fields>
                        </FormCardContent>
                    </FormCard>
                </RootContainer>
            </ThemeProvider>
        );
    }
}

export default withFormik({
    mapPropsToValues: () => ({
        fio: '',
        fakultet: '',
        kurs: '',
        group: '',
        phone: '',
        vkLink: '',
        experience: '',
        otherExperience: '',
        inventoryAvailiable: '',
        fitnessLevel: '',
        diseases: '',
        allergies: '',
        yourTrip: ''
    }),
    /* validate: (values, props) => {
        const errors = {};
        Object.entries(values).forEach(([field, value]) => {
            if (!value || value === 'unset') {
                errors[field] = 'Это поле обязательно для заполнения';
            } else if (field === 'kurs' && value === 'Другой') {
                errors[field] = 'Проект проводится только для первокурсников.';
            }
        });

        return errors;
    }, */
    handleSubmit: (values, { setSubmitting, setStatus }) => {
        
    } 
})(App); 
