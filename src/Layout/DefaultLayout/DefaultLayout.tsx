import Footer from 'src/components/Footer/Footer';
import React from 'react';
import Header from 'src/components/Header/Header';

function DefaultLayout ({ children }: any) {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
}

export default DefaultLayout;
