import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import Home from './Home';
import DrawingsList from './DrawingsList';
import Footer from './Footer';
import Navigation from './Navigation';
import Profile from './Profile';

const Main = () => {
  return (
    <article>
      <Navigation />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/gallery' component={DrawingsList} />
        <Route exact path='/profile' component={Profile} />
      </Switch>
      <Footer />
    </article>
  );
};

export default Main;
