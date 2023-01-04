/* eslint-disable @typescript-eslint/space-before-function-paren */
import React, { useEffect } from 'react';
import './App.css';
import 'src/assets/css/styles.scss';
import { GlobalStoreContext } from './Context/GlobalContext';
import MainRoutes from './routes/MainRoutes';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App(): JSX.Element {
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem('isRegister')) {
      navigate('/register');
    }
    if (!sessionStorage.getItem('token')) {
      navigate('/login');
    }
  }, [sessionStorage.getItem('token')]);

  return (
    <React.Fragment>
      <GlobalStoreContext>
        <MainRoutes />
        <ToastContainer
          position="bottom-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </GlobalStoreContext>
    </React.Fragment>
  );
}

export default App;
