import React from 'react';
import {Switch,Route} from "react-router-dom"
import Home from "../views/Home";
import About from "../views/About";
function Router(props) {
    return (
            <Switch>
                <Route exact path='/' >
                    <Home/>
                </Route>
                <Route  path='/' >
                    <About/>
                </Route>
            </Switch>
    );
}

export default Router;