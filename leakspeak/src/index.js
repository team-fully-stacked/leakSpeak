import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { Drizzle } from 'drizzle';
import { DrizzleContext } from 'drizzle-react';
import './App.css';
import Migrations from './contracts/Migrations.json';
import ContractCreator from './contracts/ContractCreator.json';
import SafeMath from './contracts/SafeMath.json';
import TokenMinter from './contracts/tokenMinter.json';
import store from './middleware';

const options = {
  contracts: [Migrations, ContractCreator, SafeMath, TokenMinter],
};
const drizzle = new Drizzle(options, store);

ReactDOM.render(
  <DrizzleContext.Provider drizzle={drizzle}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </DrizzleContext.Provider>,

  document.getElementById('root')
);

serviceWorker.unregister();
