import React, { useContext, useEffect } from 'react';
import { GlobalContextProvider } from 'src/Context/GlobalContext';
import Shop from 'src/components/Shop/Shop';

const Sneaker = () => {
  const { getSneakers, setIsViewAll } = useContext(GlobalContextProvider);

  useEffect(() => {
    getSneakers();
    setIsViewAll(true);
  }, []);

  return (
    <React.Fragment>
      <Shop />
    </React.Fragment>
  );
};

export default Sneaker;
