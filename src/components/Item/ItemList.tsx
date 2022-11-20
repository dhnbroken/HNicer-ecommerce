import { ISneaker } from '@/store/interface';
import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  sneaker: ISneaker
}
const ItemList: React.FC<Props> = (props) => {
  const { sneaker } = props;
  return (
    <div className="box">
      <Link to="/detail" state={{ sneaker }}>
        <div className="img-box">
          <img src={sneaker.image} alt=""/>
        </div>
        <div className="detail-box">
          <h6>{sneaker.name}</h6>
          <h6>
            {`Price: ${sneaker.price}`}
          </h6>
        </div>
        <div className="new">
          <span>
            Featured
          </span>
        </div>
      </Link>
    </div>
  );
};

export default ItemList;
