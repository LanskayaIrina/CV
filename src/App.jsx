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
    const clientHeight = document.documentElement.clientHeight;
    const app = document.getElementById('app');
    app.style.height = clientHeight + 'px';
    getCourses();
    getSkills();

    // eslint-disable-next-line
  }, []);

  return (
    <div className="App" id="app">
      <BrowserRouter BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(App);

App.propTypes = {
  getCourses: func.isRequired,
  getSkills: func.isRequired,
};
