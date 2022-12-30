import { ISneaker } from '@/store/interface';
import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  sneaker: ISneaker;
}
const ItemList: React.FC<Props> = (props) => {
  const { sneaker } = props;

  return (
    <div className="card p-3 mh-390 d-flex flex-column">
      <Link className="text-black text-decoration-none" to="/detail" state={{ sneaker }}>
        <div className="img-box">
          <img src={sneaker.image} className="w-100" alt={sneaker.name} />
        </div>
        <div className="detail-box">
          <h6>{sneaker.name}</h6>
          <div className="d-flex justify-content-between align-items-center">
            <h6>{`Price: ${sneaker.price}`}</h6>
          </div>
        </div>
        <div className="new">
          <span>Featured</span>
        </div>
      </Link>
    </div>
  );
};

export default ItemList;
