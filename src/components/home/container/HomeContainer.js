import React from 'react'
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Home from "../components/Home"

const HomeContainer = () => {
    const { path } = useRouteMatch()
    return (
        <Switch>
            <Route path={path} exact component={Home}/>
        </Switch>
    )
}

export default HomeContainer
