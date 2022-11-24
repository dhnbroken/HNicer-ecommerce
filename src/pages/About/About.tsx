import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="about_section layout_padding mb-5">
      <div className="container  ">
        <div className="row">
          <div className="col-md-6 col-lg-5 ">
            <div className="img-box">
              <img src='https://www.nicepng.com/png/full/29-292731_nike-shoes-png-nike-basketball-shoes-png.png' alt=""/>
            </div>
          </div>
          <div className="col-md-6 col-lg-7">
            <div className="detail-box">
              <div className="heading_container">
                <h2>
                About Us
                </h2>
              </div>
              <p>
              There are many variations of passages of sneakers available, but the majority have suffered alteration
              in some form, by injected humour, or randomised words which dont look even slightly believable. If you
              are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in
              the middle of text. All
              </p>
              <Link to="/about">
              Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
