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
        <Route exact path="/" component={Home} />
        <Route exact path="/org" component={Org} />
        <Route exact path="/contracts" component={ManageContracts} />
        <Route exact path="/journalist" component={JournalistView} />
        <Route exact path="/source" component={Home} />
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
