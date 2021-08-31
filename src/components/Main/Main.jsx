import React from 'react'

import { Switch, Route } from "react-router-dom";
import Hero from "../Hero/Hero";
import Articles from "../Articles/Articles";
import About from "../About/About";

export default function Main() {
    return (
        <React.Fragment>
            <Switch>
                <Route path="/" exact>
                    <Hero />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/articles">
                    <Articles />
                </Route>
            </Switch>
        </React.Fragment>
    )
}
