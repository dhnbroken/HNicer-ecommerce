/* eslint-disable @typescript-eslint/no-unused-vars */
import Slider from 'src/components/Header/Slider';
import React, { useEffect, useState } from 'react';
import 'src/assets/css/styles.scss';
import Social from 'src/components/Header/Social';
import Shop from 'src/components/Shop/Shop';
import { ISneaker } from 'src/store/interface';
import { getAllSneaker } from 'src/Service/sneaker-service';

const Home = () => {
  const [sneakers, setSneakers] = useState<ISneaker[]>([]);

  const getSneakers = async () => {
    try {
      const res = await getAllSneaker();
      setSneakers(res);
    } catch (err) {}
  };

  useEffect(() => {
    getSneakers();
  }, []);

  console.log(sneakers);

  return (
    <React.Fragment>
      <div className="hero_area">
        <Social />
        <Slider />
      </div>
      <Shop />
    </React.Fragment>
  );
};

export default Home;
