import React, { Suspense } from 'react';
import '../styles/main.css';
import Footer from './Footer';
import Navigation from './Navigation';
import Content from './Content';
import Loader from '../components/Loader';

const Main = () => {
  return (
    <article className='main'>
      <Navigation />
      <Content />
      <Footer />
    </article>
  );
};

export default Main;
