/* eslint-disable @typescript-eslint/no-unused-vars */
import { ICart } from 'src/store/interface';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { deleteCart, updateCart } from 'src/API/cart-service';
import { GlobalContextProvider } from 'src/Context/GlobalContext';

interface Props {
  cartItem: ICart;
  handleRemoveCartItem: Function;
  index: number;
  change: boolean;
  setChange: Function;
}

const CartItems: React.FC<Props> = (props) => {
  const serverPublic = 'http://localhost:5000/images/';
  const { cartItem, handleRemoveCartItem, index, change, setChange } = props;
  const { setLoading } = useContext(GlobalContextProvider);
  const [size, setSize] = React.useState(cartItem.productSize.toString());
  const [quantity, setQuantity] = React.useState(cartItem.quantity.toString());
  const [price, setPrice] = React.useState(cartItem.productPrice);

  const updateUserCart = async (id: string | undefined, data: ICart) => {
    try {
      await updateCart(id, data);
      setLoading(true);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChangeSize = async (event: SelectChangeEvent, cart: ICart) => {
    await updateUserCart(cart._id, { ...cart, productSize: Number(event.target.value) });
    setChange(!change);
    setSize(event.target.value);
  };

  const handleChangeQuantity = async (event: SelectChangeEvent) => {
    await updateUserCart(cartItem._id, { ...cartItem, quantity: Number(event.target.value) });
    setChange(!change);
    setQuantity(event.target.value);
  };

  useEffect(() => {
    setPrice(cartItem.productPrice * Number(quantity));
  }, [quantity]);

  return (
    <React.Fragment>
      {cartItem && (
        <div className="text-start">
          <div className="d-flex justify-content-between align-items-center">
            <img src={serverPublic + cartItem.productImage} alt="" width="150" height="150" className="image-fluid" />
            <div className="w-50">
              <h5>{cartItem.productName}</h5>
              <div className="d-flex gap-3">
                <FormControl size="small">
                  <InputLabel id="size">Size</InputLabel>
                  <Select
                    labelId="size"
                    id="demo-simple-select"
                    value={size}
                    defaultValue={cartItem.productSize.toString()}
                    label="Size"
                    onChange={async (e) => await handleChangeSize(e, cartItem)}
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
                    defaultValue={cartItem.quantity.toString()}
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
            <button className="btn btn-outline-danger" onClick={() => handleRemoveCartItem(cartItem, index)}>
              Remove Item
            </button>
          </div>
          <hr />
        </div>
      )}
    </React.Fragment>
  );
};

export default CartItems;
