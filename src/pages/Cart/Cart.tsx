/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useContext, useEffect } from 'react';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
// scss
import './Cart.scss';
import { Link } from 'react-router-dom';
import { GlobalContextProvider } from 'src/Context/GlobalContext';
import Loading from 'src/components/Loading/Loading';
import ItemList from 'src/components/Item/ItemList';

const Cart = () => {
  const { loading, getSneakers, setIsViewAll, sneakers } = useContext(GlobalContextProvider);

  useEffect(() => {
    getSneakers();
    setIsViewAll(false);
  }, []);

  const [advertising, setAdvertising] = useState(true);
  const [size, setSize] = React.useState('36');
  const [quantity, setQuantity] = React.useState('1');

  const handleChangeSize = (event: SelectChangeEvent) => {
    setSize(event.target.value);
  };

  const handleChangeQuantity = (event: SelectChangeEvent) => {
    setQuantity(event.target.value);
  };

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
          <div className="text-start">
            <h3>Bag</h3>
            <div className="d-flex justify-content-between align-items-center">
              <img
                src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/c907dd24-bb56-4de8-af51-130318a6529f/air-max-sc-shoes-FVn5sK.png"
                alt=""
                width="150"
                height="150"
                className="image-fluid"
              />
              <div className="w-50">
                <h5>Nike Air Max SC</h5>
                <p>Women&apos; Shoes</p>
                <p>White/Magic Ember/Black</p>
                <div className="d-flex gap-3">
                  <FormControl size="small">
                    <InputLabel id="size">Size</InputLabel>
                    <Select
                      labelId="size"
                      id="demo-simple-select"
                      value={size}
                      label="Size"
                      onChange={handleChangeSize}
                    >
                      <MenuItem value={36}>36</MenuItem>
                      <MenuItem value={38}>38</MenuItem>
                      <MenuItem value={40}>40</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl size="small">
                    <InputLabel id="quantity">Quantity</InputLabel>
                    <Select
                      labelId="quantity"
                      id="demo-simple-select"
                      value={quantity}
                      label="Quantity"
                      onChange={handleChangeQuantity}
                    >
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={5}>5</MenuItem>
                      <MenuItem value={10}>10</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
              <p>2,189,000₫</p>
            </div>
            <hr />
          </div>
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
          <div className="overflow-auto">
            {loading ? (
              sneakers.length &&
              sneakers.map((sneaker, index) => (
                <div key={index} className="d-inline-block">
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
