import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";

import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';
import Home from '../components/Home';
import Porfolio from '../components/Porfolio';
import Project from '../components/Project';
import Contact from '../components/Contact';


const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/porfolio' component={Porfolio} exact/>
        <Route path='/porfolio/:id' component={Project}/>
        <Route path='/contact' component={Contact} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
