import React from 'react';
import{ BrowserRouter, Switch, Route} from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/register'

export default function Routes(){
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Logon} />
            <Route path="/register" exact component={Register} />
        </Switch>
    </BrowserRouter>
    )
}
