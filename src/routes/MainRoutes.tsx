import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { publicRoutes } from './Routes';
import DefaultLayout from 'src/Layout/DefaultLayout/DefaultLayout';

const MainRoutes = () => {
  return (
    <React.Fragment>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.component;
          return (
            <Route
              key={index}
              path={route.path}
              element={<DefaultLayout>
                <Page />
              </DefaultLayout>
              }
            />
          );
        })}
      </Routes>
    </React.Fragment>
  );
};

export default MainRoutes;
