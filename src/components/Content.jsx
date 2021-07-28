import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import '../styles/content.css';
import Loader from '../components/Loader';

const Content = () => {
  const Home = lazy(() => import('./Home'));
  const DrawingsList = lazy(() => import('./DrawingsList'));
  const FormDrawing = lazy(() => import('./FormDrawing'));
  const DrawingPage = lazy(() => import('./DrawingPage'));

  return (
    <div className='content'>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/drawings' component={DrawingsList} />
          <Route exact path='/form' component={FormDrawing} />
          <Route exact path='/drawing/:id' component={DrawingPage} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default Content;
