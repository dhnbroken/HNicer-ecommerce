/* eslint-disable indent */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import { styled } from '@mui/material/styles';
import {
  TextField,
  Box,
  Paper,
  Grid,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent
} from '@mui/material';
import { GlobalContextProvider } from 'src/Context/GlobalContext';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { IBillData, ICart } from 'src/store/interface';
import { createBill } from 'src/API/bill-service';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}));

const schema = yup
  .object({
    firstname: yup.string().required(),
    lastname: yup.string().required(),
    addressLine1: yup.string().required(),
    addressLine2: yup.string(),
    city: yup.string().required(),
    email: yup.string().email(),
    phoneNumber: yup.string().required()
  })
  .required();

const Checkout = () => {
  const { userInfo, cart, getUserCart } = React.useContext(GlobalContextProvider);
  const [city, setCity] = React.useState('HCM');
  const shipFee = 10;

  React.useEffect(() => {
    getUserCart();
  }, []);

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<IBillData>({
    resolver: yupResolver(schema)
  });

  const handleChange = (event: SelectChangeEvent) => {
    setCity(event.target.value);
  };

  const cartPrice = React.useMemo(
    () =>
      cart.reduce(
        (previousValue, currentValue) => previousValue + currentValue.productPrice * currentValue.quantity,
        0
      ),
    [cart]
  );

  const totalPrice = React.useMemo(() => cartPrice + shipFee, [cartPrice]);

  const createNewBill = async (data: IBillData) => {
    try {
      const res = await createBill(data);
      return res;
    } catch (err) {
      console.log(err);
    }
  };

  const formSubmitHandler: SubmitHandler<IBillData> = (data: IBillData) => {
    data = { ...data, phoneNumber: '+84' + data.phoneNumber, cart, totalPrice };
    console.log(data);
    createNewBill(data);
  };

  return (
    <Box className="container">
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <form className="d-flex flex-column gap-4 mt-2 mb-4" onSubmit={handleSubmit(formSubmitHandler)}>
            <h4>Enter your name and address:</h4>
            <TextField
              label="First Name"
              fullWidth
              defaultValue={userInfo.firstname}
              variant="outlined"
              {...register('firstname')}
            />
            <TextField
              label="Last Name"
              fullWidth
              defaultValue={userInfo.lastname}
              variant="outlined"
              {...register('lastname')}
            />
            <TextField label="Address line 1" fullWidth variant="outlined" {...register('addressLine1')} />
            <TextField label="Address line 2" fullWidth variant="outlined" {...register('addressLine2')} />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">City</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={city}
                label="Age"
                {...register('city')}
                onChange={handleChange}
              >
                <MenuItem value="HCM">TP.HCM</MenuItem>
                <MenuItem value="DN">Da Nang</MenuItem>
                <MenuItem value="HN">Ha Noi</MenuItem>
              </Select>
            </FormControl>
            <h4>What is your contact information?</h4>
            <TextField label="Email" fullWidth variant="outlined" {...register('email')} />
            <TextField label="Phone number" fullWidth variant="outlined" {...register('phoneNumber')} />

            <button type="submit" className="w-100 btn btn-dark rounded-pill py-3 px-4">
              Checkout
            </button>
          </form>
        </Grid>
        <Grid item xs={6} className="p-5 pt-2 mt-2">
          <div className="text-start">
            <h3>Summary</h3>
            <div className="w-100 d-flex justify-content-between">
              <p>Subtotal</p>
              <p className="text-end">{`$${cartPrice}`}</p>
            </div>
            <div className="w-100 d-flex justify-content-between">
              <p>Estimated Delivery & Handling</p>
              <p className="text-end">{shipFee}</p>
            </div>
            <hr />
            <div className="w-100 d-flex justify-content-between">
              <p>Total</p>
              <p className="text-end">{`$${totalPrice}`}</p>
            </div>
            <hr />
            <h5>Arrive after 5-7 days</h5>
            {cart.length
              ? cart.map((cart) => (
                  <div key={cart._id} className="d-flex align-items-center gap-3 mb-2">
                    <img src={`http://localhost:5000/images/${cart.productImage}`} alt="" width={90} />
                    <div>
                      <p className="mb-0">{cart.productName}</p>
                      <p className="mb-0">{`Size: ${cart.productSize}`}</p>
                      <p className="mb-0">{`Quantity: ${cart.quantity}`}</p>
                    </div>
                  </div>
                ))
              : null}
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Checkout;
