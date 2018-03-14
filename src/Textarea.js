import styled from 'styled-components';
import { Component } from 'inferno';

const lineHeight = 20;

const TextareaStyled = styled.textarea`
  margin-top: 12px;
  font-family: 'Open Sans', sans-serif;
  width: 100%;
  padding-bottom: 5px;
  box-sizing: border-box;
  border: 0;
  outline: 0;
  padding: 0;
  line-height: ${lineHeight}px;
  background: transparent;
  border-bottom: 2px solid #ccc1a7;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  color: #201010;
  resize: none;
  overflow: hidden;
  font-size: 17.5px;
  :focus {
    border-bottom: 2px solid #cf4638;
    color: #201010;
  }
  @media (max-width: 1140px) {
    padding-bottom: 10px;
    font-size: 20px;
  }

  ::-webkit-input-placeholder {
    opacity: 1;
    color: #dcd5d5;
  }
  ::-ms-input-placeholder {
    opacity: 1;
    color: #dcd5d5;
  }
  :-ms-input-placeholder {
    opacity: 1;
    color: #dcd5d5;
  }
  ::-moz-placeholder {
    opacity: 1;
    color: #dcd5d5;
  }
  :-moz-placeholder {
    opacity: 1;
    color: #dcd5d5;
  }
  ::placeholder {
    opacity: 1;
    color: #dcd5d5;
  }
`;

class Textarea extends Component {
  state = {
    value: '',
    rows: 1
  };

  handleChange = e => {
    const oldRows = e.target.rows;
    e.target.rows = 1;
    const newRows = ~~(e.target.scrollHeight / lineHeight);

    if (newRows === oldRows) {
      e.target.rows = newRows;
    }

    this.setState({
      value: e.target.value,
      rows: newRows
    });
  };

  render() {
    const { value, rows } = this.state;
    const { props } = this;

    return (
      <TextareaStyled
        value={value}
        onChange={this.handleChange}
        rows={rows}
        cols="5"
        maxLength="1024"
        {...props}
      />
    );
  }
}

export default Textarea;
