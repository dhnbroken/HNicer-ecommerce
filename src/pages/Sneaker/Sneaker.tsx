import React, { useContext, useEffect } from 'react';
import { GlobalContextProvider } from 'src/Context/GlobalContext';
import Shop from 'src/components/Shop/Shop';
import Loading from 'src/components/Loading/Loading';
import { useNavigate } from 'react-router-dom';
import { ISneaker } from 'src/store/interface';

const Sneaker = () => {
  const { getSneakers, setIsViewAll, setLoading, loading, getUserInfo, userInfo, setSneakerInfo, setIsEdit } =
    useContext(GlobalContextProvider);
  const navigate = useNavigate();
  useEffect(() => {
    setLoading(false);
    getSneakers();
    setIsViewAll(true);
    getUserInfo();
  }, []);
  const sneaker: ISneaker = {
    _id: '',
    name: '',
    price: 0,
    image: 'dfshoes.png',
    description: ''
  };

  const handleAddSneaker = () => {
    setIsEdit(false);
    setSneakerInfo(sneaker);
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
