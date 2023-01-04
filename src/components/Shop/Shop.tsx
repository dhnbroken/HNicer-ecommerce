/* eslint-disable indent */
import React, { useContext } from 'react';
import { GlobalContextProvider } from 'src/Context/GlobalContext';
import { Link } from 'react-router-dom';
import ItemList from '../Item/ItemList';

const Shop: React.FC = () => {
  const { sneakers, isViewAll, setIsViewAll } = useContext(GlobalContextProvider);

  const handleViewAll = () => {
    setIsViewAll(true);
  };

  return (
    <section className="shop_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>Latest Sneaker</h2>
        </div>
        <div className="row">
          {sneakers.length && !isViewAll
            ? sneakers.splice(0, 4).map((sneaker, index) => (
                <div className="col-md-6 col-xl-3" key={index}>
                  <ItemList sneaker={sneaker} />
                </div>
              ))
            : sneakers.map((sneaker, index) => (
                <div className="col-md-6 col-xl-3" key={index}>
                  <ItemList sneaker={sneaker} />
                </div>
              ))}
        </div>
        {!isViewAll && (
          <div className="btn-box">
            <button onClick={handleViewAll}>
              <Link to="/sneaker">View All</Link>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Shop;
