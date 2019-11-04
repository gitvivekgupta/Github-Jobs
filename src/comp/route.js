import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../App";
import Job from "./job";

const Router = () => (

    <BrowserRouter>
        <Switch>
            <Route path="/" component={App} exact />
            <Route path="/result/:id" component={Job} />
        </Switch>
    </BrowserRouter>
);

export default Router;