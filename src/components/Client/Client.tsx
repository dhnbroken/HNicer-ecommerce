import { GlobalContextProvider } from 'src/Context/GlobalContext';
import React, { useContext } from 'react';
import ClientComment from './ClientComment';

const Client = () => {
  const { clients } = useContext(GlobalContextProvider);

  console.log(clients);
  return (
    <section className="client_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>
          Testimonial
          </h2>
        </div>
        <div className="carousel-wrap">
          <div className="owl-carousel client_owl-carousel">
            <div className="item">
              {clients.length && clients.map((client, index) => (
                <ClientComment key={index} client={client} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Client;
