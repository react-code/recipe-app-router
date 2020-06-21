import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from "./App";
import RecipeDetail from './components/RecipeDetail';

const AppRouter = () => (
    <Router>
        <Switch>
            <Route path="/" component={App} exact />
            <Route path="/recipe/:key" component={RecipeDetail} exact />
        </Switch>
    </Router>
)

export default AppRouter;