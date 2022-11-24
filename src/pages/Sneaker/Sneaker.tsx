import React, { useContext, useEffect } from 'react';
import { GlobalContextProvider } from 'src/Context/GlobalContext';
import Shop from 'src/components/Shop/Shop';
import Loading from 'src/components/Loading/Loading';

const Sneaker = () => {
  const { getSneakers, setIsViewAll, setLoading, loading } = useContext(GlobalContextProvider);

  useEffect(() => {
    getSneakers();
    setIsViewAll(true);
    setLoading(false);
  }, []);

  return <React.Fragment>{loading ? <Shop /> : <Loading />}</React.Fragment>;
};

export default Sneaker;
