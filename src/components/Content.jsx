import React, { Suspense, lazy, useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import UserContext from "./contexts/UserContext"


import '../styles/content.css';
import Loader from '../components/Loader';

const Content = () => {
  const { user } = useContext(UserContext)

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
  const PageNotFound = lazy(() => import('./PageNotFound'));

  return (
    <div className='content'>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/drawings' component={DrawingsList} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/drawing/:id' component={DrawingPage} />
          <Route exact path='/admin/login' component={Login} />
          {user && (<>
            <Route exact path='/admin/dashboard' component={Dashboard} />
            <Route exact path='/admin/create-drawing' component={CreateDrawing} />
            <Route
              exact
              path='/admin/update-drawing/:id'
              component={UpdateDrawing}
            />
            <Route exact path='/admin/create-tag' component={CreateTag} />
            <Route exact path='/admin/update-tag/:id' component={UpdateTag} /></>)}
          <Redirect to="/" />
          <Route component={PageNotFound} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default Content;
