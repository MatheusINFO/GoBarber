import React from 'react';
import {Switch} from 'react-router-dom';

import Route from './routes';

// with authentication
import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

// without authentication
import DashBoard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';

// not found page
import NotFound from '../pages/NotFound';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={SignIn}/>
        <Route path="/register" component={SignUp}/>

        <Route path="/dashboard" component={DashBoard} isPrivate/>
        <Route path="/profile" component={Profile} isPrivate/>

        <Route path="/" component={NotFound}/>
    </Switch>
);

export default Routes;
