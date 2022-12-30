import { toastMsg } from 'src/store/toast';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ISneaker } from '@/store/interface';
const Detail = () => {
  const location = useLocation();
  const { sneaker } = location.state;

  const [cartItems, setCartItems] = useState<ISneaker[]>([]);

  const handleAddCart = (sneaker: ISneaker) => {
    toast.success('Add to cart successfully', toastMsg);
    const newCartItems = [...cartItems, sneaker];
    setCartItems(newCartItems);
  };
  console.log(cartItems);
  return (
    <section className="contact_section my-4 p-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="img-box">
              <img src={sneaker.image} width="608" alt="" />
            </div>
          </div>
          <div className="col-md-6">
            <div>
              <h2>{sneaker.name}</h2>
              <h4>{`Price: ${sneaker.price}`}</h4>
              <p>{sneaker.description}</p>
            </div>
            <div>
              <button className="btn btn-outline-danger" onClick={() => handleAddCart(sneaker)}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detail;
