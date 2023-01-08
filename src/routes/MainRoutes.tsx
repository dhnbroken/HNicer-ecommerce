import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { adminRoutes, publicRoutes } from './Routes';
import DefaultLayout from 'src/Layout/DefaultLayout/DefaultLayout';
import Login from 'src/pages/Login/Login';
import Home from 'src/pages/Home/Home';
import Register from 'src/pages/Register/Register';
import { GlobalContextProvider } from 'src/Context/GlobalContext';

const getAccessToken = () => {
  return sessionStorage.getItem('token');
};

const getRegister = () => {
  return sessionStorage.getItem('isRegister');
};
const MainRoutes = () => {
  const { getUserInfo, userInfo } = React.useContext(GlobalContextProvider);

  React.useEffect(() => {
    getUserInfo();
  }, []);
  return (
    <React.Fragment>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.component;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <DefaultLayout>{getRegister() ? <Register /> : getAccessToken() ? <Page /> : <Login />}</DefaultLayout>
              }
            />
          );
        })}
        <Route path="/*" element={<DefaultLayout>{getAccessToken() ? <Home /> : <Login />}</DefaultLayout>} />
        <Route
          path="/register"
          element={
            <DefaultLayout>
              <Register />
            </DefaultLayout>
          }
        />
        {userInfo.isAdmin &&
          adminRoutes.map((route, index) => {
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <DefaultLayout>
                    {getRegister() ? <Register /> : getAccessToken() ? <Page /> : <Login />}
                  </DefaultLayout>
                }
              ></Route>
            );
          })}
      </Routes>
    </React.Fragment>
  );
};

export default MainRoutes;
