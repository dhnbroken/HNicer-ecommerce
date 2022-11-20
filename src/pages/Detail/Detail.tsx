import React from 'react';
import { useLocation } from 'react-router-dom';
const Detail = () => {
  const location = useLocation();
  const { sneaker } = location.state;
  console.log(sneaker);
  return (
    <section className="contact_section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="img-box">
              <img src={sneaker.image} width='608' alt=""/>
            </div>
          </div>
          <div className="col-md-6">
            <h2>{sneaker.name}</h2>
            <h4>{`Price: ${sneaker.price}`}</h4>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Detail;
