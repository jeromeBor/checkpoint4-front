import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import '../styles/content.css';
import Loader from '../components/Loader';

const Content = () => {
  const Home = lazy(() => import('./Home'));
  const DrawingsList = lazy(() => import('./DrawingsList'));
  const Contact = lazy(() => import('./Contact'));
  const DrawingPage = lazy(() => import('./DrawingPage'));
  const Login = lazy(() => import('./admin/Login'));
  const Dashboard = lazy(() => import('./admin/Dashboard'));
  const CreateDrawing = lazy(() => import('./admin/CreateDrawing'));
  const UpdateDrawing = lazy(() => import('./admin/UpdateDrawing'));
  const CreateTag = lazy(() => import('./admin/CreateTag'));
  const UpdateTag = lazy(() => import('./admin/UpdateTag'));
  const SearchDrawing = lazy(() => import('./admin/SearchDrawing'));

  return (
    <div className='content'>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/drawings' component={DrawingsList} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/drawing/:id' component={DrawingPage} />
          <Route exact path='/admin' component={Login} />
          <Route exact path='/admin/dashboard' component={Dashboard} />
          <Route exact path='/admin/create-drawing' component={CreateDrawing} />
          <Route
            exact
            path='/admin/update-drawing/:id'
            component={UpdateDrawing}
          />
          <Route exact path='/admin/create-tag' component={CreateTag} />
          <Route exact path='/admin/update-tag/:id' component={UpdateTag} />
          <Route
            exact
            path='/admin/dashboard/:searchValue'
            component={SearchDrawing}
          />
        </Switch>
      </Suspense>
    </div>
  );
};

export default Content;
