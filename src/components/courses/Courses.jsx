import React from 'react';

import { handleScroll } from 'services/handleScroll';
import { INTERESTS, SKILLS } from 'constants/pathNames';
import './styles.scss';

export const Courses = ({ match, history }) => {
  const historyPushDown = INTERESTS;
  const historyPushUp = SKILLS;

  const scroll = (e) => {
    const delta = e.deltaY;

    handleScroll(match, history, historyPushDown, historyPushUp, delta);
  };

  return <div onWheel={(e) => scroll(e)}>Courses</div>;
};
