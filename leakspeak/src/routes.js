import React from 'react'
import { Route, Switch} from 'react-router-dom'

//Components
import Home from './components/Home'


class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        )
    }
}

export default Routes