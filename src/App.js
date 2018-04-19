import { Component } from 'inferno';
import { withFormik } from 'formik';
import { ThemeProvider } from 'styled-components';
import FuzzySearch from 'react-fuzzy';

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
    constructor(props) {
        super(props);
        this.state = {
            success: false,
            result: false,
            valueOfFIO: '',
            error: false,
            participants: ['Лекомцев Дмитрий Константинович']
        };
        //fetch(`${process.env.PUBLIC_URL}/api`).then(response =>{
        //    console.log(response);
        //    return response.json()
        //}).then(data =>{
        //    this.setState({participants:data})
        //    console.log(this.state.participants);
        //})
        this.handleSubmit = this.handleSubmit.bind(this);
        this.smthChange = this.smthChange.bind(this);
    }
    list = ["Лекомцев Дмитрий Константинович","Леко","Лекомц","лекоооо"]
    smthChange = e => {
        if (this.state.success != true) {
            this.setState({ valueOfFIO: e.target.value });
        }
    };
    handleSubmit = e => {
        if (this.state.valueOfFIO.replace(/\s+/g, '') === '') {
            this.setState({ error: true });
        } else if (
            this.state.participants.indexOf(this.state.valueOfFIO) != -1
        ) {
            this.setState({ success: true, result: true, error: false });
        } else {
            this.setState({ success: true, result: false, error: false });
        }
    };
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
                                <H1>{!this.state.success?"Верификация":"Приказ"}</H1>
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
                                {this.state.success ? (
                                    <div>
                                        <Label>
                                            В соответствии с положением "О
                                            порядке набора участников Школы
                                            Выживания 2018" от лица главного
                                            организатора приказываю считать, что{' '}
                                            {this.state.valueOfFIO}{' '}
                                            <b>
                                                {this.state.result
                                                    ? 'допущен'
                                                    : 'не допущен'}{' '}
                                            </b>к участию в проекте.
                                            <br />
                                            <br />
                                        </Label>
                                        <Stamp rotation="-8deg">
                                            Ты {this.state.result ? '' : 'не'}{' '}
                                            прошёл
                                        </Stamp>
                                    </div>
                                ) : (
                                    <div>
                                        <Label required for="fio">
                                            ФИО
                                        </Label><FuzzySearch
  list={this.list}
  onChange={this.smthChange}
  //value={this.state.valueOfFIO}
  width="100%"
  placeholder=""
  ClassName="myInput"
  resultsTemplate={(props, state, styles, clickHandler) => {
    return state.results.map((i) => {
      const style = state.selectedIndex === i ? styles.selectedResultStyle : styles.resultsStyle;
      return (
        <div
          key={i}
          onClick={()=>clickHandler(i)}
        >
          {this.list[i]}
        </div>
      );
    });
  }}
/>
<TextInput/>
                                        {this.state.error && (
                                            <Error>
                                                Это поле обязательно для
                                                заполнения
                                            </Error>
                                        )}

                                        <Submit
                                            onClick={this.handleSubmit}
                                            type="submit"
                                        >
                                            <Stamp>Отправить</Stamp>
                                        </Submit>
                                        <Disclamer>
                                            * нажимая "Отправить" ты
                                            соглашаешься на обработку
                                            персональных данных
                                        </Disclamer>
                                    </div>
                                )}
                            </Fields>
                        </FormCardContent>
                    </FormCard>
                </RootContainer>
            </ThemeProvider>
        );
    }
}

export default withFormik({})(App);
