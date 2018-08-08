import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import LoginForm from './forms/LoginForm';
import RegisterForm from './forms/RegisterForm';
import Dashboard from './forms/Dashboard';

ReactDOM.render((
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ LoginForm } />
            <Route path="/register" component={ RegisterForm } />
            <Route path="/dashboard/:username" component={ Dashboard } />
        </Switch>
    </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();