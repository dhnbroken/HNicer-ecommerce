/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useContext, useEffect } from 'react';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
// scss
import './Cart.scss';
import { Link } from 'react-router-dom';
import { GlobalContextProvider } from 'src/Context/GlobalContext';
import Loading from 'src/components/Loading/Loading';
import ItemList from 'src/components/Item/ItemList';
import CartItems from 'src/components/CartItems/CartItems';

const Cart = () => {
  const { loading, getSneakers, setIsViewAll, sneakers } = useContext(GlobalContextProvider);

  useEffect(() => {
    getSneakers();
    setIsViewAll(false);
  }, []);

  const [advertising, setAdvertising] = useState(true);
  return (
    <div className="my-5 container text-center">
      <div className="row">
        <div className="col-8">
          {advertising ? (
            <div className="bg-custom d-flex justify-content-between align-items-center py-1 px-3 mb-3">
              <div className="text-start">
                <p className="mb-1">FREE DELIVERY</p>
                <p className="mb-1">Applies to orders of 5.000.000₫ or more. View details.</p>
              </div>
              <button className="btn-close float-end" onClick={() => setAdvertising(false)}></button>
            </div>
          ) : null}
          <CartItems />
        </div>
        <div className="col-4">
          <div className="text-start">
            <h3>Summary</h3>
            <div className="w-100 d-flex justify-content-between">
              <p>Subtotal</p>
              <p className="text-end">3,519,000₫</p>
            </div>
            <div className="w-100 d-flex justify-content-between">
              <p>Estimated Delivery & Handling</p>
              <p className="text-end">250,000₫</p>
            </div>
            <hr />
            <div className="w-100 d-flex justify-content-between">
              <p>Total</p>
              <p className="text-end">3,769,000₫</p>
            </div>
            <hr />
            <button className="w-100 btn btn-dark rounded-pill py-3 px-4">Guest Checkout</button>
            <button className="w-100 btn btn-dark rounded-pill py-3 px-4 mt-3">Member Checkout</button>
          </div>
        </div>
        <div className="text-start mt-5">
          <h3>Favourites</h3>
          <p>
            Want to view your favourites?{' '}
            <Link to="/login" className="text-black">
              Join us
            </Link>{' '}
            or{' '}
            <Link to="/login" className="text-black">
              Sign in
            </Link>
          </p>
        </div>
        <div className="text-start mt-5">
          <h3>You Might Also Like</h3>
          <div className="overflow-auto text-nowrap">
            {loading ? (
              sneakers.length &&
              sneakers.slice(0, 7).map((sneaker, index) => (
                <div key={index} className="w-25 d-inline-block p-2 text-wrap">
                  <ItemList sneaker={sneaker} />
                </div>
              ))
            ) : (
              <Loading />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
