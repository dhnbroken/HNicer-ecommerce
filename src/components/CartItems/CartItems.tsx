/* eslint-disable @typescript-eslint/no-unused-vars */
import { ICart } from 'src/store/interface';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { deleteCart, updateCart } from 'src/API/cart-service';
import { GlobalContextProvider } from 'src/Context/GlobalContext';

interface Props {
  cart: ICart;
  getUserCart: Function;
}

const CartItems: React.FC<Props> = (props) => {
  const serverPublic = 'http://localhost:5000/images/';
  const { cart, getUserCart } = props;
  const { removeCartItem } = useContext(GlobalContextProvider);
  const [size, setSize] = React.useState(cart.productSize.toString());
  const [quantity, setQuantity] = React.useState(cart.quantity.toString());
  const [price, setPrice] = React.useState(cart.productPrice);

  const updateUserCart = async (id: string | undefined, data: ICart) => {
    try {
      const res = updateCart(id, data);
    } catch (err) {
      console.log(err);
    }
  };
  const handleChangeSize = (event: SelectChangeEvent, cart: ICart) => {
    updateUserCart(cart._id, { ...cart, productSize: Number(event.target.value) });
    setSize(event.target.value);
  };

  const handleChangeQuantity = async (event: SelectChangeEvent) => {
    await updateUserCart(cart._id, { ...cart, quantity: Number(event.target.value) });
    setQuantity(event.target.value);
  };

  useEffect(() => {
    setPrice(cart.productPrice * Number(quantity));
  }, [quantity]);

  const handleRemoveCartItem = (cart: ICart) => {
    if (cart._id) {
      removeCartItem(cart._id);
    }
  };
  return (
    <div className="text-start">
      <h3>Bag</h3>
      <div className="d-flex justify-content-between align-items-center">
        <img src={serverPublic + cart.productImage} alt="" width="150" height="150" className="image-fluid" />
        <div className="w-50">
          <h5>{cart.productName}</h5>
          <div className="d-flex gap-3">
            <FormControl size="small">
              <InputLabel id="size">Size</InputLabel>
              <Select
                labelId="size"
                id="demo-simple-select"
                value={size}
                defaultValue={cart.productSize.toString()}
                label="Size"
                onChange={(e) => handleChangeSize(e, cart)}
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
                defaultValue={cart.quantity.toString()}
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
        <p className="w-15">{`$${price}`}</p>
        <button className="btn btn-outline-danger" onClick={() => handleRemoveCartItem(cart)}>
          Remove Item
        </button>
      </div>
      <hr />
    </div>
  );
};

export default CartItems;
