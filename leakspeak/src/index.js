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
import tokenMinter from './contracts/tokenMinter.json'

const options = { contracts: [Migrations, tokenMinter] };
const drizzle = new Drizzle(options);

ReactDOM.render(
  <DrizzleContext.Provider drizzle={drizzle}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </DrizzleContext.Provider>,

  document.getElementById('root')
);

serviceWorker.unregister();
