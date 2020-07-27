import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AppRouter } from 'routes';
// import { Title } from './components/title/Title';

export function App() {
  return (
    <div className="App">
      {/* <Title /> */}
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}
