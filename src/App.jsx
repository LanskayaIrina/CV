import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import detectZoom from 'detect-zoom';

import { AppRouter } from 'routes';

export function App() {
  const handleZoom = () => {
    document.getElementById('12').style.zoom = '100%';
    console.log(window.devicePixelRatio)
    console.log(window.screen.width)
    // if (detectZoom.device() * 100 !== 100) {
    //   //detectZoom.zoom();
    //   detectZoom.zoom();
    // } else {
    //   console.log('your zoom is 100');
    // }
  };

  const fff = () => {
    window.addEventListener('resize', handleZoom);
    //document.body.style.background = 'red'
  };

  useEffect(() => {
   // fff();
  }, []);

  return (
    <div className="App">
      <BrowserRouter BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}
