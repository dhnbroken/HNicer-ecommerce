import Loading from 'src/components/Loading/Loading';
import { GlobalContextProvider } from 'src/Context/GlobalContext';
import React from 'react';
import { getAllClothes } from 'src/Service/clothes-service';

import './Clothes.scss';

interface IClothes {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const Clothes = () => {
  const [clothes, setClothes] = React.useState<IClothes[]>([]);
  const { loading, setLoading } = React.useContext(GlobalContextProvider);

  const getClothes = async () => {
    try {
      const res = await getAllClothes();
      setClothes(res);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    setLoading(true);
    getClothes();
  }, []);

  console.log(clothes);

  return (
    <React.Fragment>
      {loading ? (
        <Loading />
      ) : (
        <div className="p-5 pe-0 m-3 d-flex gap-5 flex-wrap">
          {clothes.length &&
            clothes.map((cloth) => (
              <div key={cloth.id} className="card w-30 rounded-0">
                <img src={cloth.image} height="420" className="card-img-top p-5 image-fluid" alt="..." />
                <div className="card-body d-flex flex-column gap-2">
                  <h5 className="card-title h-50 text-danger">{cloth.title}</h5>
                  <p className="card-text h-25 text-secondary">{`${cloth.description.slice(0, 100)}... `}</p>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <p className="card-text">{`$ ${cloth.price}`}</p>
                    <button className="btn btn-outline-danger">Add to cart</button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}
    </React.Fragment>
  );
};

export default Clothes;
