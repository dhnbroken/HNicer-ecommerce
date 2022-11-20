import React from 'react';
import { Link } from 'react-router-dom';

const Slider = () => {
  return (
    <section className="slider_section ">
      <div id="customCarousel1" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container-fluid ">
              <div className="row">
                <div className="col-md-6">
                  <div className="detail-box">
                    <h1>
                      Sneaker
                    </h1>
                    <p>
                      Select your sneaker fit with your style
                    </p>
                    <div className="btn-box">
                      <Link to="/contact" className="btn1">
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="img-box">
                    <img src="src/assets/img/slider1.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item ">
            <div className="container-fluid ">
              <div className="row">
                <div className="col-md-6">
                  <div className="detail-box">
                    <h1>
                      Sneaker
                    </h1>
                    <p>
                      Select your sneaker fit with your style
                    </p>
                    <div className="btn-box">
                      <Link to="/contact" className="btn1">
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="img-box">
                    <img src="src/assets/img/slider2.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item ">
            <div className="container-fluid ">
              <div className="row">
                <div className="col-md-6">
                  <div className="detail-box">
                    <h1>
                      Sneaker
                    </h1>
                    <p>
                      Select your sneaker fit with your style
                    </p>
                    <div className="btn-box">
                      <Link to="/contact" className="btn1">
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="img-box">
                    <img src="src/assets/img/slider3.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ol className="carousel-indicators">
          <li data-target="#customCarousel1" data-slide-to="0" className="active"></li>
          <li data-target="#customCarousel1" data-slide-to="1"></li>
          <li data-target="#customCarousel1" data-slide-to="2"></li>
        </ol>
      </div>

    </section>
  );
};

export default Slider;
