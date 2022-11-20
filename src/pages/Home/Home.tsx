import Slider from 'src/components/Header/Slider';
import React, { useEffect, useContext } from 'react';
import 'src/assets/css/styles.scss';
import Social from 'src/components/Header/Social';
import Shop from 'src/components/Shop/Shop';
import { GlobalContextProvider } from 'src/Context/GlobalContext';
import About from '../About/About';
import Feature from 'src/components/Feature/Feature';
import Contact from '../Contact/Contact';
import Client from 'src/components/Client/Client';

const Home = () => {
  const { getSneakers, getClients, setIsViewAll } = useContext(GlobalContextProvider);

  useEffect(() => {
    getSneakers();
    getClients();
    setIsViewAll(false);
  }, []);

  return (
    <React.Fragment>
      <div className="hero_area">
        <Social />
        <Slider />
      </div>
      <Shop />
      <About />
      <Feature />
      <Contact />
      <Client />
    </React.Fragment>
  );
};

export default Home;
