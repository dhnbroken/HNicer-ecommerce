import React, { useContext, useEffect } from 'react';
import { GlobalContextProvider } from 'src/Context/GlobalContext';
import Shop from 'src/components/Shop/Shop';
import Loading from 'src/components/Loading/Loading';
import { useNavigate } from 'react-router-dom';

const Sneaker = () => {
  const { getSneakers, setIsViewAll, setLoading, loading, getUserInfo, userInfo } = useContext(GlobalContextProvider);
  const navigate = useNavigate();
  useEffect(() => {
    setLoading(false);
    getSneakers();
    setIsViewAll(true);
    getUserInfo();
  }, []);

  const handleAddSneaker = () => {
    navigate('/sneaker/add');
  };

  return (
    <React.Fragment>
      {userInfo.isAdmin ? (
        <div className="container text-center mt-3">
          <button className="btn btn-outline-danger" onClick={handleAddSneaker}>
            Add sneaker
          </button>
        </div>
      ) : null}
      {loading ? <Shop /> : <Loading />}
    </React.Fragment>
  );
};

export default Sneaker;
