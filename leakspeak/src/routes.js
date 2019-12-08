import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Components
import Home from './components/Home';
import Org from './components/Org';

class Routes extends React.Component {
  render() {
    const { drizzle, drizzleState } = this.props;

    return (
      <Switch>
        <Route exact path="/" component={Home} />
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
      </Switch>
    );
  }
}

export default Routes;
