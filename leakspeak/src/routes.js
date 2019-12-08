import React from 'react';
import { Route, Switch } from 'react-router-dom';
//Components
import Home from './components/Home'
import Org from './components/Org'
import ManageContracts from './components/ManageConracts'
import JournalistView from './components/JournalistView';


class Routes extends React.Component {
  render() {
    const { drizzle, drizzleState } = this.props;
    // TODO: pass drizzle to the below components!

    return (
      <Switch>
        <Route
          exact
          path="/"
          render={props => {
            return (
              <Home
                drizzle={drizzle}
                drizzleState={drizzleState}
                props={props}
              />
            );
          }}
        />
        <Route exact path="/org" component={Org} />
        <Route
          exact
          path="/contracts"
          render={props => {
            return (
              <Home
                drizzle={drizzle}
                drizzleState={drizzleState}
                props={props}
              />
            );
          }}
        />
         <Route
          exact
          path="/source"
          render={props => {
            return (
              <Home
                drizzle={drizzle}
                drizzleState={drizzleState}
                props={props}
              />
            );
          }}
        />
        <Route
          exact
          path="/journalist"
          render={props => {
            return (
              <ManageContracts
                drizzle={drizzle}
                drizzleState={drizzleState}
                props={props}
              />
            );
          }}
        />
        <Route
          exact
          path="/organization"
          render={props => {
            return (
              <Org
                drizzle={drizzle}
                drizzleState={drizzleState}
                props={props}
              />
            );
          }}
        />
        <Route
          exact
          path="/journalist"
          render={props => {
            return (
              <JournalistView
                drizzle={drizzle}
                drizzleState={drizzleState}
                props={props}
              />
            );
          }}
        />
      </Switch>
    );
  }
}

export default Routes;
