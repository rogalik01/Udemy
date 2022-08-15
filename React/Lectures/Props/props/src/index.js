import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Button} from "./App"
import BootstrapTest from './BootstrapTest';
import styled from 'styled-components'

import 'bootstrap/dist/css/bootstrap.min.css';

const BigButton = styled(Button)` // наследование элементов
    margin: 0 auto;
    width: 245px;
    text-align: center;
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <BigButton as="a">Отправить отчёт</BigButton> {/* as для смены имени тега */}
    <BootstrapTest></BootstrapTest>
  </React.StrictMode>
);
