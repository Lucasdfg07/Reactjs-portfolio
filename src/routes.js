import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';

const Routes = () => {
    return(
        <Switch>
            <Route component={Home} path="/" exact />
            <Route component={Contact} path="/contact" exact />
        </Switch>
    )
}

export default Routes;