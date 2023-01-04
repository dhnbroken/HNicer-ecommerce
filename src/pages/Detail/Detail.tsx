/* eslint-disable @typescript-eslint/no-unused-vars */
import { toastMsg } from 'src/store/toast';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ICart, ISneaker } from 'src/store/interface';
import { GlobalContextProvider } from 'src/Context/GlobalContext';
import { addToCart } from 'src/API/cart-service';
import { removeShoes } from 'src/API/sneaker-service';

const Detail = () => {
  const serverPublic = 'http://localhost:5000/images/';

  const location = useLocation();
  const navigate = useNavigate();
  const { sneaker } = location.state;

  const { cart, setCart, userInfo } = React.useContext(GlobalContextProvider);
  const userId = sessionStorage.getItem('userId');

  const addProductToCart = async (data: ICart) => {
    try {
      const res = await addToCart(data);
      const newCartItems = [...cart, res];
      setCart(newCartItems);
    } catch (err) {
      console.log(err);
    }
  };
  const handleRemoveSneaker = async (sneaker: ISneaker) => {
    await removeShoes(sneaker._id).then(() => navigate('/sneaker'));
  };
  const handleAddCart = (sneaker: ISneaker) => {
    if (userId) {
      const productData: ICart = {
        userId,
        productId: sneaker._id,
        productImage: sneaker.image,
        productName: sneaker.name,
        productTags: 'Shoes',
        productPrice: sneaker.price,
        productSize: 36,
        quantity: 1
      };
      addProductToCart(productData);
    }
  };
  return (
    <section className="contact_section my-4 p-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="img-box">
              <img src={serverPublic + sneaker.image} width="608" alt="" />
            </div>
          </div>
          <div className="col-md-6">
            <div>
              <h2>{sneaker.name}</h2>
              <h4>{`Price: ${sneaker.price}`}</h4>
              <p>{sneaker.description}</p>
            </div>
            <div>
              <button
                className="btn btn-outline-danger"
                onClick={() => (userInfo.isAdmin ? handleRemoveSneaker(sneaker) : handleAddCart(sneaker))}
              >
                {userInfo.isAdmin ? 'Remove Sneaker' : 'Add to Cart'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detail;
