import '../styles/main.css';
import Footer from './Footer';
import Navigation from './Navigation';
import Content from './Content';
import UserContextProvider from './contexts/UserContextProvider';

const Main = () => {
  return (
    <article className='main'>
      <UserContextProvider>
        <Navigation />
        <Content />
        <Footer />
      </UserContextProvider>
    </article>
  );
};

export default Main;
