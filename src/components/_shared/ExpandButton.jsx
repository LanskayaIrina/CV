import React from 'react';
import { func } from 'prop-types';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import blueGrey from '@material-ui/core/colors/blueGrey';

export const ExpandLessButton = ({ onClick }) => {
  return <ExpandLessIcon style={{ color: blueGrey[300], fontSize: 50 }} onClick={() => onClick(0)} />;
};

export const ExpandMoreButton = ({ onClick }) => {
  return <ExpandMoreIcon style={{ color: blueGrey[300], fontSize: 50 }} onClick={() => onClick(2)} />;
};

ExpandLessButton.propTypes = {
  onClick: func.isRequired,
};

ExpandMoreButton.propTypes = {
  onClick: func.isRequired,
};
