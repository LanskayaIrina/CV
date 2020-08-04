import React from 'react';
import { string } from 'prop-types';

import './styles.scss';

export const Title = ({ title, profession = null, className }) => (
  <div className={className}>
    <h1 className="title">{title}</h1>
    <h2 className="sub-title">{profession}</h2>
  </div>
);

Title.propTypes = {
  title: string.isRequired,
  profession: string,
  className: string.isRequired,
};

Title.defaultPropTypes = {
  profession: null,
};
