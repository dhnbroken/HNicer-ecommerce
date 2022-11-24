import React from 'react';
import { Link } from 'react-router-dom';
import 'src/assets/css/styles.scss';
import './header.scss';

const Slider = () => {
  const slider = 'https://www.nicepng.com/png/full/253-2538656_puma-1948-mid-gtx-jr-black-toreador-white.png';

  return (
    <React.Fragment>
      <div id="myCarousel" className="carousel slide carousel-fade" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="mask flex-center">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-7 col-12 order-md-1 order-2">
                    <h4>Puma 1948 MID GORE-TEX</h4>
                    <p>
                      Combining PUMA Formstrip heritage with performance making, these classic and sporty 1948 Mid
                      Winter Shoes Gore Tex in Black from Puma will keep little feet warm and dry during the cooler
                      months.
                    </p>
                    <br />
                    <Link to="/sneaker">BUY NOW</Link>
                  </div>
                  <div className="col-md-5 col-12 order-md-2 order-1">
                    <img src={slider} className="mx-auto" alt="slide" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Slider;
