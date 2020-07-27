import React from 'react';

import { ExpandMoreButton } from 'components/_shared/ExpandButton';
import { ExpandLessButton } from 'components/_shared/ExpandButton';
import { changePage } from 'services/changePage';
import { CONTACTS, COURSES } from 'constants/pathNames';
import photo from 'accets/Slide3.0.png';
import photo2 from 'accets/Slide3.2.png';
import jacket from 'accets/JacketFirst.png';
import dog from 'accets/SemenFirst.png';
import dogGif from 'accets/SemenGif.gif';
import './styles.scss';

export const Interests = ({ match, history }) => {
  const historyPush = CONTACTS;
  const historyPushUp = COURSES;

  const handleEvent = (e) => {
    const delta = e;

    changePage(match, history, historyPush, historyPushUp, delta);
  };

  return (
    <div className="container" onWheel={(e) => handleEvent(e.deltaY)}>
      <div className="third-slide-first-picture">
        <img className="main-picture" src={photo} alt="ira" />
        <div className="dog-container">
          <img className="dog" src={dog} alt="dog" />
        </div>
        <div className="jacket-container">
          <img className="jacket" src={jacket} alt="jacket" />
        </div>
      </div>
      <div className="third-slide-second-picture">
        <img className="main-picture" src={photo2} alt="ira" />
        <div className="gif-container">
          <img className="gif-dog" src={dogGif} alt="dog" />
        </div>
      </div>
      <div className="expand-less">
        <ExpandLessButton onClick={handleEvent} />
      </div>
      <div className="expand-more">
        <ExpandMoreButton onClick={handleEvent} />
      </div>
    </div>
  );
};
