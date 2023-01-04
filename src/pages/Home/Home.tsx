import Slider from 'src/components/Header/Slider';
import React, { useEffect, useContext } from 'react';
import 'src/assets/css/styles.scss';
import Social from 'src/components/Header/Social';
import Shop from 'src/components/Shop/Shop';
import { GlobalContextProvider } from 'src/Context/GlobalContext';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Client from 'src/components/Client/Client';
import Loading from 'src/components/Loading/Loading';

const Home = () => {
  const { getSneakers, getClients, setIsViewAll, loading, setLoading } = useContext(GlobalContextProvider);

  useEffect(() => {
    getSneakers();
    getClients();
    setIsViewAll(false);
    setLoading(false);
  }, []);

  return (
    <React.Fragment>
      {loading ? (
        <React.Fragment>
          <div className="hero_area">
            <Social />
            <Slider />
          </div>
          <Shop />
          <About />
          <Contact />
          <Client />
        </React.Fragment>
      ) : (
        <Loading />
      )}
    </React.Fragment>
  );
};

export default Home;
