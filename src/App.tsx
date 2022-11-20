import React from 'react';
import './App.css';
import 'src/assets/css/styles.scss';
import { GlobalStoreContext } from './Context/GlobalContext';
import MainRoutes from './routes/MainRoutes';

function App (): JSX.Element {
  return (
    <React.Fragment>
      <GlobalStoreContext>
        <MainRoutes />
      </GlobalStoreContext>
    </React.Fragment>
  );
}

export default App;
