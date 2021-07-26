import React from 'react';
import { Switch, Route } from 'react-router-dom';
import '../styles/content.css';
import Home from './Home';
import DrawingsList from './DrawingsList';
import DrawingPage from './DrawingPage';
import FormDrawing from './FormDrawing';

const Content = () => {
  return (
    <div className='content'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/drawings' component={DrawingsList} />
        <Route exact path='/form' component={FormDrawing} />
        <Route exact path='/drawing/:id' component={DrawingPage} />
      </Switch>
    </div>
  );
};

export default Content;
