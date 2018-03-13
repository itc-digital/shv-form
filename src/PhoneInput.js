import TextInput from './TextInput';

const mask = ['8', ' ', '(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]

const PhoneInput = props => (
  <TextInput placeholder="8 (9XX) XXX-XXXX" mask={mask} {...props} />
);

export default PhoneInput;
