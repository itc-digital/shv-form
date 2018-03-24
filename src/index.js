import { render } from 'inferno';
import App from './App';
import 'whatwg-fetch';
import 'url-search-params-polyfill';
import 'babel-polyfill';
import './index.css';

render(<App />, document.getElementById('app'));
