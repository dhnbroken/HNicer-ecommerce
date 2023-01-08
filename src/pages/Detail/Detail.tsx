import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ICart, ISneaker } from 'src/store/interface';
import { GlobalContextProvider } from 'src/Context/GlobalContext';
import { addToCart } from 'src/API/cart-service';
import { removeShoes } from 'src/API/sneaker-service';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';

const Detail = () => {
  const serverPublic = 'http://localhost:5000/images/';

  const location = useLocation();
  const navigate = useNavigate();
  const { sneaker } = location.state;

  const { cart, setCart, userInfo, setIsEdit, setSneakerInfo } = React.useContext(GlobalContextProvider);
  const userId = sessionStorage.getItem('userId');

  const [size, setSize] = React.useState('36');
  const [quantity, setQuantity] = React.useState('1');

  const addProductToCart = async (data: ICart) => {
    try {
      const res = await addToCart(data);
      const newCartItems = [...cart, res];
      setCart(newCartItems);
    } catch (err) {}
  };
  const handleRemoveSneaker = async (sneaker: ISneaker) => {
    await removeShoes(sneaker._id).then(() => navigate('/sneaker'));
  };

  const handleChangeSize = (event: SelectChangeEvent) => {
    setSize(event.target.value);
  };

  const handleChangeQuantity = async (event: SelectChangeEvent) => {
    setQuantity(event.target.value);
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
        productSize: Number(size),
        quantity: Number(quantity)
      };
      addProductToCart(productData);
      navigate('/sneaker');
    }
  };

  const handleEditShoes = () => {
    setIsEdit(true);
    setSneakerInfo(sneaker);
    navigate('/sneaker/add');
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
              <FormControl size="small">
                <InputLabel id="size">Size</InputLabel>
                <Select
                  labelId="size"
                  id="demo-simple-select"
                  value={size}
                  defaultValue={'36'}
                  label="Size"
                  onChange={(e) => handleChangeSize(e)}
                >
                  <MenuItem value={36}>36</MenuItem>
                  <MenuItem value={38}>38</MenuItem>
                  <MenuItem value={40}>40</MenuItem>
                </Select>
              </FormControl>
              <FormControl className="ms-4" size="small">
                <InputLabel id="quantity">Quantity</InputLabel>
                <Select
                  labelId="quantity"
                  id="demo-simple-select"
                  value={quantity}
                  defaultValue={'1'}
                  label="Quantity"
                  onChange={handleChangeQuantity}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={10}>10</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div>
              <button
                className="btn btn-outline-danger"
                onClick={() => (userInfo.isAdmin ? handleRemoveSneaker(sneaker) : handleAddCart(sneaker))}
              >
                {userInfo.isAdmin ? 'Remove Sneaker' : 'Add to Cart'}
              </button>
            </div>
            {userInfo.isAdmin && (
              <button className="btn btn-outline-danger" onClick={() => handleEditShoes()}>
                Edit
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detail;
