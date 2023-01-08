/* eslint-disable indent */
import React, { useContext, useEffect, useState } from 'react';
import { GlobalContextProvider } from 'src/Context/GlobalContext';
import { Link } from 'react-router-dom';
import ItemList from '../Item/ItemList';
import { FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import Loading from '../Loading/Loading';

const Shop: React.FC = () => {
  const { sneakers, isViewAll, setIsViewAll, getSneakers, loading } = useContext(GlobalContextProvider);

  useEffect(() => {
    getSneakers();
  }, []);

  const [search, setSearch] = useState('');
  const [sort, setSort] = useState(1);

  const handleChange = async (event: SelectChangeEvent) => {
    setSort(Number(event.target.value));
    switch (Number(event.target.value)) {
      case 1:
        {
          getSneakers();
        }
        break;
      case 2:
        {
          sneakers.sort((a, b) => a.price - b.price);
        }
        break;
      case 3:
        {
          sneakers.sort((a, b) => b.price - a.price);
        }
        break;
      default:
        break;
    }
  };

  const handleViewAll = () => {
    setIsViewAll(true);
  };

  return (
    <React.Fragment>
      {!loading ? (
        <Loading />
      ) : (
        <section className="shop_section layout_padding">
          <div className="container">
            <div className="heading_container heading_center">
              <h2>Latest Sneaker</h2>
            </div>
            {isViewAll && (
              <div className="mb-4">
                <Grid container className="justify-content-between">
                  <Grid xs={7}>
                    <TextField
                      fullWidth
                      id="outlined-basic"
                      label="Search sneaker"
                      onChange={(e) => setSearch(e.target.value)}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid xs={4}>
                    <FormControl className="w-75">
                      <InputLabel id="demo-simple-select-label">Sort</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={sort.toString()}
                        label="Age"
                        onChange={handleChange}
                      >
                        <MenuItem value={1}>Default</MenuItem>
                        <MenuItem value={2}>Price: Low - High</MenuItem>
                        <MenuItem value={3}>Price: High - low</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </div>
            )}
            <div className="row">
              {sneakers.length && !isViewAll
                ? sneakers.splice(0, 4).map((sneaker, index) => (
                    <div className="col-md-6 col-xl-3" key={index}>
                      <ItemList sneaker={sneaker} />
                    </div>
                  ))
                : sneakers
                    .filter((sneaker) => sneaker.name.toLowerCase().includes(search))
                    .map((sneaker, index) => (
                      <div className="col-md-6 col-xl-3" key={index}>
                        <ItemList sneaker={sneaker} />
                      </div>
                    ))}
            </div>
            {!isViewAll && (
              <div className="btn-box">
                <button onClick={handleViewAll}>
                  <Link to="/sneaker">View All</Link>
                </button>
              </div>
            )}
          </div>
        </section>
      )}
    </React.Fragment>
  );
};

export default Shop;
