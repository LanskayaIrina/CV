import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from 'routes';

export const App = () => {
  useEffect(() => {
    document.getElementById('app').style.height = document.documentElement.clientHeight;
  }, []);
  return (
    <div className="App" id="app">
      <BrowserRouter BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
};
