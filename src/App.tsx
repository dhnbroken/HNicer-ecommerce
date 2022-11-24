/* eslint-disable @typescript-eslint/space-before-function-paren */
import React, { useEffect } from 'react';
import './App.css';
import 'src/assets/css/styles.scss';
import { GlobalStoreContext } from './Context/GlobalContext';
import MainRoutes from './routes/MainRoutes';
import { useNavigate } from 'react-router-dom';

function App(): JSX.Element {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login');
    }
  }, [localStorage.getItem('user')]);
  return (
    <React.Fragment>
      <GlobalStoreContext>
        <MainRoutes />
      </GlobalStoreContext>
    </React.Fragment>
  );
}

export default App;
