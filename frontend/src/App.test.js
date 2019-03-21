import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App config='./mock/config-app.json'/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
