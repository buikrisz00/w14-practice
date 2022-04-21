import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ButtonWithClass from './components/ButtonWithClass';
import ButtonWithHooks from './components/ButtonWithHooks';
import Header from './components/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header to="This is the end of the header" />
    {/* <ButtonWithClass /> */}
    <ButtonWithHooks />
  </React.StrictMode>
);