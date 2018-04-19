import styled, { injectGlobal } from 'styled-components';
import FuzzySearch from 'react-fuzzy';

injectGlobal`
    .fuzzy-search {
        margin-top: 12px;

        & > div {
            padding: unset!important;
            box-shadow: unset!important;
            border-radius: unset!important;
            background-color: unset!important;
        }

        & > div > input {
            font-family: ${({ theme }) => theme.text.font.family}!important;
            width: 100%!important;
            padding: 0 0 5px!important;
            box-sizing: border-box!important;
            border: 0!important;
            outline: 0!important;
            background: transparent!important;
            border-bottom: 2px solid #ccc1a7!important;
            border-radius: unset!important;
            line-height: unset!important;
            -webkit-appearance: none!important;
            -moz-appearance: none!important;
            appearance: none!important;
            font-family: ${({ theme }) => theme.text.color}!important;
            resize: none!important;
            overflow: hidden!important;
            font-size: 17.5px!important;

            :focus {
                border-bottom: 2px solid #cf4638!important;
                color: #201010!important;
            }

            ::-webkit-input-placeholder {
                opacity: 1!important;
                font-family: ${({ theme }) =>
                    theme.input.placeholderColor}!important;
            }
            ::-ms-input-placeholder {
                opacity: 1!important;
                font-family: ${({ theme }) =>
                    theme.input.placeholderColor}!important;
            }
            :-ms-input-placeholder {
                opacity: 1!important;
                font-family: ${({ theme }) =>
                    theme.input.placeholderColor}!important;
            }
            ::-moz-placeholder {
                opacity: 1!important;
                font-family: ${({ theme }) =>
                    theme.input.placeholderColor}!important;
            }
            :-moz-placeholder {
                opacity: 1!important;
                font-family: ${({ theme }) =>
                    theme.input.placeholderColor}!important;
            }
            ::placeholder {
                opacity: 1!important;
                font-family: ${({ theme }) =>
                    theme.input.placeholderColor}!important;
            }
        }
    }
`;

const ResultItem = styled.div`
    padding: 10px;
    background-color: #fef6e0;
    cursor: pointer;

    ${({ selected }) => selected && `color: #fff; background-color: #000;`};

    &:hover {
        background-color: #cf4638;
        color: #fff;
    }
`;

const ResultSearch = ({ list, onSelect, value, onItemClick }) => (
    <FuzzySearch
        list={list}
        onSelect={onSelect}
        value={value}
        width="100%"
        placeholder=""
        className="fuzzy-search"
        resultsTemplate={(props, state, styles, clickHandler) => {
            return state.results.map((result, i) => (
                <ResultItem
                    key={i}
                    style={{}}
                    selected={state.selectedIndex === result}
                    onClick={() => {
                        clickHandler(result);
                        onSelect(result);
                        console.log(state);
                    }}
                >
                    {list[result]}
                </ResultItem>
            ));
        }}
    />
);

export default ResultSearch;
