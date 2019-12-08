import React from 'react'
import { Route, Switch} from 'react-router-dom'

//Components
import Home from './components/Home'
import Org from './components/Org'
import ManageContracts from './components/ManageConracts'

class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/org" component={Org} />
                <Route exact path="/journalist" component={ManageContracts} />
                <Route exact path="/source" component={Home} />

            </Switch>
        )
    }
}

export default Routes