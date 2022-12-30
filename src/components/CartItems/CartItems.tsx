import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React from 'react';

const CartItems = () => {
  const [size, setSize] = React.useState('36');
  const [quantity, setQuantity] = React.useState('1');

  const handleChangeSize = (event: SelectChangeEvent) => {
    setSize(event.target.value);
  };

  const handleChangeQuantity = (event: SelectChangeEvent) => {
    setQuantity(event.target.value);
  };

  return (
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
              <Select labelId="size" id="demo-simple-select" value={size} label="Size" onChange={handleChangeSize}>
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
  );
};

export default CartItems;
