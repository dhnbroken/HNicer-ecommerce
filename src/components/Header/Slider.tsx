import React from 'react';
import { Link } from 'react-router-dom';
import 'src/assets/css/styles.scss';
import './header.scss';

const Slider = () => {
  const slider = 'http://localhost:5000/images/PngItem_52854.png';

  return (
    <React.Fragment>
      <div id="myCarousel" className="carousel slide carousel-fade" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="mask flex-center">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-7 col-12 order-md-1 order-2">
                    <h4>Air Jordan 1 Retro High OG – Patent Bred</h4>
                    <p>
                      The Air Jordan 1 High Bred Patent features black and red patent leather upper with signature
                      weaved Nike Air tongue labels. From there, a classic Wings logo on the collar and a white with red
                      Air sole complete the retro design.
                    </p>
                    <br />
                    <Link to="/sneaker">BUY NOW</Link>
                  </div>
                  <div className="col-md-5 col-12 order-md-2 order-1">
                    <img src={slider} className="mx-auto mt-4" alt="slide" />
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
