import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './mock/templates/Blue.css';
import './mock/templates/Yellow.css';
import './mock/templates/Pink.css';
import './mock/templates/Red.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App config='./mock/config-app.json'/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
