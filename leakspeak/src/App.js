import { DrizzleContext } from 'drizzle-react';
import React from 'react';
import { Loader } from 'semantic-ui-react';
import './App.css';
import LandingPage from './components/LandingPage';
import IPFS from './IPFS';

export default () => (
  <DrizzleContext.Consumer>
    {drizzleContext => {
      const { drizzle, drizzleState, initialized } = drizzleContext;
      if (!initialized) {
        return (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <h1>Loading...</h1>
            <Loader size="massive" active inline />
          </div>
        );
      }
      return (
        <div>
          <LandingPage drizzle={drizzle} drizzleState={drizzleState} />
        </div>
      );
    }}
  </DrizzleContext.Consumer>
);
