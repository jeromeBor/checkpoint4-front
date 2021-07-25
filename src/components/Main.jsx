import React from 'react';
import { Switch, Route } from 'react-router-dom';
import '../styles/main.css';
import Home from './Home';
import DrawingsList from './DrawingsList';
import DrawingPage from './DrawingPage';
import Footer from './Footer';
import Navigation from './Navigation';
import FormDrawing from './FormDrawing';

const Main = () => {
  return (
    <article className='main'>
      <Navigation />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/drawings' component={DrawingsList} />
        <Route exact path='/form' component={FormDrawing} />
        <Route exact path='/drawing/:id' component={DrawingPage} />
      </Switch>
      <Footer />
    </article>
  );
};

export default Main;
