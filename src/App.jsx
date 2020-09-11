import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { func } from 'prop-types';

import { AppRouter } from 'routes';
import { getCourses, getSkills } from 'redux/actions';

const mapDispatchToProps = {
  getCourses,
  getSkills,
};

const App = ({ getCourses, getSkills }) => {
  useEffect(() => {
    getCourses();
    getSkills();

    document.getElementById('app').style.height = document.documentElement.clientHeight;
    const clientHeight = Math.max(document.documentElement.clientHeight, document.documentElement.scrollHeight);
    console.log(clientHeight);
    const app = document.getElementById('app');
    app.style.height = clientHeight + 'px';

    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="mobile-screen">
        <h2>Sorry, this site doesn't work on mobile yet.</h2>
      </div>
      <div className="App" id="app">
        <BrowserRouter BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </div>
    </>
  );
};

export default connect(null, mapDispatchToProps)(App);

App.propTypes = {
  getCourses: func.isRequired,
  getSkills: func.isRequired,
};
