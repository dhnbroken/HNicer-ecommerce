import React from 'react';

const Feature = () => {
  return (
    <section className="feature_section layout_padding">
      <div className="container">
        <div className="heading_container">
          <h2>
          Features Of Our Watches
          </h2>
          <p>
          Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="row">
          <div className="col-sm-6 col-lg-3">
            <div className="box">
              <div className="img-box">
                <img src="images/f1.png" alt=""/>
              </div>
              <div className="detail-box">
                <h5>
                Fitness Tracking
                </h5>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                </p>
                <a href="">
                  <span>
                  Read More
                  </span>
                  <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="box">
              <div className="img-box">
                <img src="images/f2.png" alt=""/>
              </div>
              <div className="detail-box">
                <h5>
                Alerts & Notifications
                </h5>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                </p>
                <a href="">
                  <span>
                  Read More
                  </span>
                  <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="box">
              <div className="img-box">
                <img src="images/f3.png" alt=""/>
              </div>
              <div className="detail-box">
                <h5>
                Messages
                </h5>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                </p>
                <a href="">
                  <span>
                  Read More
                  </span>
                  <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="box">
              <div className="img-box">
                <img src="images/f4.png" alt=""/>
              </div>
              <div className="detail-box">
                <h5>
                Bluetooth
                </h5>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                </p>
                <a href="">
                  <span>
                  Read More
                  </span>
                  <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="btn-box">
          <a href="">
          View More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Feature;
