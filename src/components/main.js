import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './home';
import About from './about';
import Project from './project';
import Contact from './contact';

const Main = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/project" component={Project} />
        <Route path="/contact" component={Contact} />
    </Switch>
)
export default Main;