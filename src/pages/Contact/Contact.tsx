import React from 'react';

const Contact = () => {
  return (
    <section className="contact_section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="form_container">
              <div className="heading_container">
                <h2>
                Contact Us
                </h2>
              </div>
              <form action="">
                <div>
                  <input type="text" placeholder="Full Name " />
                </div>
                <div>
                  <input type="email" placeholder="Email" />
                </div>
                <div>
                  <input type="text" placeholder="Phone number" />
                </div>
                <div>
                  <input type="text" className="message-box" placeholder="Message" />
                </div>
                <div className="d-flex ">
                  <button>
                  SEND
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-6">
            <div className="img-box">
              <img src="https://giaycaosmartmen.com/wp-content/uploads/2020/09/giay-sneaker-la-gi.jpg" width='608' alt=""/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
