import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

WebFont.load({
  google: {
    families: ['Roboto:400', 'sans-serif', 'Elsie Swash Caps', 'Lora',
              'Raleway::latin' ]
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
