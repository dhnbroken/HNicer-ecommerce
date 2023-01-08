import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContextProvider } from 'src/Context/GlobalContext';
import Loading from 'src/components/Loading/Loading';
import ItemList from 'src/components/Item/ItemList';
import CartItems from 'src/components/CartItems/CartItems';
import { toast } from 'react-toastify';
import { toastMsg } from 'src/store/toast';

import './Cart.scss';
import { ICart } from 'src/store/interface';

const Cart = () => {
  const { loading, getSneakers, sneakers, cart, getUserCart, setLoading, removeCartItem } =
    useContext(GlobalContextProvider);
  const [shipFee, setShipFee] = useState(0);
  const [change, setChange] = React.useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(false);
    getSneakers();
  }, []);

  useEffect(() => {
    getUserCart();
  }, [change]);

  const cartPrice = React.useMemo(
    () =>
      cart.reduce(
        (previousValue, currentValue) => previousValue + currentValue?.productPrice * currentValue?.quantity,
        0
      ),
    [cart]
  );

  const handleRemoveCartItem = (cartItem: ICart, index: number) => {
    if (cartItem._id) {
      removeCartItem(cartItem._id);
    }
  };

  const totalPrice = React.useMemo(() => {
    return cartPrice + shipFee;
  }, [cartPrice, shipFee]);

  useEffect(() => {
    cart.length ? setShipFee(10) : setShipFee(0);
    if (totalPrice > 500) {
      setShipFee(0);
    }
  }, [totalPrice]);

  const [advertising, setAdvertising] = useState(true);
  return (
    <React.Fragment>
      {!loading ? (
        <Loading />
      ) : (
        <div className="my-5 container text-center">
          <div className="row">
            <div className="col-lg-8 col-sm-12 col-12">
              {advertising ? (
                <div className="bg-custom d-flex justify-content-between align-items-center py-1 px-3 mb-3">
                  <div className="text-start">
                    <p className="mb-1">FREE DELIVERY</p>
                    <p className="mb-1">Applies to orders of $500 or more. View details.</p>
                  </div>
                  <button className="btn-close float-end" onClick={() => setAdvertising(false)}></button>
                </div>
              ) : null}
              <h3>Bags</h3>
              {cart.length ? (
                cart.map(
                  (cartItem, index) =>
                    typeof cartItem !== 'undefined' && (
                      <CartItems
                        key={index}
                        cartItem={cartItem}
                        handleRemoveCartItem={handleRemoveCartItem}
                        index={index}
                        change={change}
                        setChange={setChange}
                      />
                    )
                )
              ) : (
                <div>Your cart is empty</div>
              )}
            </div>
            <div className="col-lg-4 col-sm-12 col-12">
              <div className="text-start">
                <h3>Summary</h3>
                <div className="w-100 d-flex justify-content-between">
                  <p>Subtotal</p>
                  <p className="text-end">{`$${cartPrice}`}</p>
                </div>
                <div className="w-100 d-flex justify-content-between">
                  <p>Estimated Delivery & Handling</p>
                  <p className="text-end">{`$${shipFee}`}</p>
                </div>
                <hr />
                <div className="w-100 d-flex justify-content-between">
                  <p>Total</p>
                  <p className="text-end">{`$${totalPrice}`}</p>
                </div>
                <hr />
                <button
                  className="w-100 btn btn-dark rounded-pill py-3 px-4"
                  onClick={() => {
                    !cart.length
                      ? toast.warning('Cart empty', toastMsg)
                      : navigate('/checkout', { state: { cartPrice, shipFee, totalPrice } });
                  }}
                >
                  Checkout
                </button>
              </div>
            </div>

            <div className="text-start mt-5 d-none d-md-block">
              <h3>You Might Also Like</h3>
              <div className="overflow-auto text-nowrap d-md-flex flex-wrap d-lg-block">
                {!loading ? (
                  <Loading />
                ) : (
                  sneakers.length &&
                  sneakers.slice(0, 7).map((sneaker, index) => (
                    <div key={index} className="w-25 d-inline-block p-2 text-wrap">
                      <ItemList sneaker={sneaker} />
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Cart;
