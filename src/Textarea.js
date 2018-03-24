import styled from 'styled-components';
import { Component } from 'inferno';

const lineHeight = 20;

const TextareaStyled = styled.textarea`
    margin-top: 12px;
    font-family: ${({ theme }) => theme.text.font.family};
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
    font-family: ${({ theme }) => theme.text.color};
    resize: none;
    overflow: hidden;
    font-size: 17.5px;
    :focus {
        border-bottom: 2px solid #cf4638;
    }
    @media (max-width: 1140px) {
        padding-bottom: 10px;
        font-size: 20px;
    }

    ::-webkit-input-placeholder {
        opacity: 1;
        font-family: ${({ theme }) => theme.input.placeholderColor};
    }
    ::-ms-input-placeholder {
        opacity: 1;
        font-family: ${({ theme }) => theme.input.placeholderColor};
    }
    :-ms-input-placeholder {
        opacity: 1;
        font-family: ${({ theme }) => theme.input.placeholderColor};
    }
    ::-moz-placeholder {
        opacity: 1;
        font-family: ${({ theme }) => theme.input.placeholderColor};
    }
    :-moz-placeholder {
        opacity: 1;
        font-family: ${({ theme }) => theme.input.placeholderColor};
    }
    ::placeholder {
        opacity: 1;
        font-family: ${({ theme }) => theme.input.placeholderColor};
    }
`;

class Textarea extends Component {
    state = {
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
            rows: newRows,
            value: e.target.value
        });

        this.props.onChange(e);
    };

    render() {
        const { value, rows } = this.state;
        const { props } = this;

        return (
            <TextareaStyled
                {...props}
                value={value}
                onChange={this.handleChange}
                rows={rows}
                cols="5"
                maxLength="1024"
            />
        );
    }
}

export default Textarea;
